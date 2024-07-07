import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post/post.service';
import { HomepageService } from './homepage/homepage.service';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma/prisma.service';
import { CategoriesService } from './categories/categories.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, PostService, HomepageService, UserService, CategoriesService],
})
export class AppModule {}
