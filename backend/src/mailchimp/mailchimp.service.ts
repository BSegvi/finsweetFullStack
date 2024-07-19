import { Injectable } from "@nestjs/common";
import * as mailchimp from '@mailchimp/mailchimp_marketing'
import { PrismaService } from "src/prisma/prisma.service";

mailchimp.setConfig({
  apiKey: "794ee32a1a70f8fd3e6880578ef7b614-us13",
  server: "us13"
})

@Injectable()
export class MailChimpService {
  constructor(private prisma: PrismaService) {}

  async getAllLists() {
    return mailchimp.lists.getAllLists()
  }

  async addListMember(email: string) {
    return await mailchimp.lists.addListMember("753066dad3", {
      email_address: email,
      status: "subscribed",
    })
  }
}

