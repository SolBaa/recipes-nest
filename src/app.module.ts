import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MessagesModule, RecipesModule, UsersModule, IngredientsModule, CategoriesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
