import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { Button, Input } from '../../Atoms';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { useAuth } from '../../../contexts/Auth.context';
import { registerClient } from '../../../services';

const RegisterClientForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string()
          .min(8, 'Password is too short - min 8 characters')
          .required(),
        confirmPassword: Yup.string()
          .required()
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })}
      onSubmit={async ({ email, password }) => {
        try {
          const { userId } = await registerClient(email, password);
          auth.setUser(userId);
          navigate('/barbers');
        } catch (e) {
          toast.error(e.toString());
        }
      }}
    >
      {(formik) => {
        return (
          <Form className="bg-white p-4">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="example@example.com"
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="******"
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="******"
            />

            <Button type="submit" loading={formik.isSubmitting}>
              Sign up
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterClientForm;
