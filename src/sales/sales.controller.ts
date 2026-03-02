import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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

  @Patch(':id')
  updateSale(
    @Param('id') id: string,
    @Body() updateSaleDto: Partial<SalesDto>,
  ) {
    return this.salesService.update(id, updateSaleDto);
  }

  @Delete(':id')
  removeSale(@Param('id') id: string) {
    return this.salesService.remove(id);
  }
}
