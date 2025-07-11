import { Module } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { BasicReportsController } from './basic-reports.controller';
import { PrinterModule } from 'src/printer/printer.module';
import { ConsultaModule } from 'src/estudiantes/consulta/consulta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'src/countries/entities/countries.entity';
import { CountriesModule } from 'src/countries/countries.module';

@Module({  
  providers: [BasicReportsService],
  controllers: [BasicReportsController],
  imports: [ PrinterModule, ConsultaModule, TypeOrmModule.forFeature([ Country ]), CountriesModule ]
})
export class BasicReportsModule {}
