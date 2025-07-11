import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { SybaseModule } from './database/sybase/sybase.module';
import { SybaseController } from './database/sybase/sybase.controller';
import { OficinasModule } from './oficinas/oficinas.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { MessageWsModule } from './message-ws/message-ws.module';
import { PrinterModule } from './printer/printer.module';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { ConsultaModule } from './estudiantes/consulta/consulta.module';
import { CountriesModule } from './countries/countries.module';
import { StoreReportsModule } from './store-reports/store-reports.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,

    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ProductsModule,
    CommonModule,
    SeedModule,
    SybaseModule,
    OficinasModule,
    FilesModule,
    AuthModule,
    MessageWsModule,
    PrinterModule,
    BasicReportsModule,
    ConsultaModule,
    CountriesModule,
    StoreReportsModule,
  ],
  controllers: [ SybaseController],
  providers: [],
})
export class AppModule {}
