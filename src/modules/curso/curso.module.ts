import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './curso.entity';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { Profesor } from '../profesor/profesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso, Profesor])],
  providers: [CursoService],
  controllers: [CursoController],
})
export class CursoModule {}