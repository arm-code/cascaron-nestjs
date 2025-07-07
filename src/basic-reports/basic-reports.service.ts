import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';
import { getConstanciaConLogotipos } from 'src/reports/generar-constancia-logotipos.report';

@Injectable()
export class BasicReportsService {
    constructor(
        private readonly printerService: PrinterService
    ){}

    
    hello(){
        const docDefinition = getHelloWorldReport({ name: 'Alexis Romero Mendoza', age: 15});
        const doc = this.printerService.createPdf(docDefinition)
        return doc 
    }

    constanciaEstudianteLogotipos( body: any ){
        const docDefinition = getConstanciaConLogotipos(body);
        const doc = this.printerService.createPdf(docDefinition)
        return doc 
    }
}
