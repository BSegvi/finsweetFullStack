import { Controller, Get, Param } from '@nestjs/common';
import {
  Post as PostModel,
  Homepage as HomepageModel,
  Category as CategoryModel,
  AboutUsSection,
  AboutPage,
  CategoriesOnPosts as CategoriesOnPostsModel,
  Author as AuthorModel
} from '@prisma/client';
import { PostService } from './post/post.service';
import { HomepageService } from './homepage/homepage.service';
import { CategoriesService } from './categories/categories.service';
import { AboutService } from './about/about.service';
import { CategoriesOnPostsService } from './categoriesOnPosts/categoriesOnPosts.service';
import { AuthorService } from './author/author.service';
import { MailChimpService } from './mailchimp/mailchimp.service';

@Controller()
export class AppController {
  constructor(
    private readonly postService: PostService,
    private readonly homepageService: HomepageService,
    private readonly categoriesService: CategoriesService,
    private readonly aboutService: AboutService,
    private readonly categoriesOnPostsService: CategoriesOnPostsService,
    private readonly authorService: AuthorService,
    private readonly mailChimpService: MailChimpService
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

  @Get('post/:id')
  async getPostFromCategory(@Param('id') id: string): Promise<PostModel[]> {
    return this.postService.posts({
      where: { id: Number(id) },
    });
  }

  @Get('categories')
  async getCategories(): Promise<CategoryModel[]> {
    return this.categoriesService.findAllCategories();
  }

  @Get('about-section')
  async findAboutSection(): Promise<AboutUsSection[]> {
    return this.aboutService.findAboutSection();
  }

  @Get('about-page')
  async findAboutPage(): Promise<AboutPage[]> {
    return this.aboutService.findAboutPage();
  }

  @Get('category/:id') 
  async findAllCategoriesOnPosts(@Param('id') id: string): Promise<CategoriesOnPostsModel[]> {
    return this.categoriesOnPostsService.findAllCategoriesOnPosts(Number(id))
  }
  
  @Get('author/:id') 
  async findAuthorDetail(@Param('id') id: string): Promise<AuthorModel[]> {
    return this.authorService.findAuthorDetail(Number(id))
  }
}
