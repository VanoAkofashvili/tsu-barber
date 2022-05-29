import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as api from '../../api';
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, []);

  useEffect(() => {
    if (token) {
      navigate('/barbers');
    } else {
      navigate('/login');
    }
  }, [token]);

  async function signin(credentials) {
    try {
      const { secretToken } = await api.login(credentials || {});
      setToken(secretToken);
      toast.success('Successfully logged in');
    } catch (e) {
      toast.error(e);
    }
  }

  function signout() {
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signin,
        signout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
