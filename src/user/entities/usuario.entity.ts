import { Departamentos } from 'src/departamento/entitties/departamento.entities';

export class User {
  id: number;
  nome: string;
  email: string;
  departamento: Departamentos[];
}
