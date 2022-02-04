import React from 'react';
import styled from 'styled-components';
import gugu404 from '../assets/images/gugu404.png';
import MEDIA_QUERY_END_POINT from '../constants/media-query';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  display: block;
  width: 133px;
  height: 174px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 267px;
    height: 348px;
  }
`;

const H2 = styled.h2`
  font-size: 60px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 90px;
  }
`;

const P = styled.p`
  font-size: 30px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 55px;
  }
`;

const Error = () => {
  return (
    <Container>
      <Img src={gugu404} />
      <H2>404</H2>
      <P>Page Not Found</P>
    </Container>
  );
};
export default Error;
