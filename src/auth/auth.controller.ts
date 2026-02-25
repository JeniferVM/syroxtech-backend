import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() newAuthDto: AuthDto) {
    return this.authService.register(newAuthDto);
  }

  @Post('login')
  logIn(@Body() logInDto: AuthDto) {
    return this.authService.login(logInDto);
  }
}
