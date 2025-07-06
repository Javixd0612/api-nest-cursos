import { IsEmail, IsString } from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  nombre!: string;

  @IsEmail()
  email!: string;
}
