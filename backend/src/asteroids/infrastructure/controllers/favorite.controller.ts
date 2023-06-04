import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { FavoriteDto } from '../../application/dto/favorite.dto';
import { FavoriteService } from '../../application/services/favorite.service';
import { Request } from 'express';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get('')
  @HttpCode(HttpStatus.CREATED)
  async getFavorites(@Req() request: Request): Promise<any> {
    // Se obtiene el client_id del middleware
    const clientId = request['client_id'];
    return await this.favoriteService.getFavorites(clientId);
  }

  @Post('add')
  @HttpCode(HttpStatus.CREATED)
  async addFavorite(
    @Body() addFavoriteDto: FavoriteDto,
    @Req() request: Request,
  ): Promise<any> {
    // Se obtiene el client_id del middleware
    const clientId = request['client_id'];
    await this.favoriteService.addFavorite(clientId, addFavoriteDto.asteroidId);
    return { message: 'Asteroid added to favorites' };
  }

  @Post('remove')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeFavorite(
    @Body() removeFavoriteDto: FavoriteDto,
    @Req() request: Request,
  ): Promise<void> {
    // Se obtiene el client_id del middleware
    const clientId = request['client_id'];
    console.log(
      '🚀 ~ file: favorite.controller.ts:45 ~ FavoritesController ~ removeFavoriteDto:',
      removeFavoriteDto,
      clientId,
    );
    await this.favoriteService.removeFavorite(
      clientId,
      removeFavoriteDto.asteroidId,
    );
  }
}
