import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthTemplate from '../AuthTemplate';
import RegisterBarberForm from './RegisterBarberForm';
import RegisterClientForm from './RegisterClientForm';
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
      <div className="mt-2 text-black">
        <p className="text-sm mt-2">
          Already have an Account?
          <Link to="/login" className="text-purple-dark font-medium ml-2">
            Sign in
          </Link>
        </p>
      </div>
    </AuthTemplate>
  );
};

export default Register;
