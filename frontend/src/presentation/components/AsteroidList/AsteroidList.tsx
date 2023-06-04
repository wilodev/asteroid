import React, { FC } from 'react';
import { Asteroid } from './components/Asteroid';
import { AsteroidType } from './components/Asteroid/type';
import { useFavorites } from '@/presentation/hooks/useFavorite';

const AsteroidList: FC<{
  asteroids: AsteroidType[];
}> = ({ asteroids }) => {
  const { isInFavorites, addFavorite, removeFavorite } = useFavorites();
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {asteroids.map((asteroid: AsteroidType) => (
        <Asteroid
          asteroid={asteroid}
          key={asteroid.id}
          isInFavorite={isInFavorites(asteroid.id)}
          handleAddFavorite={addFavorite}
          handleRemoveFavorite={removeFavorite}
        />
      ))}
    </div>
  );
};

export default AsteroidList;
