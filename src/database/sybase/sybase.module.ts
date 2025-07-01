import { Module } from '@nestjs/common';
import { SybaseService } from './sybase.service';
import { SybaseController } from './sybase.controller';

@Module({
  providers: [SybaseService],
  exports: [SybaseService],
  controllers: [SybaseController],
})
export class SybaseModule {}
