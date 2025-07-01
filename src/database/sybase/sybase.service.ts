import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as Sybase from 'sybase';

@Injectable()
export class SybaseService implements OnModuleInit {
  private db;
  private readonly logger = new Logger(SybaseService.name); 

  onModuleInit() {
    this.db = new Sybase(
      process.env.BD_HOST,
      process.env.BD_PUERTO,
      process.env.BD_NOMBRE,
      process.env.BD_USUARIO,
      process.env.BD_CONTRASENA
    );

    this.db.connect((err) => {
      if (err) {
        this.logger.error('No se pudo conectar con la base de datos Sybase', err);
      } else {
        this.logger.log('Conectado a la base de datos Sybase');
      }
    });
  }  

  async ejecutarConsulta(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.query(query, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }
}
