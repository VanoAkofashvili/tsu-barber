import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Input } from '../../Atoms';
import AuthTemplate from '../AuthTemplate';
import { phoneRegExp } from '../../../helpers/regexp';

const Login = () => {
  return (
    <AuthTemplate title={'Login'}>
      <Formik
        initialValues={{
          phone: '',
          password: '',
        }}
        validationSchema={Yup.object({
          phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required(),
          password: Yup.string()
            .min(8, 'Password is too short - min 8 characters')
            .required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form className="bg-white p-4">
              <Input
                label="Phone Number"
                name="phone"
                type="text"
                placeholder="+995 568-769-804"
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
