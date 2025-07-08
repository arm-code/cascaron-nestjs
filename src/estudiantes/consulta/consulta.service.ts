import { Injectable } from '@nestjs/common';
import { SybaseService } from 'src/database/sybase/sybase.service';

@Injectable()
export class ConsultaService {
    constructor(
        private readonly sybaseService: SybaseService,
    ){}

    async findStudentByMatricula(matricula: string) {
        const query = `
            SELECT * from estudiantes where Matricula = '${matricula}'
        `;
        return this.sybaseService.ejecutarConsulta(query);
    }
}
