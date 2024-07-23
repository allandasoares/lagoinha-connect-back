import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { User } from '../schemas/auth-schema';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err: Error, id?: any) => void): void {
    done(null, user);
  }

  async deserializeUser(
    id: any,
    done: (err: Error, user?: any) => void,
  ): Promise<void> {
    const user = await this.authService.findById(id);
    done(null, user || null);
  }
}
