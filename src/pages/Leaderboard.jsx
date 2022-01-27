import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Table from '../components/leaderboard/Table';
import SPEC from '../constants/spec';
import COLOR from '../constants/color';
import MEDIA_QUERY_END_POINT from '../constants/media-query';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    padding-top: 110px;
  }
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 60px;
  font-family: 'Yeon-Sung', serif;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 90px;
    margin-bottom: 60px;
  }
`;

const HomeButton = styled(Button)`
  margin-bottom: 30px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin-bottom: 40px;
  }
`;

const Leaderboard = () => {
  return (
    <Container>
      <Title>순위표</Title>
      <HomeButton color={COLOR.YELLOW} spec={SPEC.SMALL_BUTTON}>
        홈으로
      </HomeButton>
      <Table />
    </Container>
  );
};

export default React.memo(Leaderboard);
