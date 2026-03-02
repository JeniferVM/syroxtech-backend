import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CategoryDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  position?: number;

  @IsString()
  @IsOptional()
  parentId?: string;
}
