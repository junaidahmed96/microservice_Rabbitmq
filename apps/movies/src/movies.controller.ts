import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMovieRequest } from './dto/create-movies.request';
import { MoviesService } from './movies.service';

import { CreateGenresRequest } from './dto/create-genres.request';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async createMovie(@Body() request: CreateMovieRequest) {
    return this.moviesService.createMovie(request);
  }

  @Get('/genres')
  async getGenres() {
    return this.moviesService.getGenres();
  }

  @Post('/create-genres')
  async createGenres(@Body() request: CreateGenresRequest) {
    return this.moviesService.createGenres(request);
  }
  @Get()
  async getMovies() {
    return this.moviesService.getMovies();
  }
  @Get(':id')
  async getMovie(@Param('id') id) {
    return this.moviesService.getMovie(id);
  }
  @Delete(':id')
  async delete(@Param('id') id) {
    return this.moviesService.delete(id);
  }
}
