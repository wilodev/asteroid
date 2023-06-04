import { useContext } from 'react';
import { AppContext } from './useContextAsteroid';

export const useFavorites = () => {
  const { favorites, addFavorite, removeFavorite } = useContext(AppContext);

  const isInFavorites = (id: string): boolean => {
    return favorites.includes(id);
  };

  return { isInFavorites, addFavorite, removeFavorite };
};
