import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBookDto {
    @ApiProperty({ example: 'imtixondan qanday otish', description: 'Kitob nomi' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 'Dilshodbek Gaibnazarov', description: 'Kitob muallifi' })
    @IsString()
    @IsNotEmpty()
    author: string;

    @ApiProperty({ example: 2025, description: 'Kitob nashr qilingan yil' })
    @IsNumber()
    @IsOptional()
    published_year: number;

    @ApiProperty({ example: true, description: 'Kitob mavjud yoki yoqligi' })
    @IsBoolean()
    @IsOptional()
    available: boolean;
}
