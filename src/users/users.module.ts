import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { makeHistogramProvider } from '@willsoto/nestjs-prometheus';
import { UserModel } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [UsersController],
  providers: [
    UsersService,
    makeHistogramProvider({
      name: 'http_request_duration_ms',
      help: 'Duration of HTTP requests in ms',
      buckets: [0.5, 0.9, 0.99],
      labelNames: ['path', 'method', 'code'],
    }),
  ],
})
export class UsersModule {}
