import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';


@Injectable()
export class AuthService {

  constructor( 
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ){}
  
  async create(createUserDto: CreateUserDto) {

    try {

      const {password, ...userData} = createUserDto;      
      
      const user = this.userRepository.create( {
        ...userData,
        password: bcrypt.hashSync(password, 10)
      });
      await this.userRepository.save( user )      

      return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };
    
    } catch (error) {
      this.handleDBErros(error)
    }    
  }

  async login (LoginUserDto: LoginUserDto){
    const { password, email} = LoginUserDto
    const user = await this.userRepository.findOne({ 
     where: {email },
     select: { email: true, password: true, id: true}
    })

    if(!user)
      throw new UnauthorizedException('Credentials are not valid exception (email)')

    if(!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credentials are not valid (password) ')

    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };

  }

  async checkAuthStatus( user: User){
    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };
  }

  private getJwtToken( payload:  JwtPayload){
    const token = this.jwtService.sign( payload );
    return token;

  }

  private handleDBErros(error: any){
    if(error.code === '23505')
      throw new BadRequestException( error. detail )

    console.log( error )
    throw new InternalServerErrorException('Please check server logs.')

    
  }

}
