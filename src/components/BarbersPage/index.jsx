import { Outlet } from 'react-router-dom';
import BarbersContextProvder from '../../contexts/Barbers.context';
import Sidebar from './Sidebar';

const BarbersPage = () => {
  return (
    <BarbersContextProvder>
      <div className="h-full flex w-full">
        <Sidebar />
        <Outlet />
      </div>
    </BarbersContextProvder>
  );
};

export default BarbersPage;
