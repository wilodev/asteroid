import { AsteroidRepository } from '@/domain/repositories/AsteroidRepository';

class HomeUseCase {
  public async fetchData(url: string) {
    try {
      const asteroidRepository = new AsteroidRepository();
      const response = await asteroidRepository.getAsteroidList(url);
      console.log(
        '🚀 ~ file: SearchUseCase.tsx:7 ~ SearchUseCase ~ fetchData ~ response:',
        response,
      );
    } catch (error) {
      // Manejar el error de la solicitud HTTP
      console.error(error);
    }
  }
}

export default HomeUseCase;
