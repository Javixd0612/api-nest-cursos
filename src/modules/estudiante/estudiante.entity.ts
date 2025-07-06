import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inscripcion } from '../inscripcion/inscripcion.entity';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  email!: string;

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.estudiante)
  inscripciones!: Inscripcion[];
}
