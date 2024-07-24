import { Injectable } from "@nestjs/common";
import * as mailchimp from '@mailchimp/mailchimp_marketing'
import { PrismaService } from "src/prisma/prisma.service";

mailchimp.setConfig({
  apiKey: "process.env.MAILCHIMP_API_KEY",
  server: "process.env.SERVER"
})

@Injectable()
export class MailChimpService {
  constructor(private prisma: PrismaService) {}

  async addListMemberMail(email: string) {
    try {
      return await mailchimp.lists.addListMember("753066dad3", {
        email_address: email,
        status: "subscribed",
      })
    } catch(e) {
      return e
    }
  }

  async addListMember(userData: any) {
    userData = userData.userData
    try {
      return await mailchimp.lists.getListMembersInfo("list_id", userData.email_address)
    } catch(e) {
      return e.response
    }
  }
}

