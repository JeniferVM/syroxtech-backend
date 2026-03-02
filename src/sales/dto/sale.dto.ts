import { IsNumber, IsPositive, IsString, IsOptional } from 'class-validator';

export class SalesDto {
  @IsString()
  clientName: string;

  @IsString()
  clientEmail: string;

  @IsString()
  @IsOptional()
  clientPhone?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsNumber()
  @IsPositive()
  total: number;

  @IsString()
  @IsOptional()
  paymentMethod?: string;

  @IsString()
  @IsOptional()
  paymentStatus?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  tracking?: string;
}
