import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NameService } from './name.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [NameService],
})
export class AppModule {}
