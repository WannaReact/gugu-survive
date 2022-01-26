import styled from 'styled-components';
import propTypes from 'prop-types';
import UtilButton from '../buttons/UtilButton';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const Button = styled(UtilButton)`
  margin-bottom: 30px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin-bottom: 40px;
  }
`;

const HomeButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

HomeButton.propTypes = {
  children: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  size: propTypes.object.isRequired
};

export default HomeButton;
