import { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeButton from '../components/leaderboard/HomeButton';
import Table from '../components/leaderboard/Table';
import SIZE from '../constants/size';
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

const Leaderboard = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch('/leaderboard?order=score&isReverse=true')
      .then((res) => res.json())
      .then((json) => {
        setRecords(json);
      });
  }, []);

  return (
    <Container>
      <Title>순위표</Title>
      <HomeButton color={COLOR.YELLOW} size={SIZE.SMALL_BUTTON}>
        홈으로
      </HomeButton>
      <Table records={records} />
    </Container>
  );
};

export default Leaderboard;
