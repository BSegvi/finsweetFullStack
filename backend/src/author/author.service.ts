import { Injectable } from '@nestjs/common';
import { Author, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async categoriesOnPosts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AuthorWhereUniqueInput;
    where?: Prisma.AuthorWhereInput;
    orderBy?: Prisma.AuthorOrderByWithRelationInput;
  }): Promise<Author[]> {
    const { skip, take, where } = params;
    return this.prisma.author.findMany({
      skip,
      take,
      where,
    });
  }

  

  async findAuthorDetail(authorId: number) {
    return this.prisma.author.findMany({
      include: {
        posts: true,
      },
      where: {
        id: authorId,
      },
    });
  }
}
