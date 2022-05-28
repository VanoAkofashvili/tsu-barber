import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { login } from '../../../api/auth';
import { Button, Input } from '../../Atoms';
import AuthTemplate from '../AuthTemplate';

const Login = () => {
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
        onSubmit={async (values, { setErrors }) => {
          try {
            const data = await login(values || {});
            localStorage.setItem('token', data?.secretToken);
          } catch (e) {
            console.log(e);
            if (typeof e === 'string') {
              toast.error(e);
            } else {
              setErrors(e);
            }
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

              <Button type="submit" loading={formik.isSubmitting}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
      <div className="mt-2 text-black">
        <Link to="/register">Create account</Link>
      </div>
    </AuthTemplate>
  );
};

export default Login;
