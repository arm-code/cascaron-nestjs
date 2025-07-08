import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}



  @Get()
  async hello(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.hello();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hola mundo';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('constancia-logotipos/:matricula')
  async generarConstanciaConLogotipos(    
    @Res() response: Response,
    @Param('matricula') matricula: string,
  ) {
    const pdfDoc = this.basicReportsService.constanciaEstudianteLogotipos( matricula );
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hola mundo';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
