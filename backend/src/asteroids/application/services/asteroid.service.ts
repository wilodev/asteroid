import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asteroid } from '../../domain/entities/asteroid.entity';
import { AsteroidRepository } from '../../domain/repositories/asteroid.repository';
import axios, { AxiosResponse } from 'axios';
import { FindOptionsWhere } from 'typeorm';
@Injectable()
export class AsteroidService {
  constructor(
    @InjectRepository(Asteroid)
    private readonly asteroidRepository: AsteroidRepository,
  ) {}

  async getAsteroids(): Promise<Asteroid[]> {
    return this.asteroidRepository.getAsteroids();
  }

  async saveAsteroid(asteroid: Asteroid): Promise<void> {
    await this.asteroidRepository.saveAsteroid(asteroid);
  }

  async deleteAsteroid(asteroid: Asteroid): Promise<void> {
    await this.asteroidRepository.deleteAsteroid(asteroid);
  }

  /**
   * Función para retornar un listado de los registros paginados
   * @param pageSize // cantidad de registros por página
   * @param skip    // cantidad de registros a saltar
   * @param startDate // Optional: fecha inicial en formato AAAA-MM-DD (año-mes-día)
   * @param endDate  // Optional: fecha final en formato AAAA-MM-DD (año-mes-día)
   * @returns
   */
  async findAllWithPagination(
    pageSize: number,
    skip: number,
    startDate?: string,
    endDate?: string,
  ): Promise<Asteroid[]> {
    // Antes de consultar en el mongo o el API se valida que startDate y endDate si tiene valor sea un formato fecha AAAA-MM-DD (año-mes-día)
    if (
      (startDate && !startDate.match(/^\d{4}-\d{2}-\d{2}$/)) ||
      (endDate && !endDate.match(/^\d{4}-\d{2}-\d{2}$/))
    ) {
      throw new Error(
        'startDate and endDate must be in the format YYYY-MM-DD (year-month-day)',
      );
    }
    // Antes de consultar en el mongo primero consultamos en la API de la NASA
    await this.firstOrCreateAsteroidFromNasaApi(startDate, endDate);
    // Consultamos en el mongo los datos paginados
    return this.asteroidRepository.find({
      take: pageSize,
      skip: skip,
    });
  }

  async findById(id): Promise<Asteroid> {
    const query = {
      where: {
        id: id,
      } as FindOptionsWhere<Asteroid>,
    };
    return this.asteroidRepository.findOne(query);
  }

  /**
   * Función para buscar o crear un registro para no repetir datos en la base de datos
   * @param startDate // fecha inicial en formato AAAA-MM-DD (año-mes-día)
   * @param endDate   // fecha final en formato AAAA-MM-DD (año-mes-día)
   */
  async firstOrCreateAsteroidFromNasaApi(
    startDate: string,
    endDate: string,
  ): Promise<void> {
    // Se crea la url para consultar en la API de la NASA
    const apiUrl =
      process.env.NASA_API_URL || 'https://api.nasa.gov/neo/rest/v1/feed';
    // Se valida si startDate y endDate tienen valor, si no tienen valor se asigna la fecha actual
    const startDateServer = startDate || new Date().toISOString().split('T')[0]; // fecha actual en formato AAA-MM-DD (año-mes-día)
    const endDateServer = endDate || new Date().toISOString().split('T')[0]; // fecha actual en formato AAA-MM-DD (año-mes-día)
    // Se obtiene la llave de la API de la NASA
    const apiKey = process.env.NASA_API_KEY || 'DEMO_KEY';
    // Se crea la url para consultar en la API de la NASA
    const url = `${apiUrl}?start_date=${startDateServer}&end_date=${endDateServer}&api_key=${apiKey}`;
    try {
      // Se consulta en la API de la NASA
      const response: AxiosResponse = await axios.get(url);
      // Se valida si la respuesta tiene un error
      if (response?.data?.error_message)
        throw new Error(response.data.error_message);
      // Se obtienen los datos de los asteroides
      const asteroidsData = Object.values(
        response.data.near_earth_objects,
      )[0] as Array<any>;
      // Se recorren los datos de los asteroides
      for (const asteroidData of asteroidsData) {
        const query = {
          where: {
            id: asteroidData['id'],
          },
        } as FindOptionsWhere<Asteroid>;
        // Se busca si el asteroide ya existe en la base de datos
        const existingAsteroid = await this.asteroidRepository.findOneBy(query);
        // Si no existe se crea el asteroide en la base de datos
        if (!existingAsteroid) {
          await this.asteroidRepository.save(asteroidData);
        }
      }
    } catch (error) {
      throw new Error(
        'Error occurred while fetching data from NASA API. ' + error.message,
      );
    }
  }
}
