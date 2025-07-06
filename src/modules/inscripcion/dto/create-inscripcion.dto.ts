import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateInscripcionDto {
  @IsNotEmpty()
  @IsNumber()
  estudianteId: number;

  @IsNotEmpty()
  @IsNumber()
  cursoId: number;
}