import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Profesor } from '../profesor/profesor.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepo: Repository<Curso>,

    @InjectRepository(Profesor)
    private profesorRepo: Repository<Profesor>,
  ) {}

  async create(dto: CreateCursoDto) {
    const profesor = await this.profesorRepo.findOneBy({ id: dto.profesorId });
    if (!profesor) throw new NotFoundException('Profesor no encontrado');

    const curso = this.cursoRepo.create({
      titulo: dto.titulo,
      profesor,
    });

    return this.cursoRepo.save(curso);
  }

  findAll() {
    return this.cursoRepo.find();
  }

  async findOne(id: number) {
    const curso = await this.cursoRepo.findOneBy({ id });
    if (!curso) throw new NotFoundException('Curso no encontrado');
    return curso;
  }

  async update(id: number, dto: UpdateCursoDto) {
    const curso = await this.findOne(id);
    if (dto.profesorId) {
      const profesor = await this.profesorRepo.findOneBy({ id: dto.profesorId });
      if (!profesor) throw new NotFoundException('Profesor no encontrado');
      curso.profesor = profesor;
    }
    curso.titulo = dto.titulo ?? curso.titulo;
    return this.cursoRepo.save(curso);
  }

  remove(id: number) {
    return this.cursoRepo.delete(id);
  }
}