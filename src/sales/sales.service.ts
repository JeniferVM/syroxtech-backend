import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SalesDto } from './dto/sale.dto';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSaleDto: SalesDto) {
    return this.prisma.sale.create({
      data: createSaleDto,
    });
  }

  findAll() {
    return this.prisma.sale.findMany();
  }

  update(id: string, updateSaleDto: Partial<SalesDto>) {
    return this.prisma.sale.update({
      where: { id },
      data: updateSaleDto,
    });
  }

  remove(id: string) {
    return this.prisma.sale.delete({
      where: { id },
    });
  }
}
