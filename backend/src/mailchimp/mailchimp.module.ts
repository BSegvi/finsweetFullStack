import { Module } from "@nestjs/common";
import { MailChimpController } from "./mailchimp.controller";
import { MailChimpService } from "./mailchimp.service";
import { PrismaService } from "src/prisma/prisma.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers:[MailChimpController],
  providers: [PrismaService, MailChimpService],
})

export class MailChimpModule {}