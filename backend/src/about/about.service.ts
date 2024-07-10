import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AboutService {
  constructor(private prisma: PrismaService) {}

  findAboutSection() {
    return this.prisma.aboutUsSection.findMany()
  }

  findAboutPage() {
    return this.prisma.aboutPage.findMany({
      include: {
        content: true
      }
    })
  }
}