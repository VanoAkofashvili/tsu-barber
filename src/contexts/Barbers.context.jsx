import { debounce, filter, toUpper } from 'lodash';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAllBarbers } from '../api';
import { useQuery } from '../hooks/useQuery';

const BarbersContext = createContext();

export const useBarbers = () => {
  return useContext(BarbersContext);
};

const BarbersContextProvder = ({ children }) => {
  const { data, loading } = useQuery(getAllBarbers);
  const [allBarbers, setAllBarbers] = useState(data);

  console.log(allBarbers, data);

  useEffect(() => {
    setAllBarbers(data);
  }, [data]);

  const search = debounce((searchTerm) => {
    console.log(searchTerm, data);
    if (!searchTerm) return setAllBarbers(data);

    const filtered = allBarbers.filter(({ firstName, lastName }) => {
      return (
        `${firstName}${lastName}`
          .toUpperCase()
          .indexOf(searchTerm.toUpperCase()) > -1
      );
    });

    setAllBarbers(filtered);
  }, 200);

  return (
    <BarbersContext.Provider value={{ allBarbers, loading, search }}>
      {children}
    </BarbersContext.Provider>
  );
};

export default BarbersContextProvder;
