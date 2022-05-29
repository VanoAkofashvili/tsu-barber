import { debounce } from 'lodash';
import { createContext, useContext, useState } from 'react';

import { useQuery } from '../hooks/useQuery';
import { getAllBarbers } from '../services';

const BarbersContext = createContext();

export const useBarbers = () => {
  return useContext(BarbersContext);
};

const BarbersContextProvder = ({ children }) => {
  const { data: allBarbers, loading } = useQuery(getAllBarbers);
  const [filtered, setFiltered] = useState(null);

  const search = debounce((searchTerm) => {
    if (!searchTerm) return setFiltered(null);

    const filtered = allBarbers.filter(({ firstName, lastName }) => {
      return (
        `${firstName}${lastName}`
          .toUpperCase()
          .indexOf(searchTerm.toUpperCase()) > -1
      );
    });

    setFiltered(filtered);
  }, 200);

  return (
    <BarbersContext.Provider
      value={{ allBarbers: filtered || allBarbers, loading, search }}
    >
      {children}
    </BarbersContext.Provider>
  );
};

export default BarbersContextProvder;
