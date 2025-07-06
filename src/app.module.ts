import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EstudianteModule } from './modules/estudiante/estudiante.module';
import { ProfesorModule } from './modules/profesor/profesor.module';
import { CursoModule } from './modules/curso/curso.module';
import { InscripcionModule } from './modules/inscripcion/inscripcion.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT || 3306),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: true, // Solo para desarrollo
      autoLoadEntities: true,
    }),
    EstudianteModule,
    ProfesorModule,
    CursoModule,
    InscripcionModule,
  ],
})
export class AppModule {}
