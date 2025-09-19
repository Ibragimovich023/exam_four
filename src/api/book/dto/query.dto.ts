import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class QueryBookDto {
    @ApiPropertyOptional({ example: 'Imtixondan qanday otish', description: 'Kitob nomi boyicha qidirish' })
    @IsString()
    @IsOptional()
    title: string;
    
    @ApiPropertyOptional({ example: 'Dilshod Gaibnazarov', description: 'Muallif boyicha qidirish' })
    @IsString()
    @IsOptional()
    author: string;
    
    @ApiPropertyOptional({ example: 2025, description: 'Nashr yili boyicha filter' })
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    published_year: number;
    
    @ApiPropertyOptional({ example: true, description: 'Kitob mavjudligi boyicha filter' })
    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    available: boolean;
}
