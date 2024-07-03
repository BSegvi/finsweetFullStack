import { Injectable } from '@nestjs/common';
import { Post, Prisma, Homepage } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomepageService {
  constructor(private prisma: PrismaService) {}

  async data(
    homepageWhereUniqueInput: Prisma.HomepageWhereUniqueInput,
  ): Promise<Homepage | null> {
    return this.prisma.homepage.findUnique({
      where: homepageWhereUniqueInput,
      // include: { posts: true },
    });
  }

  async homepage(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HomepageWhereUniqueInput;
    where?: Prisma.HomepageWhereInput;
    orderBy?: Prisma.HomepageOrderByWithRelationInput;
    include?: Prisma.HomepageInclude;
  }): Promise<Homepage[]> {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.homepage.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  findAll() {
    return this.prisma.homepage.findMany({
      include: {
        posts: true,
        homeAbout: true,
        categories: true,
        started: true,
        authors: true,
        homepage_testimonials: {
          include: {
            testimonials: true,
          },
        },
      },
    });
  }
  // async post(
  //   postWhereUniqueInput: Prisma.PostWhereUniqueInput,
  // ): Promise<Post | null> {
  //   return this.prisma.post.findUnique({
  //     where: postWhereUniqueInput,
  //   });
  // }
}
