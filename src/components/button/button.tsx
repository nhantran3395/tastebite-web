import React from 'react';
import { Button as UIButton, ButtonProps } from 'react-bootstrap';

const Button = (props: ButtonProps) => {
  return <UIButton {...props} />;
};

export default Button;
