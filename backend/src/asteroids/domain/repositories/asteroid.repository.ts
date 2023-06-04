import { Repository, EntityRepository } from 'typeorm';
import { Asteroid } from '../entities/asteroid.entity';

@EntityRepository(Asteroid)
export class AsteroidRepository extends Repository<Asteroid> {
  async getAsteroids(): Promise<Asteroid[]> {
    return this.find();
  }

  async saveAsteroid(asteroid: Asteroid): Promise<void> {
    await this.save(asteroid);
  }

  async deleteAsteroid(asteroid: Asteroid): Promise<void> {
    await this.remove(asteroid);
  }
}
