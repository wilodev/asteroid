import { useEffect, useState } from 'react';
import { AsteroidType } from '../components/AsteroidList/components/Asteroid/type';
import { AsteroidRepository } from '@/domain/repositories/AsteroidRepository';

export const useGetAsteroid = (id: string) => {
  const [currentAsteroid, setCurrentAsteroid] = useState<AsteroidType>();

  const getAsteroid = async (id: string) => {
    const asteroidRepository = new AsteroidRepository();
    const { data, error, status } = await asteroidRepository.getAsteroidList(
      `/asteroids/${id}`,
    );
    if (status === 200 && data && !error) {
      setCurrentAsteroid(data[0]);
    }
  };

  useEffect(() => {
    getAsteroid(id);
  }, []);

  return { getAsteroid, currentAsteroid };
};
