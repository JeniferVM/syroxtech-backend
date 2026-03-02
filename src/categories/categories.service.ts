import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCategoryDto: CategoryDto) {
    console.log('DTO recibido:', createCategoryDto);

    const { parentId, ...rest } = createCategoryDto;
    console.log('parentId:', parentId);

    return this.prisma.category.create({
      data: {
        ...rest,
        ...(parentId ? { parentId } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  update(id: string, updateCategoryDto: CategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  remove(id: string) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
