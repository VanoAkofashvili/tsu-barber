import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as api from '../api';
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

  async function signin(credentials) {
    try {
      const { secretToken } = await api.login(credentials || {});
      setToken(secretToken);
      localStorage.setItem('token', secretToken);
      toast.success('Successfully logged in');
      navigate('/barbers');
    } catch (e) {
      toast.error(e);
    }
  }

  async function signup(credentials) {
    try {
      const { secretToken } = await api.registerClient(credentials || {});
      setToken(secretToken);
      toast.success('Successfully registered');
    } catch (e) {
      toast.error(e);
    }
  }

  function signout() {
    setToken(null);
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider
      value={{
        signin,
        signout,
        signup,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
