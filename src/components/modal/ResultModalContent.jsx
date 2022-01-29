import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import chicken from '../../assets/images/meat.png';
import Button from '../Button';
import SPEC from '../../constants/spec';
import COLOR from '../../constants/color';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const Title = styled.h2`
  font-family: 'Acme';
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 60px;
  }
`;
const Img = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  margin: 0 auto 17px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 200px;
    height: 200px;
    margin-bottom: 17px;
  }
`;

const Score = styled.span`
  display: block;
  font-family: 'NotoSans';
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 16px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 50px;
    margin-bottom: 30px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 404px;
  margin: 0 auto;
`;

const ResultModalContent = ({ score }) => {
  return (
    <>
      <Title>Game Over</Title>
      <Img src={chicken}></Img>
      <Score>{`${score}점`}</Score>
      <ButtonSection>
        <Link to="/play">
          <Button spec={SPEC.SMALL_BUTTON} color={COLOR.YELLOW}>
            다시하기
          </Button>
        </Link>
        <Link to="/leaderboard">
          <Button spec={SPEC.SMALL_BUTTON} color={COLOR.BLUE}>
            순위표
          </Button>
        </Link>
      </ButtonSection>
    </>
  );
};

ResultModalContent.propTypes = {
  score: propTypes.number
};

export default ResultModalContent;
