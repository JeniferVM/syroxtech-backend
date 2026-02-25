import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @UseGuards(JwtGuard)
  @Post()
  createProduct(@Body() createProductDto: ProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  getAllProducts() {
    return this.productsService.findAll();
  }
  @UseGuards(JwtGuard)
  @Patch(':id')
  editProduct(@Param('id') id: string, @Body() editProductDto: ProductDto) {
    return this.productsService.update(id, editProductDto);
  }
  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
