import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Departamento } from 'src/departamento/schemas/departamento.schema';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsArray()
  departamento: Departamento[];
}
