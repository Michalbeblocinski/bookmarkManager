import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './NewsletterForm.scss';

type InfoFormInitialValues = {
  InfoInput: string;
};

export const NewsletterForm: React.FC = ({}) => {
  const initialValues: InfoFormInitialValues = { InfoInput: '' };

  const validationSchema = yup.object().shape({
    InfoInput: yup
      .string()
      .email("Whoops, make sure it's an email")
      .required("Whoops, make sure it's an email"),
  });

  const handleSend = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSend}
    >
      {({ values, errors, touched, handleBlur, handleChange }) => (
        <Form className='flex flex-col justify-between landing-page__newsletter-info-form'>
          <Field
            type='email'
            id='InfoInput'
            name='InfoInput'
            placeholder='Enter your email address'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.InfoInput}
            className={`landing-page__newsletter-info-form-input ${
              touched.InfoInput && errors.InfoInput ? 'error' : ''
            }`}
          />
          {touched.InfoInput && errors.InfoInput && (
            <div className='error landing-page__newsletter-info-form-input-error'>
              {errors.InfoInput}
            </div>
          )}

          <button
            type='submit'
            className={`landing-page__newsletter-info-form-button ${
              touched.InfoInput && errors.InfoInput ? 'error' : ''
            }`}
          >
            Contact Us
          </button>
        </Form>
      )}
    </Formik>
  );
};
