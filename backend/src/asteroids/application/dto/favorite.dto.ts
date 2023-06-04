import { IsNotEmpty } from 'class-validator';

export class FavoriteDto {
  @IsNotEmpty()
  asteroidId: string;
}
