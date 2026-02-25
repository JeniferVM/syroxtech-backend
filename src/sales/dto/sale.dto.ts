import { IsNumber, IsPositive } from 'class-validator';

export class SalesDto {
  @IsNumber()
  @IsPositive()
  total: number;
}
