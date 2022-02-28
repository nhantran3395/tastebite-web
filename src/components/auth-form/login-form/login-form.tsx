import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import Button from 'components/button';
import Link from 'components/link';

import { ReactComponent as Email } from 'assets/images/icons/email.svg';
import { ReactComponent as Password } from 'assets/images/icons/password.svg';

import './login-form.scss';

const LoginForm = () => (
  <Form className="login-form">
    <InputGroup className="login-form__field">
      <InputGroup.Text className="login-form__field-icon">
        <Email />
      </InputGroup.Text>
      <Form.Control type="email" placeholder="Email" />
    </InputGroup>

    <InputGroup className="login-form__field">
      <InputGroup.Text className="login-form__field-icon">
        <Password />
      </InputGroup.Text>
      <Form.Control type="password" placeholder="Password" />
    </InputGroup>

    <div className="login-form__forgot-password">
      <Link to="#">Forgot Password?</Link>
    </div>

    <div className="login-form__submit-btn">
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  </Form>
);

export default LoginForm;
