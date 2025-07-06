import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inscripcion } from './inscripcion.entity';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
import { Estudiante } from '../estudiante/estudiante.entity';
import { Curso } from '../curso/curso.entity';

@Injectable()
export class InscripcionService {
  constructor(
    @InjectRepository(Inscripcion) private repo: Repository<Inscripcion>,
    @InjectRepository(Estudiante) private estudianteRepo: Repository<Estudiante>,
    @InjectRepository(Curso) private cursoRepo: Repository<Curso>,
  ) {}

  async create(dto: CreateInscripcionDto) {
    const estudiante = await this.estudianteRepo.findOne({ where: { id: dto.estudianteId } });
    const curso = await this.cursoRepo.findOne({ where: { id: dto.cursoId } });
    if (!estudiante || !curso) throw new NotFoundException('Estudiante o Curso no encontrados');

    const inscripcion = this.repo.create({ estudiante, curso });
    return this.repo.save(inscripcion);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const inscripcion = await this.repo.findOne({ where: { id } });
    if (!inscripcion) throw new NotFoundException('Inscripción no encontrada');
    return inscripcion;
  }

  async update(id: number, dto: UpdateInscripcionDto) {
    const inscripcion = await this.findOne(id);
    if (dto.estudianteId) {
      const estudiante = await this.estudianteRepo.findOne({ where: { id: dto.estudianteId } });
      if (!estudiante) throw new NotFoundException('Estudiante no encontrado');
      inscripcion.estudiante = estudiante;
    }
    if (dto.cursoId) {
      const curso = await this.cursoRepo.findOne({ where: { id: dto.cursoId } });
      if (!curso) throw new NotFoundException('Curso no encontrado');
      inscripcion.curso = curso;
    }
    return this.repo.save(inscripcion);
  }

  async remove(id: number) {
    const inscripcion = await this.findOne(id);
    return this.repo.remove(inscripcion);
  }
}