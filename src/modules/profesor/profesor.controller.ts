import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  create(@Body() dto: CreateProfesorDto) {
    return this.profesorService.create(dto);
  }

  @Get()
  findAll() {
    return this.profesorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProfesorDto) {
    return this.profesorService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesorService.remove(+id);
  }
}