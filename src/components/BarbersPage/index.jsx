import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const BarbersPage = () => {
  return (
    <div className="h-full flex w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default BarbersPage;
