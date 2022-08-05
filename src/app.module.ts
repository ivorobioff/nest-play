import { ClassSerializerInterceptor, Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.model';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.model';
import { Customer } from './user/customer.model';
import { Staff } from './user/staff.mode';

@Module({
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor
  }, {
    provide: APP_PIPE,
    useValue: new ValidationPipe({ whitelist: true })
  }],
  imports: [
    ProductModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '1234',
      database: 'nest_play',
      entities: [Product, User, Customer, Staff],
      synchronize: true
    }),
    AuthModule
  ]
})
export class AppModule {}
