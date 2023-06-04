/* eslint-disable no-debugger */
import { ApiClient, ApiClientType } from '@/infrastructure/services/ApiClient';
import { FavoriteType } from '@/presentation/components/AsteroidList/components/Asteroid/type';

export interface FavoriteRepository {
  getAsteroidList(
    url: string,
  ): Promise<{ data?: FavoriteType[]; status: number; error?: string }>;
}

export class FavoriteRepository implements FavoriteRepository {
  private apiClient: ApiClientType;
  constructor() {
    this.apiClient = new ApiClient();
  }

  async getFavoriteList(
    url: string,
  ): Promise<{ data?: FavoriteType[]; status: number; error?: string }> {
    const { data, status, statusText } = await this.apiClient.get(url);
    if (status === 200 || status === 201) {
      return { data: data as FavoriteType[], status };
    }
    return { error: statusText, status };
  }

  async addFavorite(
    url: string,
    data: FavoriteType,
  ): Promise<{ data?: FavoriteType; status: number; error?: string }> {
    const { status, statusText } = await this.apiClient.post(url, data);
    if (status === 201) {
      return { status };
    }
    return { error: statusText, status };
  }

  async deleteFavorite(
    url: string,
  ): Promise<{ data?: FavoriteType; status: number; error?: string }> {
    const { status, statusText } = await this.apiClient.delete(url);
    if (status === 200) {
      return { status };
    }
    return { error: statusText, status };
  }
}
