import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class Genres extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const GenresSchema = SchemaFactory.createForClass(Genres);
