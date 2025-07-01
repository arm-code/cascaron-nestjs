import { Module } from '@nestjs/common';
import { OficinasController } from './oficinas.controller';
import { OficinasService } from './oficinas.service';
import { SybaseModule } from 'src/database/sybase/sybase.module';

@Module({
  imports: [SybaseModule],
  controllers: [OficinasController],
  providers: [OficinasService]
})
export class OficinasModule {}
