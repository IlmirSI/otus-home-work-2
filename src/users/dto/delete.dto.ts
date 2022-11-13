import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { User } from '../user.model';

export class DeleteDto implements Pick<User, 'id'> {
  @IsNotEmpty() @IsNumber() @IsPositive() id: number;
}
