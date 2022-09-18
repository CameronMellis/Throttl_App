import React, { useState } from 'react';
import Modal from 'react-native';

function FormModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

      <Modal isOpen={modalIsOpen}>
        <button onClick={setModalIsOpenToFalse}>x</button>
      </Modal>
    </>
  );
}

export default FormModal;
