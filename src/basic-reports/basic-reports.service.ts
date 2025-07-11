import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/countries/entities/countries.entity';
import { ConsultaService } from 'src/estudiantes/consulta/consulta.service';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';
import { getCountries } from 'src/reports/countries.report';
import { getConstanciaConLogotipos } from 'src/reports/generar-constancia-logotipos.report';
import { IsNull, Not, Repository } from 'typeorm';

@Injectable()
export class BasicReportsService {
    constructor(
        private readonly printerService: PrinterService,
        private readonly consultaService: ConsultaService,
        @InjectRepository(Country) 
        private readonly countryRepository: Repository<Country>
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

    async getCountryReport(){
        const countries = await this.countryRepository.find({
            where: {
                localName: Not(IsNull())
            }
        });
        
        const docDefinition = getCountries({ countries });
        return this.printerService.createPdf(docDefinition)
        
    }

}
