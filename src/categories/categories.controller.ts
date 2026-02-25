import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(JwtGuard)
  @Post()
  createCategory(@Body() createCategoryDto: CategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  getAllCategories() {
    return this.categoriesService.findAll();
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  editCategory(@Param('id') id: string, @Body() editCategoryDto: CategoryDto) {
    return this.categoriesService.update(id, editCategoryDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
