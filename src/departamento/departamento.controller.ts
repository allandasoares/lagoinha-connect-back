import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { Departamento } from './schemas/departamento.schema';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@Controller('departamento')
export class DepartamentoController {
  constructor(private departamentoService: DepartamentoService) {}

  @Post()
  async createDepartamento(
    @Body()
    departamento: CreateDepartamentoDto,
  ): Promise<Departamento> {
    return this.departamentoService.create(departamento);
  }

  @Get()
  async getAllDepartamentos(): Promise<Departamento[]> {
    return this.departamentoService.findAll();
  }

  @Get(':id')
  async getDepartamentoById(
    @Param('id')
    id: string,
  ): Promise<Departamento> {
    return this.departamentoService.findById(id);
  }

  @Put(':id')
  async updateDepartamento(
    @Param('id')
    id: string,
    @Body()
    departamento: UpdateDepartamentoDto,
  ): Promise<Departamento> {
    return this.departamentoService.updateById(id, departamento);
  }

  @Delete(':id')
  async deleteDepartamento(
    @Param('id')
    id: string,
  ): Promise<Departamento> {
    return this.departamentoService.delete(id);
  }
}
