import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from 'src/users/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: +(process.env.DATABASE_PORT ?? 5432),
      username: process.env.DATABASE_USER ?? 'otus',
      password: process.env.DATABASE_PASSWORD ?? 'otus',
      database: process.env.DATABASE_NAME ?? 'otus',
      models: [UserModel],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
