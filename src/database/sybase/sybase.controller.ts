import { Controller, Get } from '@nestjs/common';
import { SybaseService } from './sybase.service';

@Controller('usuarios')
export class SybaseController {
  constructor(private readonly sybaseService: SybaseService) {}

  @Get()
  async obtenerAlumnos() {
    const query = 'SELECT * FROM usuarios'; // Ajusta según tu tabla real
    return this.sybaseService.ejecutarConsulta(query);
  }
}
