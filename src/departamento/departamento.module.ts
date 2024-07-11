import { Module } from '@nestjs/common';
import { DepartamentoController } from './departamento.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartamentosSchema } from './schemas/departamento.schema';
import { DepartamentoService } from './departamento.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Departamento', schema: DepartamentosSchema },
    ]),
  ],
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
})
export class DepartamentoModule {}
