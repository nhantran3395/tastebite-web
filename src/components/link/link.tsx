import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface LinkProps extends RouterLinkProps {
  isExternalResource?: boolean;
}

const Link = ({ isExternalResource, to, ...rest }: LinkProps) => {
  if (isExternalResource) {
    return <a href={to.toString()} target="_blank" {...rest} />;
  }

  return <RouterLink to={to} {...rest} />;
};

export default Link;
