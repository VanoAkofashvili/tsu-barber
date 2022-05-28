import { first, map } from 'lodash';
import { useEffect, useState } from 'react';
import { getAllBarbers } from '../../api/auth';
import { Button } from '../Atoms';
import Search from './Search';
import Sidebar from './Sidebar';

const BarbersPage = () => {
  const [allBarbers, setAllBarbers] = useState([]);
  useEffect(() => {
    getAllBarbers()
      .then((data) => setAllBarbers(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="h-full flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full mx-10">
        <h1 className="text-lg text-purple-dark py-4">Barbers</h1>
        <Search />
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
                <Button className="p-2 w-auto">Details</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarbersPage;
