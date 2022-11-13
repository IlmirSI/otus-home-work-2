import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put } from '@nestjs/common';
import { CreateDto, UpdateDto } from './dto';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() dto: CreateDto): Promise<string> {
    try {
      await this.usersService.create(dto);

      return 'OK';
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Put(':userId')
  async update(@Param('userId') userId: User['id'], @Body() dto: UpdateDto): Promise<string> {
    try {
      await this.usersService.update(userId, dto);
      return 'OK';
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get(':userId')
  async get(@Param('userId') userId: User['id']): Promise<User> {
    try {
      return this.usersService.get(userId);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: User['id']): Promise<string> {
    try {
      await this.usersService.delete(userId);
      return 'OK';
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
