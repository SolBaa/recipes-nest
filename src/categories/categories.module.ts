import { Module } from '@nestjs/common';
import { CategoriesService } from './categories/categories.service';

@Module({
  providers: [CategoriesService]
})
export class CategoriesModule {}
