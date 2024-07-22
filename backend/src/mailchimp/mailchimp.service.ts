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

  async getAllMembers() {
    // let member = await mailchimp.lists.members
    // console.log(member.status)
    // return member
  }

  async addListMember(email: string) {
    console.log(email)
    return await mailchimp.lists.addListMember("753066dad3", {
          email_address: email,
          status: "subscribed",
        })
    // try {
    //   let member = await mailchimp.lists.getListMember('753066dad3', email)
     
    //   if(member.status == 'subscribed') {
    //     return 'subscribed'
    //   } else {
    //     return 'try else'
    //   }

    // } catch (e) {
    //   return await mailchimp.lists.addListMember("753066dad3", {
    //     email_address: email,
    //     status: "subscribed",
    //   })
    // }
  }
}

