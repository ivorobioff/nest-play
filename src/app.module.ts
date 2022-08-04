import { Module } from '@nestjs/common';
import { CustomerModule } from './customers/customer.module';

@Module({
  imports: [CustomerModule]
})
export class AppModule {}
