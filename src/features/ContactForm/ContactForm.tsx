import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

interface FormValues {
  name: string;
  number: string;
}

interface ContactFormProps {
  addContact: (values: FormValues) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ addContact }) => {
  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Must be filled'),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
      .min(3, 'Minimum 3 digits')
      .max(50, 'Maximum 50 digits')
      .required('Must be filled'),
  });

  const handleForm = (values: FormValues, options: FormikHelpers<FormValues>) => {
    addContact(values);
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleForm}
        validationSchema={orderSchema}
      >
        <Form className={s.contactForm}>
          <label>
            Name
            <Field className={s.formInput} name='name' />
            <ErrorMessage className={s.inputErr} name='name' component='p' />
          </label>
          <label>
            Number
            <Field className={s.formInput} name='number' />
            <ErrorMessage className={s.inputErr} name='number' component='p' />
          </label>
          <button className={s.formBtn} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;