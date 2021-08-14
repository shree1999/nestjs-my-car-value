import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'db.sqlite',
      type: 'sqlite',
      synchronize: true,
      entities: [User],
    }),
    UsersModule,
    ReportsModule,
  ],
})
export class AppModule {}
