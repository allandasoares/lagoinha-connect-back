import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Departamento } from './schemas/departamento.schema';
import mongoose from 'mongoose';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectModel(Departamento.name)
    private departamentoModel: mongoose.Model<Departamento>,
  ) {}

  async create(departamento: CreateDepartamentoDto): Promise<Departamento> {
    const res = this.departamentoModel.create(departamento);
    return res;
  }

  async findAll(): Promise<Departamento[]> {
    const departamentos = await this.departamentoModel.find();
    return departamentos;
  }

  async findById(id: string): Promise<Departamento> {
    const departamento = await this.departamentoModel.findById(id);
    return departamento;
  }

  async updateById(
    id: string,
    departamento: Departamento,
  ): Promise<Departamento> {
    return await this.departamentoModel.findByIdAndUpdate(id, departamento, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id: string): Promise<Departamento> {
    return await this.departamentoModel.findByIdAndDelete(id);
  }
}
