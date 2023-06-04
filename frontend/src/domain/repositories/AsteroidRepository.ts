/* eslint-disable no-debugger */
import { ApiClient, ApiClientType } from '@/infrastructure/services/ApiClient';
import { AsteroidType } from '@/presentation/components/AsteroidList/components/Asteroid/type';

export interface AsteroidRepository {
  getAsteroidList(
    url: string,
  ): Promise<{ data?: AsteroidType[]; status: number; error?: string }>;
}

export class AsteroidRepository implements AsteroidRepository {
  private apiClient: ApiClientType;
  constructor() {
    this.apiClient = new ApiClient();
  }

  async getAsteroidList(
    url: string,
  ): Promise<{ data?: AsteroidType[]; status: number; error?: string }> {
    const { data, status, statusText } = await this.apiClient.get(url);
    if (status === 200) {
      return { data: data as AsteroidType[], status };
    }
    return { error: statusText, status };
  }
}
