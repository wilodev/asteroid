import React from 'react';
import { AppLayout } from '@/presentation/components/Layouts';
import Hero from '@/presentation/components/Hero/Hero';
import { AsteroidList } from '@/presentation/components/AsteroidList';
import { useAsteroidList } from '@/presentation/hooks/useAsteroidSearch';
import { Loading } from '@/presentation/components/Loading';
import { Error } from '@/presentation/components/Error';
import useHome from '@/presentation/hooks/useHome';

function HomePage() {
  const { asteroidList, isLoading, error } = useAsteroidList();
  const { errorHome } = useHome();
  return (
    <AppLayout>
      <Hero />
      {errorHome && <Error>{error}</Error>}
      <div className="container px-10 mx-auto">
        {!isLoading && asteroidList && (
          <AsteroidList asteroids={asteroidList} />
        )}
        {isLoading && <Loading />}
        {error && <Error>{error}</Error>}
      </div>
    </AppLayout>
  );
}

export default HomePage;
