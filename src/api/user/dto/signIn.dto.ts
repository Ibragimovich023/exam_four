import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
} from 'class-validator';

export class SignInDto {
  @ApiProperty({
    example: 'yammalinyoo@gmail.com',
    description: 'Foydalanuvchining royxatdan otishda ishlatgan elektron pochta manzili.',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'Yamalinyo123!',
    description: 'foydalanuvchi STRONG PASSWORD .',
  })
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
