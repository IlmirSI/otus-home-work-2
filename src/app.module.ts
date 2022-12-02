import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    PrometheusModule.register({
      defaultLabels: { app: 'otus-homer-word-3' },
      defaultMetrics: { enabled: false },
    }),
  ],
})
export class AppModule {}
