import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Curso } from '../curso/curso.entity';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @OneToMany(() => Curso, (curso: Curso) => curso.profesor)
  cursos!: Curso[];
}
