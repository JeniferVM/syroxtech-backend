import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesDto } from './dto/sale.dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';

@UseGuards(JwtGuard)
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  createSale(@Body() createSaleDto: SalesDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  getAllSales() {
    return this.salesService.findAll();
  }
}
