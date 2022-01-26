import styled from 'styled-components';
import propTypes from 'prop-types';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const Button = styled.button`
  width: ${(props) => props.size.MOBILE.width};
  height: ${(props) => props.size.MOBILE.height};
  border-radius: ${(props) => props.size.MOBILE.borderRadius};
  background-color: ${(props) => props.color};
  font-family: 'Yeon-Sung';
  font-size: ${(props) => props.size.MOBILE.fontSize};
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: ${(props) => props.size.DESKTOP.width};
    height: ${(props) => props.size.DESKTOP.height};
    border-radius: ${(props) => props.size.DESKTOP.borderRadius};
    background-color: ${(props) => props.color};
    font-size: ${(props) => props.size.DESKTOP.fontSize};
  }
`;

const UtilButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

UtilButton.propTypes = {
  size: propTypes.shape({
    DESKTOP: propTypes.shape({
      width: propTypes.string.isRequired,
      height: propTypes.string.isRequired,
      fontSize: propTypes.string.isRequired,
      borderRadius: propTypes.string.isRequired
    }),
    MOBILE: propTypes.shape({
      width: propTypes.string.isRequired,
      height: propTypes.string.isRequired,
      fontSize: propTypes.string.isRequired,
      borderRadius: propTypes.string.isRequired
    })
  }),
  color: propTypes.string.isRequired,
  children: propTypes.string.isRequired,
  onClick: propTypes.func
};

export default UtilButton;
