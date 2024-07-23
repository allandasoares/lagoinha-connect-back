import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/auth-schema';
import mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/auth-register-dto';
import { LoginDto } from './dto/auth-login-dto';
import { ProfileGoogle } from './entities/profile.google.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<{ token: string }> {
    const { nome, email, senha, departamentos } = registerDto;

    const hashedSenha = await bcrypt.hash(senha, 10);
    const user = await this.userModel.create({
      nome,
      email,
      senha: hashedSenha,
      departamentos,
    });

    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, senha } = loginDto;

    const user = await this.userModel.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(senha, user.senha);
    if (!user || !isPasswordCorrect) {
      throw new UnauthorizedException('E-mail ou senha inválidos.');
    }

    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async validateUser(profileGoogle: ProfileGoogle) {
    const user = await this.userModel.findOne({ email: profileGoogle.email });

    if (!user) {
      return this.register({
        email: profileGoogle.email,
        nome: profileGoogle.nome,
        senha: '',
        departamentos: [],
      });
    }

    return user;
  }

  googleLogin(req) {
    if (!req.user) {
      throw new UnauthorizedException('Usuário não cadastrado no Google.');
    }
    return {
      mensagem: 'usuário ta no google!',
      user: req.user,
    };
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async updateById(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
