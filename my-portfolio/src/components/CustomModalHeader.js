import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModalHeader = ({ title, handleClose }) => {
  return (
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
};

export default CustomModalHeader;