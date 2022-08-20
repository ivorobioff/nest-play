import { ClassSerializerInterceptor, Module, ValidationPipe } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserGuard } from './auth/user.guard';
import { CommonModule } from './common/common.module';
import { OrderModule } from './order/order.module';

@Module({
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor
  }, {
    provide: APP_PIPE,
    useValue: new ValidationPipe({ whitelist: true, stopAtFirstError: true })
  }, {
    provide: APP_GUARD,
    useClass: UserGuard
  }],
  imports: [
    CommonModule,
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '1234',
      database: 'nest_play',
      autoLoadEntities: true,
      synchronize: true
    }),
    ProductModule,
    OrderModule
  ]
})
export class AppModule {}
