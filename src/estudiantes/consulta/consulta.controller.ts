import { Controller, Get, Param } from '@nestjs/common';
import { ConsultaService } from './consulta.service';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Get('estudiante/:matricula')
  async findStudentByMatricula(@Param('matricula') matricula: string) {
    return this.consultaService.findStudentByMatricula(matricula);
  }
}
