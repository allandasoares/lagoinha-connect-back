import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RegisterDto } from './dto/auth-register-dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth-login-dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/auth-schema';
import { GoogleAuthGuard } from './strategies/guards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body() registerDto: RegisterDto): Promise<{ token: string }> {
    return this.authService.register(registerDto);
  }

  @Get('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }

  @Get('/login/authentication')
  @UseGuards(GoogleAuthGuard)
  googleAuth() {
    return { message: 'Google Authentication' };
  }

  @Get('/login/google')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect() {
    return { message: 'Authentication Success' };
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.authService.findAll();
  }

  @Get(':id')
  async getUserById(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.authService.findById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    user: UpdateUserDto,
  ): Promise<User> {
    return this.authService.updateById(id, user);
  }

  @Delete(':id')
  async deleteUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.authService.delete(id);
  }
}
