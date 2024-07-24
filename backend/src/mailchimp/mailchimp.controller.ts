import { Body, Controller, Get, Post } from '@nestjs/common';
import * as mailchimp from '@mailchimp/mailchimp_marketing';
import { MailChimpService } from './mailchimp.service';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us13',
});

@Controller('mailchimp')
export class MailChimpController {
  constructor(
    private readonly mailChimpService: MailChimpService
  ) {}

  @Post('add-member-mail')
  handleAddMemberMailPost(@Body() body: any): object {
    return this.mailChimpService.addListMemberMail(body.email_address);
  }

  @Post('add-member')
  handleAddMemberPost(@Body() userData: any): object {
    return this.mailChimpService.addListMember(userData)
  }
}