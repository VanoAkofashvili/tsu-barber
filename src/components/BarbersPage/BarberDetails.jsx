import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBarber } from '../../api';
import { useQuery } from '../../hooks/useQuery';
import Spinner from '../Spinner';
import defaultAvatar from '../../static/default_avatar.png';
import { upperFirst } from 'lodash';
import { Button } from '../Atoms';

const BarberCard = ({ barber }) => {
  console.log(barber);
  return (
    <div className="bg-neutral-50 w-1/3 flex flex-col gap-5 items-center border-l border-t border-b border-grey-10 rounded-tl-md rounded-bl-md">
      <img
        src={defaultAvatar}
        alt="barber image"
        className="rounded-full w-40 h-40 object-cover my-4"
      />
      <div className="flex items-center gap-4 justify-center ">
        <p className="text-md text-black font-medium">
          {upperFirst(barber.firstName)}
        </p>
        <p className="text-md text-black font-medium">
          {upperFirst(barber.lastName)}
        </p>
      </div>
      <p className="italic text-sm -mt-4">{barber.email}</p>
      <h2 className="text-purple-dark font-semibold text-lg">
        ${barber.price}
      </h2>
      <h3 className=" text-base">{barber.address}</h3>
      <Button className={'w-2/3'}>Order</Button>
    </div>
  );
};

const BarberReviews = ({ reviews }) => {
  return (
    <div className="bg-slate-300 w-2/3 border-t border-r border-b border-grey-10 rounded-tr-md rounded-br-md">
      barber reviews
    </div>
  );
};

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
