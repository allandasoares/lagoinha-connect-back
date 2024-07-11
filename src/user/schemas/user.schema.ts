import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Departamento } from 'src/departamento/schemas/departamento.schema';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  nome: string;

  @Prop()
  email: string;

  @Prop()
  departamentos?: Departamento[];
}

export const UsersSchema = SchemaFactory.createForClass(User);
