import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseButton from './CloseButton';
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
  /* width: 100%;
  height: 100%; */
  background-color: ${COLOR.MODAL_BACKGROUND};
`;

const ModalContent = styled.div`
  position: relative;
  /* top: 50%;
  transform: translateY(-50%); */
  background-color: ${COLOR.WHITE};
  width: ${MODAL_SPEC.REGISTER_MODAL.MOBILE.width};
  border-radius: 10px;
  padding: 25px;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: ${MODAL_SPEC.REGISTER_MODAL.DESKTOP.width};
    padding: 50px;
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

  // const Modal = ({
  //   className,
  //   onClose,
  //   maskClosable,
  //   closable,
  //   isVisible,
  //   children
  // }) => {
  //   const onMaskClick = (e) => {
  //     if (e.target === e.currentTarget) {
  //       onClose(e);
  //     }
  //   };

  //   const close = (e) => {
  //     if (onClose) {
  //       onClose(e);
  //     }
  //   };

  //   return (
  //     <Portal elementId="modal-root">
  //       <ModalBackground>
  //         {/* <ModalBackground
  //         className={className}
  //         onClick={maskClosable ? onMaskClick : null}
  //         tabIndex={-1}
  //         isVisible={isVisible}
  //       > */}
  //         <ModalContent tabIndex={0} className="modal-inner">
  //           {closable && <CloseButton className="modal-close" onClick={close} />}
  //           {children}
  //         </ModalContent>
  //       </ModalBackground>
  //     </Portal>
  //   );
  // };

  // Modal.defaultProps = {
  //   isVisible: false,
  //   closable: true,
  //   maskClosable: true
  // };

  // Modal.propTypes = {
  //   className: PropTypes.string,
  //   onClose: PropTypes.func,
  //   maskClosable: PropTypes.string,
  //   closable: PropTypes.string,
  //   isVisible: PropTypes.bool,
  //   children: PropTypes.string
  // };
};

export default Modal;
