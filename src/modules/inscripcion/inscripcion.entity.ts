import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Estudiante } from '../estudiante/estudiante.entity';
import { Curso } from '../curso/curso.entity';

@Entity()
export class Inscripcion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Estudiante, estudiante => estudiante.inscripciones, { eager: true })
  estudiante: Estudiante;

  @ManyToOne(() => Curso, curso => curso.inscripciones, { eager: true })
  curso: Curso;
}
