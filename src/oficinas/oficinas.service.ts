import { Injectable } from '@nestjs/common';
import { SybaseService } from 'src/database/sybase/sybase.service';

@Injectable()
export class OficinasService {
    constructor(
        private readonly sybaseService: SybaseService
    ){}

    async findAll() {
        const query = ` 
      SELECT 
          Clave_Oficina,
          Clave_Poblacion,
          Clave_Entidad,
          Clave_Regional,
          Oficina_Dsc,
          Calle,
          Colonia,
          CodigoPostal,
          Telefono,
          Responsable,
          Bloque_Asignacion,
          Certifica,
          Genera_Ext        
      FROM 
          oficina            
      `;

      return this.sybaseService.ejecutarConsulta(query);
    }

    async findBy(id: string){
        const query = ` 
        SELECT 
            Clave_Oficina,
            Clave_Poblacion,
            Clave_Entidad,
            Clave_Regional,
            Oficina_Dsc,
            Calle,
            Colonia,
            CodigoPostal,
            Telefono,
            Responsable,
            Bloque_Asignacion,
            Certifica,
            Genera_Ext        
        FROM 
            oficina            
        WHERE Clave_Oficina = ${ id }
        `;

        return this.sybaseService.ejecutarConsulta(query);
    }
}
