/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductDto: ProductDto) {
    const { categoryId, ...rest } = createProductDto;
    return this.prisma.product.create({
      data: {
        ...rest,
        ...(categoryId ? { categoryId } : {}),
      } as any,
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  update(id: string, updateProductCategoryDto: ProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductCategoryDto,
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
