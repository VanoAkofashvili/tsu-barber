import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, []);

  function signout() {
    setToken(null);
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider
      value={{
        signout,

        token,
        setUser: (token) => {
          localStorage.setItem('token', token);
          setToken(+token);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
