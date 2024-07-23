import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Departamento } from 'src/departamento/schemas/departamento.schema';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  nome: string;

  @Prop({ unique: [true, 'Email já cadastrado'] })
  email: string;

  @Prop()
  senha: string;

  @Prop()
  departamentos?: Departamento[];
}

export const UserSchema = SchemaFactory.createForClass(User);
