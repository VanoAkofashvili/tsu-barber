import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBarber, order } from '../../../api';
import { useAuth } from '../../../contexts/Auth.context';
import { useQuery } from '../../../hooks/useQuery';
import Spinner from '../../Spinner';
import BarberCard from './BarberCard';
import BarberReviews from './BarberReviews';

const BarberDetails = () => {
  const { barberId } = useParams();
  const {
    data: barber,
    loading,
    refetch,
  } = useQuery(getBarber, { id: barberId });

  const { token } = useAuth();
  const [isOrdered, setIsOrdered] = useState();
  const userId = token?.split('.')[0];

  useEffect(() => {
    if (barber?.clients?.includes(+userId)) {
      setIsOrdered(true);
    }
  }, [barber]);

  if (loading)
    return (
      <div className="w-full flex justify-center">
        <Spinner size="large" />
      </div>
    );

  return (
    <div className="w-full h-full flex p-10">
      <BarberCard
        barber={barber || {}}
        isOrdered={isOrdered}
        refetch={refetch}
      />
      <BarberReviews
        barberId={barber?.id}
        reviews={barber?.reviews}
        isOrdered={isOrdered}
        refetch={refetch}
      />
    </div>
  );
};

export default BarberDetails;
