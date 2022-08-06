import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenresRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
