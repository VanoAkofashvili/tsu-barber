import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth.context';

const Sidebar = () => {
  const { setUser, token } = useAuth();
  const navigate = useNavigate();
  return (
    <aside className="w-44 h-full flex-shrink-0">
      <div className="h-full py-4 px-3 bg-purple-dark dark:bg-gray-800">
        <ul className="space-y-2 h-full">
          <li>
            <Link
              to="/barbers"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Barbers</span>
            </Link>
          </li>

          <li>
            <div className="cursor-pointer flex items-center p-2 text-base font-normal text-white rounded-lg">
              <svg
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span
                className="flex-1 ml-3 whitespace-nowrap"
                onClick={token ? () => setUser(null) : () => navigate('/login')}
              >
                {token ? 'Log out' : 'Sign in'}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
