import { Form, Formik } from 'formik';
import { Button, Input } from '../../Atoms';
import * as Yup from 'yup';
import { phoneRegExp } from '../../../helpers/regexp';
import { registerClient } from '../../../api/auth';

const RegisterClientForm = () => {
  return (
    <Formik
      initialValues={{
        phone: '12312321321',
        password: 'vano1234',
        confirmPassword: 'vano1234',
      }}
      validationSchema={Yup.object({
        phone: Yup.string()
          .matches(phoneRegExp, 'Phone number is not valid')
          .required(),
        password: Yup.string()
          .min(8, 'Password is too short - min 8 characters')
          .required(),
        confirmPassword: Yup.string()
          .required()
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })}
      onSubmit={async (values, { setErrors }) => {
        try {
          const data = await registerClient({
            password: values.password,
            confirmPassword: values.confirmPassword,
            phone: values.phone,
          });
        } catch (e) {
          setErrors(e);
        }
      }}
    >
      {(formik) => {
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

            <Input
              label="Confirm Password"
              name="confirmPassword"
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
  );
};

export default RegisterClientForm;
