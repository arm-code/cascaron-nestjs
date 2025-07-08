import { Injectable, NotFoundException } from '@nestjs/common';
import { ConsultaService } from 'src/estudiantes/consulta/consulta.service';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';
import { getConstanciaConLogotipos } from 'src/reports/generar-constancia-logotipos.report';

@Injectable()
export class BasicReportsService {
    constructor(
        private readonly printerService: PrinterService,
        private readonly consultaService: ConsultaService, // Assuming you have a service to fetch student data
    ){}

    
    hello(){
        const docDefinition = getHelloWorldReport({ name: 'Alexis Romero Mendoza', age: 15});
        const doc = this.printerService.createPdf(docDefinition)
        return doc 
    }

    async constanciaEstudianteLogotipos( matricula: string ){

        const student = await this.consultaService.findStudentByMatricula(matricula);

        if( !student ){
            throw new NotFoundException(`Estudiante con matricula ${ matricula } no encontrado`);
        }

        const docDefinition = getConstanciaConLogotipos( student[0] );
        const doc = this.printerService.createPdf(docDefinition)
        return doc 
    }
}
