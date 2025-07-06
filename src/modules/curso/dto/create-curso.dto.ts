import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCursoDto {
  @IsNotEmpty()
  titulo: string;

  @IsNumber()
  profesorId: number;
}