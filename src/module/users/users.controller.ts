import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('users')
export class UsersController {
    
  @Get('profile')
  getListItem() {
    return "OK";
  }

}
