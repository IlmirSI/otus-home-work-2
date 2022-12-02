import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Histogram } from 'prom-client';
import { CreateDto, UpdateDto } from './dto';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @InjectMetric('http_request_duration_ms') private readonly histogram: Histogram<string>,
  ) {}

  @Post()
  async create(@Body() dto: CreateDto): Promise<string> {
    const timer = this.histogram.startTimer();
    try {
      await this.usersService.create(dto);
      this.histogram.labels({ path: '/users', method: 'POST', code: 201 }).observe(timer());
      return 'OK';
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Put(':userId')
  async update(@Param('userId') userId: User['id'], @Body() dto: UpdateDto): Promise<string> {
    const timer = this.histogram.startTimer();
    try {
      await this.usersService.update(userId, dto);
      this.histogram.labels({ path: '/users/:userId', method: 'PUT', code: 200 }).observe(timer());
      return 'OK';
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get(':userId')
  async get(@Param('userId') userId: User['id']): Promise<User> {
    const timer = this.histogram.startTimer();
    try {
      const user = this.usersService.get(userId);
      this.histogram.labels({ path: '/users/:userId', method: 'GET', code: 200 }).observe(timer());
      return user;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: User['id']): Promise<string> {
    const timer = this.histogram.startTimer();
    try {
      await this.usersService.delete(userId);
      this.histogram.labels({ path: '/users/:userId', method: 'DELETE', code: 200 }).observe(timer());
      return 'OK';
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
