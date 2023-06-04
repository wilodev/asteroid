import ApiClient from '@/infrastructure/services/ApiClient';

class SearchUseCase {
  public async fetchData(url: string) {
    try {
      const response = await ApiClient.get(url);
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

export default SearchUseCase;
