import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  registerUser(): string {
    return 'Método de cadastrar usuário';
  }

  findAll(): string {
    return 'Método findall';
  }

  findById(): string {
    return 'Método findall';
  }

  update(): string {
    return 'Método para atulizar';
  }

  deleteById(): string {
    return 'Método de excluir usuário.';
  }
}
