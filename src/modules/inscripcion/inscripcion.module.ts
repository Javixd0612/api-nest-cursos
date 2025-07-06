import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscripcion } from './inscripcion.entity';
import { InscripcionService } from './inscripcion.service';
import { InscripcionController } from './inscripcion.controller';
import { Estudiante } from '../estudiante/estudiante.entity';
import { Curso } from '../curso/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inscripcion, Estudiante, Curso])],
  controllers: [InscripcionController],
  providers: [InscripcionService],
})
export class InscripcionModule {}
