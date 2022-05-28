import { Form, Formik } from 'formik';
import { Button, Input } from '../../Atoms';
import * as Yup from 'yup';
import { phoneRegExp } from '../../../helpers/regexp';

const RegisterBarberForm = () => {
  return (
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
  );
};

export default RegisterBarberForm;
