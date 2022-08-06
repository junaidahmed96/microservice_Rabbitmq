import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { BILLING_SERVICE } from './constants/services';
import { CreateGenresRequest } from './dto/create-genres.request';
import { CreateMovieRequest } from './dto/create-movies.request';
import { MoviesRepository } from './movies.repository';

@Injectable()
export class MoviesService {
  constructor(
    private readonly moviesRepository: MoviesRepository,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  async createMovie(request: CreateMovieRequest) {
    try {
      return await this.moviesRepository.create(request);
    } catch (err) {
      throw err;
    }
  }

  async createGenres(request: CreateGenresRequest) {
    try {
      const message = await this.billingClient.send(
        { cmd: 'create-genres' },
        request,
      );

      return message;
    } catch (err) {
      throw err;
    }
  }

  async getGenres() {
    const message = await this.billingClient.send(
      { cmd: 'greeting-async' },
      'Progressive Coder',
    );
    return message;
  }

  async getMovies() {
    return this.moviesRepository.find({});
  }
  async getMovie(id) {
    return this.moviesRepository.findOne({ id });
  }
  async delete(id) {
    return this.moviesRepository.remove({ id });
  }
}
