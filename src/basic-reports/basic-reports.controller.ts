import { Body, Controller, Get, Post, Res } from '@nestjs/common';
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

  @Post('constancia-logotipos')
  async generarConstanciaConLogotipos(
    @Body() body: any,
    @Res() response: Response
  ) {
    const pdfDoc = this.basicReportsService.constanciaEstudianteLogotipos(body);
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hola mundo';
    pdfDoc.pipe(response);
    pdfDoc.end();

    
  }
}
