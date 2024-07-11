import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartamentoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
