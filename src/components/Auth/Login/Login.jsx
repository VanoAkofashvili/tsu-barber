import { Form, Formik } from 'formik';
import { Button, Input } from '../../Atoms';
import * as Yup from 'yup';

const Login = () => {
  return (
    <section className="w-full h-full bg-blurredWp bg-cover bg-center flex justify-center items-center">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="bg-white p-4">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <Input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <Button type="submit" loading>
            Submit
          </Button>
        </Form>
      </Formik>
    </section>
  );
};

export default Login;
