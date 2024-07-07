import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import {
  Author as AuthorModel,
  Post as PostModel,
  Homepage as HomepageModel,
  Categories as CategoriesModel,
} from '@prisma/client';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { HomepageService } from './homepage/homepage.service';
import { CategoriesService } from './categories/categories.service';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
    private readonly homepageService: HomepageService,
    private readonly categoriesService: CategoriesService,
  ) {}

  // @Get('post/:id')
  // async getPostById(@Param('id') id: string): Promise<PostModel> {
  //   return this.postService.post({ id: Number(id) });
  // }

  // @Get('feed')
  // async getPublishedPosts(): Promise<PostModel[]> {
  //   return this.postService.posts({
  //     where: { published: true },
  //   });
  // }

  // @Get('filtered-posts/:searchString')
  // async getFilteredPosts(
  //   @Param('searchString') searchString: string,
  // ): Promise<PostModel[]> {
  //   return this.postService.posts({
  //     where: {
  //       OR: [
  //         {
  //           title: { contains: searchString },
  //         },
  //         {
  //           content: { contains: searchString },
  //         },
  //       ],
  //     },
  //   });
  // }

  @Get('homepage')
  async getHomepage(): Promise<HomepageModel[]> {
    return this.homepageService.findAll();
  }

  @Get('posts')
  async getPosts(): Promise<PostModel[]> {
    return this.postService.findAll();
  }

  @Get('featured-post')
  async getFeaturedPost(
    @Param('published_date') published_date: Date
  ): Promise<PostModel[]> {
    return this.postService.posts({
      orderBy: { published_date: 'desc' },
    });
  }

  @Get('categories')
  async getCategories(): Promise<CategoriesModel[]> {
    return this.categoriesService.findAllCategories();
  }

  // @Post('post')
  // async createDraft(
  //   @Body() postData: { title: string; content?: string; authorEmail: string },
  // ): Promise<PostModel> {
  //   const { title, content, authorEmail } = postData;
  //   return this.postService.createPost({
  //     title,
  //     content,
  //     author: {
  //       connect: { email: authorEmail },
  //     },
  //   });
  // }

  // @Post('user')
  // async signupUser(
  //   @Body() userData: { name?: string; email: string },
  // ): Promise<AuthorModel> {
  //   return this.userService.createUser(userData);
  // }

  // @Put('publish/:id')
  // async publishPost(@Param('id') id: string): Promise<PostModel> {
  //   return this.postService.updatePost({
  //     where: { id: Number(id) },
  //     data: { published: true },
  //   });
  // }

  // @Delete('post/:id')
  // async deletePost(@Param('id') id: string): Promise<PostModel> {
  //   return this.postService.deletePost({ id: Number(id) });
  // }
}
