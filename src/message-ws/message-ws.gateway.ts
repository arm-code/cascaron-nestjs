import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MessageWsService } from './message-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/new-message.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';

@WebSocketGateway({ cors: true })
export class MessageWsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer() wss: Server;

  constructor(
    private readonly messageWsService: MessageWsService,
    private readonly jwtService: JwtService
  ) {
    
  }
  
  async handleConnection(client: Socket) {
    const token = client.handshake.headers.authentication as string;
    let payload: JwtPayload

    try {
      payload = this.jwtService.verify( token )
      await this.messageWsService.registerClient( client, payload.id )
    } catch (error) {
      client.disconnect()
      return;
    }

    //console.log('Cliente conectado: ', client.id)

    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients())
  }

  handleDisconnect(client: any) {
    //console.log('Cliente desconectado: ', client.id)
    this.messageWsService.removeClient( client.id )
    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients())
    
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient( client: Socket, payload: NewMessageDto){
    
    // EMITE MENSAJE UNICAMENTE AL CLIENTE MISMO
    // client.emit( 'message-from-server', {
    //   fullName: 'Yo Soy',
    //   message: payload.message || 'no-message'
    // })

    // EMITE MENSAJE A TODOS LOS CLIENTES CONECTADOS, EXCEPTO AL CLIENTE MISMO
    // client.broadcast.emit( 'message-from-server', {
    //   fullName: 'Yo Soy',
    //   message: payload.message || 'no-message'
    // })

    // EMITE MENSAJE A TODOS INCLUYENDO AL CLIENTE MISMO
    this.wss.emit('message-from-server', {
      fullName: this.messageWsService.getUserFullName( client.id ),
      message: payload.message || 'no-message'
    })
  }


  
}
