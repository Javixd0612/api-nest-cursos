import { IsNotEmpty } from 'class-validator';

export class CreateProfesorDto {
  @IsNotEmpty()
  nombre: string;
}