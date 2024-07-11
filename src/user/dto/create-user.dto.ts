import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Departamento } from 'src/departamento/schemas/departamento.schema';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsArray()
  @IsOptional()
  departamentos?: Departamento[];
}
