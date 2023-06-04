import { AsteroidRepository } from '@/domain/repositories/AsteroidRepository';
import { useState, FormEvent, useContext } from 'react';
import { AppContext } from './useContextAsteroid';

interface AsteroidSearchProps {
  startDate: string;
  endDate: string;
  errorHome: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

function useHome(): AsteroidSearchProps {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorHome, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { fetchAsteroidList } = useContext(AppContext);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Se obtiene los datos del formulario
    const startDate = event.currentTarget.startDate.value;
    const endDate = event.currentTarget.endDate.value;
    if (startDate === '' && endDate !== '') {
      alert('Please select a start date');
      return;
    }
    try {
      setIsLoading(true);
      const asteroidRepository = new AsteroidRepository();
      const { data, error, status } = await asteroidRepository.getAsteroidList(
        `/asteroids?start_date=${startDate}&end_date=${endDate}`,
      );
      if (status === 200 && data && !error) {
        fetchAsteroidList(data);
      }

      setIsLoading(false);
    } catch (error) {
      setError('Error while fetching data');
      setIsLoading(false);
    }
    // Reiniciar los campos y el error después del envío exitoso
    setStartDate('');
    setEndDate('');
    setError('');
  };

  return {
    startDate,
    endDate,
    errorHome,
    setStartDate,
    setEndDate,
    handleSubmit,
    isLoading,
  };
}

export default useHome;
