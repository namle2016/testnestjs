import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    
  @Get('profile')
  getListItem() {
    return "OK";
  }

}
