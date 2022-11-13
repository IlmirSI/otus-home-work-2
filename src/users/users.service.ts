import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, UserModel } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

  async create(user: Omit<User, 'id'>): Promise<void> {
    await this.userModel.create(user);
  }

  async get(userId: User['id']): Promise<User> {
    return this.userModel.findByPk(userId, { raw: true });
  }

  async update(userId: User['id'], data: Omit<User, 'id'>): Promise<void> {
    this.userModel.update(data, { where: { id: userId } });
  }

  async delete(userId: User['id']): Promise<void> {
    this.userModel.destroy({ where: { id: userId } });
  }
}
