import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../../contexts/Auth.context';
import { Button, Input } from '../../Atoms';
import AuthTemplate from '../AuthTemplate';

const Login = () => {
  const auth = useAuth();
  return (
    <AuthTemplate title={'Login'}>
      <Formik
        initialValues={{
          email: 'vanikoakofa@gmail.com',
          password: 'vano1234',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={async (values) => await auth.signin(values)}
      >
        {(formik) => {
          return (
            <Form className="mt-10">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="example@example.com"
                required
              />

              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="******"
                required
              />

              <Button type="submit" loading={formik.isSubmitting}>
                Sign in
              </Button>
            </Form>
          );
        }}
      </Formik>
      <div className="mt-2 text-black">
        <p className="text-sm mt-2">
          Not registered yet?
          <Link to="/register" className="text-purple-dark font-medium ml-2">
            Create an account
          </Link>
        </p>
      </div>
    </AuthTemplate>
  );
};

export default Login;
