import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import BarbersPage from './components/BarbersPage';
import BarberDetails from './components/BarbersPage/Details/BarberDetails';
import AllBarbers from './components/BarbersPage/AllBarbers';
import AuthProvider from './contexts/Auth.context';
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/barbers" element={<BarbersPage />}>
          <Route index element={<AllBarbers />} />
          <Route path=":barberId" element={<BarberDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
