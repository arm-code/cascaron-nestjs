import { Controller, Get, Param } from '@nestjs/common';
import { OficinasService } from './oficinas.service';

@Controller('oficinas')
export class OficinasController {
    
    constructor(
        private readonly oficinasService: OficinasService,
    ){}

    @Get()
    async getAll(){
        return this.oficinasService.findAll();
    }

    @Get(':id')
    async getBy(@Param('id') id: string){
        return this.oficinasService.findBy(id)
    }
}
