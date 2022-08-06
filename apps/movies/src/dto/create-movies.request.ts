import { IsNotEmpty, IsString } from 'class-validator';
import { CreateGenresRequest } from './create-genres.request';

export class CreateMovieRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  releaseDate: string;

  @IsNotEmpty()
  duration: string;

  @IsNotEmpty()
  rating: string;
  @IsNotEmpty()
  genres: CreateGenresRequest[];
}
