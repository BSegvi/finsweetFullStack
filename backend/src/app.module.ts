import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post/post.service';
import { HomepageService } from './homepage/homepage.service';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma/prisma.service';
import { CategoriesService } from './categories/categories.service';
import { AboutService } from './about/about.service';
import { CategoriesOnPostsService } from './categoriesOnPosts/categoriesOnPosts.service';
import { AuthorService } from './author/author.service';
import { MailChimpService } from './mailchimp/mailchimp.service';
import { MailChimpModule } from './mailchimp/mailchimp.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [MailChimpModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, PostService, HomepageService, UserService, CategoriesService, AboutService, CategoriesOnPostsService, AuthorService, MailChimpService],
})
export class AppModule {}
