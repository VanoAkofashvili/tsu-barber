import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthTemplate from '../AuthTemplate';
import RegisterBarberForm from './BarberForm';
import RegisterClientForm from './ClientForm';
import { startCase } from 'lodash';

const REGISTER_TYPE = {
  client: 'client',
  barber: 'barber',
};

const Register = () => {
  const [registerType, setRegisterType] = useState(REGISTER_TYPE.client);

  return (
    <AuthTemplate title={`${startCase(registerType)} Registration`}>
      <div className="bg-white p-2 flex justify-between border-b border-grey-5">
        <div
          className="cursor-pointer"
          onClick={() => setRegisterType(REGISTER_TYPE.client)}
        >
          Client Registration
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setRegisterType(REGISTER_TYPE.barber)}
        >
          Barber Registration
        </div>
      </div>
      {
        {
          [REGISTER_TYPE.client]: <RegisterClientForm />,
          [REGISTER_TYPE.barber]: <RegisterBarberForm />,
        }[registerType]
      }
      <div className="mt-2 text-black w-full flex justify-center">
        <Link to="/">Login</Link>
      </div>
    </AuthTemplate>
  );
};

export default Register;
