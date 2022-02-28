import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import Button from 'components/button';
import Link from 'components/link';

import { ReactComponent as FullName } from 'assets/images/icons/fullname.svg';
import { ReactComponent as Email } from 'assets/images/icons/email.svg';
import { ReactComponent as Password } from 'assets/images/icons/password.svg';

import './register-form.scss';

const RegisterForm = () => (
  <Form className="register-form">
    <InputGroup className="register-form__field">
      <InputGroup.Text className="register-form__field-icon">
        <FullName />
      </InputGroup.Text>
      <Form.Control type="text" placeholder="Full Name" />
    </InputGroup>

    <InputGroup className="register-form__field">
      <InputGroup.Text className="register-form__field-icon">
        <Email />
      </InputGroup.Text>
      <Form.Control type="email" placeholder="Email" />
    </InputGroup>

    <InputGroup className="register-form__field">
      <InputGroup.Text className="register-form__field-icon">
        <Password />
      </InputGroup.Text>
      <Form.Control type="password" placeholder="Password" />
    </InputGroup>

    <div className="register-form__forgot-password">
      <Link to="#">Forgot Password?</Link>
    </div>

    <div className="register-form__submit-btn">
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  </Form>
);

export default RegisterForm;
