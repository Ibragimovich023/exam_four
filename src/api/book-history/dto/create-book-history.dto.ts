import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateBookHistoryDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Kitobni UUID si ',
  })
  @IsUUID()
  @IsNotEmpty()
  bookId: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Foydalanuvchining UUID si',
  })
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    example: 'BORROWED',
    description: 'Foydalanuvchining: kitob olgan yoki qaytargan',
    enum: ['BORROWED', 'RETURNED'],
    required: false,
  })
  @IsEnum(['BORROWED', 'RETURNED'])
  @IsOptional()
  action?: 'BORROWED' | 'RETURNED';

  @ApiProperty({
    example: '2025-09-19T10:30:00.000Z',
    description: 'ISO 8601 formatda',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  date: Date;
}
