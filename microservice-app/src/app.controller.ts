import { Controller, Logger } from '@nestjs/common';
import { NameService } from './name.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly nameService: NameService) {}

  @MessagePattern('addName')
  async getName(data: string) {
    this.logger.log(`Receiving ${data} from Gateway Client`);
    return this.nameService.getNamePhrase(data);
  }
}
