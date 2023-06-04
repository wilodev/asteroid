import { useContext, useEffect, useState } from 'react';
import { AsteroidType } from '../components/AsteroidList/components/Asteroid/type';
import { AsteroidRepository } from '@/domain/repositories/AsteroidRepository';
import { FavoriteRepository } from '@/domain/repositories/FavoriteRepository';
import { AppContext } from './useContextAsteroid';

export const useAsteroidList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAsteroid, setCurrentAsteroid] = useState<AsteroidType>();
  const [error, setError] = useState<string>('');
  const { fetchFavorites, fetchAsteroidList, asteroidList } =
    useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const asteroidRepository = new AsteroidRepository();
        const { data, error, status } =
          await asteroidRepository.getAsteroidList('/asteroids');
        if (status === 200 && data && !error) {
          fetchFavorites();
          fetchAsteroidList(data);
        }
        setIsLoading(false);
      } catch (error) {
        setError('Error while fetching data');
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAsteroid = async (id: string) => {
    const asteroidRepository = new AsteroidRepository();
    const { data, error, status } = await asteroidRepository.getAsteroidList(
      `/asteroids/${id}`,
    );
    if (status === 200 && data && !error) {
      setCurrentAsteroid(data[0]);
    }
  };

  return { asteroidList, isLoading, error, getAsteroid, currentAsteroid };
};
