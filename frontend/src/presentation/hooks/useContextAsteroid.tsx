import { FavoriteRepository } from '@/domain/repositories/FavoriteRepository';
import React, { FC, createContext, useState } from 'react';
import { AsteroidType } from '../components/AsteroidList/components/Asteroid/type';

interface AppContextProps {
  favorites: string[];
  isLoading: boolean;
  error: string;
  fetchFavorites: () => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  fetchAsteroidList: (data: any) => void;
  asteroidList: AsteroidType[];
}

export const AppContext = createContext<AppContextProps>({
  favorites: [],
  isLoading: false,
  error: '',
  fetchFavorites: () => null,
  addFavorite: (id: string) => null,
  removeFavorite: (id: string) => null,
  fetchAsteroidList: (data: any) => null,
  asteroidList: [],
});

export const AppProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [asteroidList, setAsteroidList] = useState<AsteroidType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const favoriteRepository = new FavoriteRepository();

  const fetchAsteroidList = (data: any) => {
    setAsteroidList(data);
  };

  const fetchFavorites = async () => {
    try {
      const { data, error, status } = await favoriteRepository.getFavoriteList(
        '/favorites',
      );

      if ((status === 200 || status === 201) && data && !error) {
        const favoriteList = data.map(
          (asteroid) => asteroid.asteroidId as string,
        );
        setFavorites(favoriteList);
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const addFavorite = async (id: string) => {
    try {
      console.log('addFavorite', id);
      const { error, status } = await favoriteRepository.addFavorite(
        '/favorites/add',
        { asteroidId: id.toString() },
      );
      if (status === 201 && !error) {
        setFavorites((prevFavorites) => [...prevFavorites, id]);
      }
      fetchFavorites();
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const removeFavorite = async (id: string) => {
    try {
      const { error, status } = await favoriteRepository.addFavorite(
        '/favorites/remove',
        { asteroidId: id.toString() },
      );
      if (status === 200 && !error) {
        setFavorites((prevFavorites) =>
          prevFavorites.filter((favId) => favId !== id),
        );
      }
      fetchFavorites();
    } catch (error) {
      console.error('Error remove favorite:', error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        isLoading,
        error,
        addFavorite,
        removeFavorite,
        fetchFavorites,
        asteroidList,
        fetchAsteroidList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
