import propTypes from 'prop-types';
import styled from 'styled-components';
import Portal from '../Portal';
import COLOR from '../../constants/color';
import MODAL_SPEC from '../../constants/modal-spec';
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
  width: ${MODAL_SPEC.REGISTER_MODAL.MOBILE.width};
  border-radius: 10px;
  padding: 25px;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: ${MODAL_SPEC.REGISTER_MODAL.DESKTOP.width};
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
          {children}
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
