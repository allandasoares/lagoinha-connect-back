import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Departamento } from 'src/departamento/schemas/departamento.schema';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsEmail({}, { message: 'Adicione um e-mail correto' })
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  readonly senha: string;

  @IsArray()
  @IsOptional()
  readonly departamentos?: Departamento[];
}
