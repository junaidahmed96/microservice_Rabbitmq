import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { CreateGenresRequest } from '../dto/create-genres.request';

@Schema({ versionKey: false })
export class Movie extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  description: string;
  @Prop()
  releaseDate: string;

  @Prop()
  duration: string;

  @Prop()
  rating: string;

  @Prop()
  genres: CreateGenresRequest[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
