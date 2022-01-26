import styled from 'styled-components';
import propTypes from 'prop-types';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const Button = styled.button`
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  border-radius: ${(props) => props.size.borderRadius};
  background-color: ${(props) => props.color};
  font-family: 'Acme';
  font-size: ${(props) => props.size.fontSize};
  @media only screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: none;
  }
`;

const UtilButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

UtilButton.propTypes = {
  size: propTypes.shape({
    width: propTypes.string,
    height: propTypes.string,
    fontSize: propTypes.string,
    borderRadius: propTypes.string
  }),
  color: propTypes.string,
  children: propTypes.string,
  onClick: propTypes.func
};

export default UtilButton;
