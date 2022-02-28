import React from 'react';
import { Button as UIButton, ButtonProps } from 'react-bootstrap';

import './button.scss';

const Button = (props: ButtonProps) => {
  return <UIButton {...props} className="btn" />;
};

export default Button;
