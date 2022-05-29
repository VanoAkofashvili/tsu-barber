import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../../contexts/Auth.context';
import { useQuery } from '../../../hooks/useQuery';
import { getBarber } from '../../../services';
import Spinner from '../../Spinner';
import BarberCard from './BarberCard';
import BarberReviews from './BarberReviews';

const BarberDetails = () => {
  const { token } = useAuth();
  const { barberId } = useParams();
  const [isOrdered, setIsOrdered] = useState();

  const { data: barber, loading, refetch } = useQuery(getBarber, barberId);

  useEffect(() => {
    if (barber?.clients?.includes(+token)) {
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
