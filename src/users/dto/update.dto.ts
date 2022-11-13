import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { User } from '../user.model';

export class UpdateDto implements Omit<User, 'id'> {
  @IsNotEmpty() @IsString() username: string;
  @IsNotEmpty() @IsString() firstName: string;
  @IsNotEmpty() @IsString() lastName: string;
  @IsNotEmpty() @IsString() @IsEmail() email: string;
  @IsNotEmpty() @IsString() @IsPhoneNumber('RU') phone: string;
}
