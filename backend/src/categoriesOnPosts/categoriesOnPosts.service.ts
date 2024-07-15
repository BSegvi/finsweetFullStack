import { Injectable } from "@nestjs/common";
import { CategoriesOnPosts, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoriesOnPostsService {
  constructor(private prisma: PrismaService) {}

  async categoriesOnPosts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<CategoriesOnPosts[]> {
    const { skip, take, where } = params;
    return this.prisma.categoriesOnPosts.findMany({
      skip,
      take,
      where,
    });
  }

  async findAllCategoriesOnPosts(categoryId: number) {
    return this.prisma.categoriesOnPosts.findMany({
      include: {
        post: true,
        category: true
      },
      where: {
        categoryId: categoryId
      }
    })
  }
}