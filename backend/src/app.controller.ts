import { Controller, Get, Param } from '@nestjs/common';
import {
  Post as PostModel,
  Homepage as HomepageModel,
  Categories as CategoriesModel,
} from '@prisma/client';
import { PostService } from './post/post.service';
import { HomepageService } from './homepage/homepage.service';
import { CategoriesService } from './categories/categories.service';

@Controller()
export class AppController {
  constructor(
    private readonly postService: PostService,
    private readonly homepageService: HomepageService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Get('homepage')
  async getHomepage(): Promise<HomepageModel[]> {
    return this.homepageService.findAll();
  }

  @Get('posts')
  async getPosts(): Promise<PostModel[]> {
    return this.postService.findAll();
  }

  @Get('blog-detail/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.getPost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Get('featured-post')
  async getFeaturedPost(
    @Param('published_date') published_date: Date,
  ): Promise<PostModel[]> {
    return this.postService.posts({
      orderBy: { published_date: 'desc' },
    });
  }

  @Get('categories')
  async getCategories(): Promise<CategoriesModel[]> {
    return this.categoriesService.findAllCategories();
  }
}
