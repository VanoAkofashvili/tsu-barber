import { Form, Formik } from 'formik';
import { Button, Input } from '../../Atoms';
import * as Yup from 'yup';

import { useAuth } from '../../../contexts/Auth.context';

const RegisterClientForm = () => {
  const auth = useAuth();
  return (
    <Formik
      initialValues={{
        email: 'vanikoakofa@gmail.com',
        password: 'vano1234',
        confirmPassword: 'vano1234',
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
      onSubmit={async (values) => await auth.signup(values)}
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
