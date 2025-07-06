import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './profesor.entity';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private profesorRepo: Repository<Profesor>,
  ) {}

  create(dto: CreateProfesorDto) {
    const profesor = this.profesorRepo.create(dto);
    return this.profesorRepo.save(profesor);
  }

  findAll() {
    return this.profesorRepo.find();
  }

  async findOne(id: number) {
    const profe = await this.profesorRepo.findOneBy({ id });
    if (!profe) throw new NotFoundException('Profesor no encontrado');
    return profe;
  }

  async update(id: number, dto: UpdateProfesorDto) {
    const profe = await this.findOne(id);
    Object.assign(profe, dto);
    return this.profesorRepo.save(profe);
  }

  remove(id: number) {
    return this.profesorRepo.delete(id);
  }
}