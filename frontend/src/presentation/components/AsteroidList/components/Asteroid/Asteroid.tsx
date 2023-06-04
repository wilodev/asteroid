import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/presentation/components/Button';
import { AsteroidType } from './type';

const Asteroid: FC<{
  asteroid: AsteroidType;
  isInFavorite: boolean;
  handleAddFavorite: (id: string) => void;
  handleRemoveFavorite: (id: string) => void;
}> = ({ asteroid, isInFavorite, handleAddFavorite, handleRemoveFavorite }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="./asteroid.jpg" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {asteroid.name}
          </h5>
        </a>
        <ul className="text-gray-400">
          <li className="w-full my-2">
            <span className="font-semibold">Neo Reference:</span>{' '}
            {asteroid.neo_reference_id}
          </li>
          <li className="w-full my-2">
            <span className="font-semibold">Magnitude:</span>{' '}
            {asteroid.absolute_magnitude_h}
          </li>
        </ul>
        <div className="flex items-center justify-between">
          <Link
            to={`/${asteroid.id}`}
            className="w-full h-full font-medium text-center text-white hover:text-white"
          >
            <Button>Read more</Button>
          </Link>
          {!isInFavorite ? (
            <div onClick={() => handleAddFavorite(asteroid.id)}>
              <Button>🤍</Button>
            </div>
          ) : (
            <div onClick={() => handleRemoveFavorite(asteroid.id)}>
              <Button>♥️</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Asteroid;
