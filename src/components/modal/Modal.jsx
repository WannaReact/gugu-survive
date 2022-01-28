import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Portal from '../Portal';
import COLOR from '../../constants/color';
import SPEC from '../../constants/spec';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${COLOR.MODAL_BACKGROUND};
`;

const ModalContent = styled.div`
  position: relative;
  background-color: ${COLOR.WHITE};
  width: ${SPEC.MODAL.MOBILE.width};
  border-radius: 10px;
  padding: 16px;
  margin: 0 auto;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: ${SPEC.MODAL.DESKTOP.width};
    padding: 50px;
  }
`;

const Modal = ({ openModalHandler, children }) => {
  return (
    <Portal elementId="modal-root">
      <ModalBackground onClick={openModalHandler}>
        <ModalContent
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {React.cloneElement(children, { openModalHandler })}
        </ModalContent>
      </ModalBackground>
    </Portal>
  );
};

Modal.propTypes = {
  openModalHandler: propTypes.func,
  children: propTypes.object
};
export default Modal;
