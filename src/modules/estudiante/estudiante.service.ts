import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private repo: Repository<Estudiante>,
  ) {}

  create(data: CreateEstudianteDto) {
    const estudiante = this.repo.create(data);
    return this.repo.save(estudiante);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const estudiante = await this.repo.findOne({ where: { id } });
    if (!estudiante) throw new NotFoundException('Estudiante no encontrado');
    return estudiante;
  }

  async update(id: number, data: UpdateEstudianteDto) {
    const estudiante = await this.findOne(id);
    Object.assign(estudiante, data);
    return this.repo.save(estudiante);
  }

  async remove(id: number) {
    const estudiante = await this.findOne(id);
    return this.repo.remove(estudiante);
  }
}
