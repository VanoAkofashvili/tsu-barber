import { debounce, filter, toUpper } from 'lodash';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAllBarbers } from '../api';
import { useQuery } from '../hooks/useQuery';
import { useAuth } from './Auth.context';
import * as api from '../api';

const BarbersContext = createContext();

export const useBarbers = () => {
  return useContext(BarbersContext);
};

const BarbersContextProvder = ({ children }) => {
  const { token } = useAuth();
  const { data, loading } = useQuery(getAllBarbers);
  const [allBarbers, setAllBarbers] = useState(data);

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

  async function order(barberId) {
    return await api.order(barberId, token);
  }

  return (
    <BarbersContext.Provider value={{ allBarbers, loading, search, order }}>
      {children}
    </BarbersContext.Provider>
  );
};

export default BarbersContextProvder;
