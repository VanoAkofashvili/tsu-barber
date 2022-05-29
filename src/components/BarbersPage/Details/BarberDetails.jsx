import { useParams } from 'react-router-dom';
import { getBarber } from '../../../api';
import { useQuery } from '../../../hooks/useQuery';
import Spinner from '../../Spinner';
import BarberCard from './BarberCard';
import BarberReviews from './BarberReviews';

const BarberDetails = () => {
  const { barberId } = useParams();
  const { data: barber, loading } = useQuery(getBarber, { id: barberId });
  console.log(barber);
  if (loading)
    return (
      <div className="w-full flex justify-center">
        <Spinner size="large" />
      </div>
    );

  return (
    <div className="w-full h-full flex p-10">
      <BarberCard barber={barber || {}} />
      <BarberReviews reviews={barber?.reviews} />
    </div>
  );
};

export default BarberDetails;
