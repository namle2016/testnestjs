import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    console.log("login");
    console.log(signInDto.username);
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
  @Public()
  @Get('profile')
  getProfile() {
    console.log("test2");
    return "OK";
  }
 
}
