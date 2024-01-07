import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';
import { ProductModule } from './module/products/product.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

