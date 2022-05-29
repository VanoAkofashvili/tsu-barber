import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../../contexts/Auth.context';
import { Button, Input } from '../../Atoms';
import AuthTemplate from '..';
import { login } from '../../../services/auth.service';
import { toast } from 'react-toastify';

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  return (
    <AuthTemplate title={'Login'}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={async ({ email, password }) => {
          try {
            const userId = await login(email, password);
            setUser(userId);
            navigate('/barbers');
          } catch (e) {
            toast.error(e.toString());
          }
        }}
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
