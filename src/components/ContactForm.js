import React from 'react';
import { useForm } from '../hooks/useForm';
import Loader from './Loader';
import Message from './Message';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: '',
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'Name Field is Required';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'Name Field just accept letters and blank spaces';
  }

  if (!form.email.trim()) {
    errors.email = 'Email Field is Required';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'Email Field is incorrect';
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject Field is Required';
  }

  if (!form.comments.trim()) {
    errors.comments = 'Comments Field is Required';
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = 'Comments Field should not pass 255 chars';
  }

  return errors;
};

let styles = {
  fontWeight: 'bold',
  color: '#dc3545',
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Write your name'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type='email'
          name='email'
          placeholder='Write your email'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}

        <input
          type='text'
          name='subject'
          placeholder='Write your subject'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name='comments'
          cols='50'
          rows='5'
          placeholder='Write your comments'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type='submit' value='Send' />
      </form>
      {loading && <Loader />}
      {response && <Message msg='Data has benn send' bgColor='#198754' />}
    </div>
  );
};

export default ContactForm;
