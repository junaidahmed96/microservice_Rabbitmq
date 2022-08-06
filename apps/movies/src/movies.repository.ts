import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Movie } from './schemas/movies.schema';

@Injectable()
export class MoviesRepository extends AbstractRepository<Movie> {
  protected readonly logger = new Logger(MoviesRepository.name);

  constructor(
    @InjectModel(Movie.name) movieModel: Model<Movie>,
    @InjectConnection() connection: Connection,
  ) {
    super(movieModel, connection);
  }
}
