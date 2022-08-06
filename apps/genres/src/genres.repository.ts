import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Genres } from './schemas/genres.schema';

@Injectable()
export class GenresRepository extends AbstractRepository<Genres> {
  protected readonly logger = new Logger(GenresRepository.name);

  constructor(
    @InjectModel(Genres.name) genresModel: Model<Genres>,
    @InjectConnection() connection: Connection,
  ) {
    super(genresModel, connection);
  }
}
