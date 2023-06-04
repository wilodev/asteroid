import React from 'react';
import { AppLayout } from '@/presentation/components/Layouts';
import { useParams } from 'react-router-dom';
import { useGetAsteroid } from '@/presentation/hooks/useGetAsteroid';
function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const { currentAsteroid } = useGetAsteroid(id as string);
  return (
    <AppLayout>
      <div className="container px-10 mx-auto">
        <h1>Detail Page Asteroid : {id}</h1>
        <p>{currentAsteroid?.name}</p>
        <p>{currentAsteroid?.id}</p>
        <p>{currentAsteroid?.absolute_magnitude_h}</p>
      </div>
    </AppLayout>
  );
}

export default DetailPage;
