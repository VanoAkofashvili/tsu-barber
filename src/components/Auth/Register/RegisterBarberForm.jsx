import { Form, Formik } from 'formik';
import { Button, Input } from '../../Atoms';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { registerBarber } from '../../../services/auth.service';

const RegisterBarberForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        price: 0,
        password: '',
        confirmPassword: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email().required(),
        address: Yup.string().required(),
        price: Yup.number().required().integer().positive(),
      })}
      onSubmit={async (values) => {
        try {
          await registerBarber(values);
          toast.success('You have successfully registered as a barber');
        } catch (e) {
          toast.error(e.toString());
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

            <Button type="submit" loading={formik.isSubmitting}>
              Sign up
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterBarberForm;
