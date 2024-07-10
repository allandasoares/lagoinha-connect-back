import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Departamento {
  @Prop()
  nome: string;
}

export const DepartamentosSchema = SchemaFactory.createForClass(Departamento);
