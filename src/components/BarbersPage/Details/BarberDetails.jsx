import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth.context';
import { getBarber } from '../../../services/barbers.service';
import Spinner from '../../Spinner';
import BarberCard from './BarberCard';
import BarberReviews from './BarberReviews';

const BarberDetails = () => {
  const { barberId } = useParams();
  const [barber, setBarber] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBarber(barberId).then((res) => {
      setBarber(res);
      setLoading(false);
    });
  }, [barberId]);

  function refetch() {}

  const { token } = useAuth();
  const [isOrdered, setIsOrdered] = useState();
  const userId = token;

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
