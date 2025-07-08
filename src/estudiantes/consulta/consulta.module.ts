import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { SybaseModule } from 'src/database/sybase/sybase.module';


@Module({
  imports: [ SybaseModule ],
  controllers: [ConsultaController],
  providers: [ConsultaService],
  
})
export class ConsultaModule {}
