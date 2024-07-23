import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly configService: ConfigService,
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: configService.get<string>('CLIENT_ID'),
      clientSecret: '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',
      callbackURL: 'http://localhost:4000/auth/login/google',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    const user = await this.authService.validateUser({
      nome: profile.displayName,
      email: profile.emails[0].value,
      foto: profile.photos[0].value,
    });

    return user || null;
  }
}
