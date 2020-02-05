import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
  ClientOptions,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class NameService {
  private client: ClientProxy;
  private clientOptions: ClientOptions = {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  };

  constructor() {
    this.client = ClientProxyFactory.create(this.clientOptions);
  }

  sendName(data: string): Observable<string> {
    return this.client.send<string, string>('addName', data);
  }
}
