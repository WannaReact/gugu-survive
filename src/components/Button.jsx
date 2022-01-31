import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import MEDIA_QUERY_END_POINT from '../constants/media-query';

const StyledButton = styled.button`
  width: ${({ spec }) => spec.MOBILE.width};
  height: ${({ spec }) => spec.MOBILE.height};
  border-radius: ${({ spec }) => spec.MOBILE.borderRadius};
  background-color: ${({ color }) => color};
  font-family: ${({ spec }) => spec.MOBILE.fontFamily};
  font-size: ${({ spec }) => spec.MOBILE.fontSize};
  &:hover {
    background-color: ${({ color }) => `${color}CC`};
  }
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    ${({ spec }) =>
      spec.DESKTOP
        ? {
            width: spec.DESKTOP.width,
            height: spec.DESKTOP.height,
            'font-size': spec.DESKTOP.fontSize,
            'border-radius': spec.DESKTOP.borderRadius
          }
        : { display: 'none' }}
  }
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  spec: propTypes.shape({
    MOBILE: propTypes.shape({
      width: propTypes.string.isRequired,
      height: propTypes.string.isRequired,
      fontSize: propTypes.string.isRequired,
      borderRadius: propTypes.string.isRequired
    }),
    DESKTOP: propTypes.shape({
      width: propTypes.string.isRequired,
      height: propTypes.string.isRequired,
      fontSize: propTypes.string.isRequired,
      borderRadius: propTypes.string
    })
  }),
  color: propTypes.string.isRequired,
  children: propTypes.string.isRequired,
  onClick: propTypes.func
};

export default React.memo(Button);
