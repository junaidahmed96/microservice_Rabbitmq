import { Module } from '@nestjs/common';
import { RmqModule, DatabaseModule } from '@app/common';
import * as Joi from 'joi';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';
import { ConfigModule } from '@nestjs/config';
import { GenresRepository } from './genres.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Genres, GenresSchema } from './schemas/genres.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Genres.name, schema: GenresSchema }]),
    RmqModule,
  ],
  controllers: [GenresController],
  providers: [GenresService, GenresRepository],
})
export class GenresModule {}
