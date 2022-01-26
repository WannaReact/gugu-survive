import styled from 'styled-components';
import propTypes from 'prop-types';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const Button = styled.button`
  width: ${({ size }) => size.MOBILE.width};
  height: ${({ size }) => size.MOBILE.height};
  margin-bottom: 23px;
  border-radius: ${({ size }) => size.MOBILE.borderRadius};
  background-color: ${({ color }) => color};
  font-family: 'Yeon-Sung';
  font-size: ${({ size }) => size.MOBILE.fontSize};
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: ${({ size }) => size.DESKTOP.width};
    height: ${({ size }) => size.DESKTOP.height};
    margin-bottom: 42px;
    border-radius: ${({ size }) => size.DESKTOP.borderRadius};
    font-size: ${({ size }) => size.DESKTOP.fontSize};
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
  onClick: propTypes.func,
  className: propTypes.string,
  children: propTypes.string
};

export default UtilButton;
