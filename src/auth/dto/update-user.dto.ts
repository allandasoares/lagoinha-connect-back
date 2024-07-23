import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Departamento } from 'src/departamento/schemas/departamento.schema';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsArray()
  @IsOptional()
  departamentos?: Departamento[];
}
