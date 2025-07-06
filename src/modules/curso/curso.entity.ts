import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Profesor } from '../profesor/profesor.entity';
import { Inscripcion } from '../inscripcion/inscripcion.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @ManyToOne(() => Profesor, (profesor: Profesor) => profesor.cursos, { eager: true })
  profesor!: Profesor;

  @OneToMany(() => Inscripcion, (inscripcion: Inscripcion) => inscripcion.curso)
  inscripciones!: Inscripcion[];
}
