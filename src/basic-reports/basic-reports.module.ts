import { Module } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { BasicReportsController } from './basic-reports.controller';
import { PrinterModule } from 'src/printer/printer.module';
import { ConsultaModule } from 'src/estudiantes/consulta/consulta.module';

@Module({  
  providers: [BasicReportsService],
  controllers: [BasicReportsController],
  imports: [ PrinterModule, ConsultaModule ]
})
export class BasicReportsModule {}
