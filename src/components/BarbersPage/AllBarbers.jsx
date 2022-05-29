import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { useBarbers } from '../../contexts/Barbers.context';
import { Button } from '../Atoms';
import Spinner from '../Spinner';
import Search from './Search';

const AllBarbers = () => {
  const { allBarbers, loading } = useBarbers();

  return (
    <>
      <div className="flex flex-col w-full mx-10">
        <h1 className="text-lg text-purple-dark py-4">Barbers</h1>
        <Search />

        {loading ? (
          <div className="w-full flex justify-center">
            <Spinner size="large" />
          </div>
        ) : (
          <>
            <div className="w-full flex items-center my-4">
              <p className="relative border-b-2 border-purple-light pb-2">
                All barbers
              </p>
              <p className="relative pb-2 flex-1 border-b-2 border-grey-30 pl-6">
                Highest rated
              </p>
            </div>
            <div className="w-full flex border-b border-grey-10 py-3">
              {map(
                ['First Name', 'Last Name', 'Price'],
                function tableHeader(title, ind) {
                  return (
                    <div className="flex-shrink-0 flex-1 text-base" key={ind}>
                      {title}
                    </div>
                  );
                }
              )}
            </div>
            {map(allBarbers, function renderEachBarber(barber) {
              const { id, firstName, lastName, price } = barber;
              return (
                <div
                  key={id}
                  className="flex gap-2 border-b border-grey-10 py-3 items-center"
                >
                  <p className="flex-1 text-purple-dark">{firstName}</p>
                  <p className="flex-1">{lastName}</p>
                  <div className="flex-1 flex items-center justify-between">
                    <p className="flex-grow-1">${price}</p>
                    <Button className="p-2 w-auto">
                      <Link to={`${id}`}>Details</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default AllBarbers;
