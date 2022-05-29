import { upperFirst } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth.context';
import defaultAvatar from '../../../static/barber.png';
import { Button } from '../../Atoms';

const BarberCard = ({ barber }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="bg-neutral-50 w-1/3 flex flex-col gap-5 items-center border-l border-t border-b border-grey-10 rounded-tl-md rounded-bl-md">
      <img
        src={defaultAvatar}
        alt="barber image"
        className="rounded-full object-cover my-4"
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
      {token ? (
        <Button className={'w-2/3'}>Order</Button>
      ) : (
        <div className="mt-3">
          You must login to order{' '}
          <Button onClick={() => navigate('/login')}>Login</Button>
        </div>
      )}
    </div>
  );
};

export default BarberCard;
