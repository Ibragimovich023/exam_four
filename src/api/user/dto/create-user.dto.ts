import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Lamine Yamal',
    description: 'Foydalanuvcji ISM FAMILIYASI.',
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: 'yammalinyoo@gmail.com',
    description: 'foydalanuvchi email unikal.',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'Yamalinyo123!',
    description:
      'STRONGPASSWORD',
  })
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
