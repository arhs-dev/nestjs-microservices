import { Injectable } from '@nestjs/common';

@Injectable()
export class NameService {
  getNamePhrase(data: string): string {
    return `Hello ${data}!!! Toss a coin to your microservice!`;
  }
}
