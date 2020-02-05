import { Controller, Logger, Body, Post } from '@nestjs/common';
import { NameService } from './name.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly nameService: NameService) {}

  @Post('addName')
  async addName(@Body('data') data: string) {
    this.logger.log(`Sending ${data} to Microservice`);
    return this.nameService.sendName(data);
  }
}
