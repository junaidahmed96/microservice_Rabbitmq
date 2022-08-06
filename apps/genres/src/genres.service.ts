import { Injectable, Logger } from '@nestjs/common';
import { CreateGenresRequest } from './dto/create-genres.request';

import { GenresRepository } from './genres.repository';

@Injectable()
export class GenresService {
  constructor(private readonly genresRepository: GenresRepository) {}
  private readonly logger = new Logger(GenresService.name);

  getHello(): string {
    return 'Hello World!';
  }
  getGenres() {
    return this.genresRepository.find({});
  }

  createGenres(data: CreateGenresRequest) {
    return this.genresRepository.create(data);
  }
}
