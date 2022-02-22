import React, { ReactNode } from 'react';

import {
  Modal as ModalUI,
  ModalProps as ModalUIProps,
  ModalBody,
  ModalTitle
} from 'react-bootstrap';

interface ModalProps extends ModalUIProps {
  title: ReactNode;
  body: ReactNode;
}

import ModalHeader from 'react-bootstrap/ModalHeader';

import './modal.scss';

const Modal = ({ title, body, ...rest }: ModalProps) => {
  return (
    <ModalUI {...rest} className="modal">
      <ModalHeader closeButton>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody>{body}</ModalBody>
    </ModalUI>
  );
};

export default Modal;
