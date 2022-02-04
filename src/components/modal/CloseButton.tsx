import propTypes from 'prop-types';

const CloseButton = (props) => {
  return <button onClick={props.onClick}>닫기</button>;
};

CloseButton.propTypes = {
  onClick: propTypes.func
};

export default CloseButton;
