import { Column, Model, Table } from 'sequelize-typescript';

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Table({ tableName: 'users', underscored: true, timestamps: false })
export class UserModel extends Model<User, Omit<User, 'id'>> implements User {
  @Column({ autoIncrement: true, primaryKey: true }) id: number;
  @Column username: string;
  @Column firstName: string;
  @Column lastName: string;
  @Column email: string;
  @Column phone: string;
}
