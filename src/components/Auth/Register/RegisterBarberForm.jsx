import { Form, Formik } from 'formik';
import { Button, Input } from '../../Atoms';
import * as Yup from 'yup';
import { registerBarber } from '../../../api/auth';
import { toast } from 'react-toastify';

const RegisterBarberForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: 'vano',
        lastName: 'akofa',
        email: 'vanikoakofa@gmail.com',
        address: 'Tbilisi',
        price: 100,
        password: 'vano1234',
        confirmPassword: 'vano1234',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email().required(),
        address: Yup.string().required(),
        price: Yup.number().required().integer().positive(),
        password: Yup.string()
          .min(8, 'Password is too short - min 8 characters')
          .required(),
        confirmPassword: Yup.string()
          .required()
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })}
      onSubmit={async (values, { setErrors }) => {
        try {
          const data = await registerBarber(values);
          toast.success('Account created');
        } catch (e) {
          if (typeof e === 'stirng') {
            // If generic error
            toast.error(e);
          } else {
            setErrors(e); // If fields is specified
          }
        }
      }}
    >
      {(formik) => {
        return (
          <Form className="bg-white p-4">
            <Input
              label="First Name"
              name="firstName"
              type="text"
              placeholder="John"
            />

            <Input
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
            />

            <Input
              label="Address"
              name="address"
              type="text"
              placeholder="Tbilisi"
            />

            <Input label="Price" name="price" type="number" placeholder="20" />

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

export default RegisterBarberForm;
