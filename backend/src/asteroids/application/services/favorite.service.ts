import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorite } from '../../domain/entities/favorite.entity';
import { FavoriteRepository } from '../../domain/repositories/favorite.repository';
import { FindManyOptions, FindOneOptions, FindOptionsWhere } from 'typeorm';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepository: FavoriteRepository,
  ) {}

  async addFavorite(clientId: string, asteroidId: string): Promise<void> {
    // Se Busca por si ya existe el favorito
    const query = {
      where: {
        clientId,
        asteroidId,
      },
    } as FindOneOptions<Favorite>;
    // Se busca el favorito
    const favoriteExist = await this.favoriteRepository.findOne(query);
    if (!favoriteExist) {
      const favorite = new Favorite();
      favorite.clientId = clientId;
      favorite.asteroidId = asteroidId;
      await this.favoriteRepository.save(favorite);
    }
  }

  async removeFavorite(clientId: string, asteroidId: string): Promise<void> {
    await this.favoriteRepository.delete({ clientId, asteroidId });
  }

  async getFavorites(clientId: string): Promise<Favorite[]> {
    const query = {
      clientId,
    } as FindManyOptions<Favorite>;
    return this.favoriteRepository.find(query);
  }
}
