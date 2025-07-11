import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/countries.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Country])],
  controllers: [CountriesController],
  providers: [CountriesService],
  exports: [CountriesService, TypeOrmModule]
})
export class CountriesModule {}
