import { IsOptional, IsEmail } from 'class-validator';

export class UpdateEstudianteDto {
  @IsOptional()
  nombre?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
