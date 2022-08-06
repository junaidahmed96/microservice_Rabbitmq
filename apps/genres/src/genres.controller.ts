import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { GenresService } from './genres.service';
import { CreateGenresRequest } from './dto/create-genres.request';

@Controller('genres')
export class GenresController {
  constructor(
    private readonly genresService: GenresService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): any {
    return this.genresService.getHello();
  }

  @MessagePattern({ cmd: 'create-genres' })
  async handleOrderCreated(@Payload() data: CreateGenresRequest) {
    return this.genresService.createGenres(data);
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAysnc(): Promise<any> {
    return this.genresService.getGenres();
  }
}
