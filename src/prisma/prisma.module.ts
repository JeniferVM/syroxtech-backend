import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CategoriesModule } from 'src/categories/categories.module';

@Global()
@Module({
  imports: [CategoriesModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
