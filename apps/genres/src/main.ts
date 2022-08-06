import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { GenresModule } from './genres.module';

async function bootstrap() {
  const app = await NestFactory.create(GenresModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('BILLING'));
  await app.startAllMicroservices();
}
bootstrap();
