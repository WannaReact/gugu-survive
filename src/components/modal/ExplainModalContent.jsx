import propTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import SPEC from '../../constants/spec';
import COLOR from '../../constants/color';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const Title = styled.h2`
  font-family: 'Yeon-Sung';
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 22px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 45px;
  }
`;

const P = styled.p`
  font-size: 19px;
  line-height: 1.3;
  margin-bottom: 22px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 25px;
  }
`;

const MobileBr = styled.br`
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: none;
  }
`;

const DesktopBr = styled.br`
  display: none;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: inline;
  }
`;

const ExplainModalContent = ({ openModalHandler }) => {
  return (
    <>
      <Title>게임 설명</Title>
      <P>
        우리의 유해조수 비둘기 구구를 <DesktopBr /> 통구이가 될 운명에서
        <MobileBr />
        구해주세요!
      </P>
      <P>두뇌 풀가동!</P>
      <Title>게임 규칙</Title>
      <P>
        게임 시작 시 제한시간 <MobileBr />
        30초가 부여됩니다.
      </P>
      <P>
        구구단 문제를 맞출 때마다
        <DesktopBr />
        <MobileBr /> 제한 시간 3초가 추가되고,
        <DesktopBr />
        <MobileBr /> 틀릴 때마다 1초가 감소합니다.
      </P>
      <P>
        5문제를 맞힐 때마다 <MobileBr />
        다음 라운드로 넘어가며,
        <MobileBr /> 난이도가 점점 높아집니다.
      </P>
      <Button
        spec={SPEC.SMALL_BUTTON}
        color={COLOR.YELLOW}
        onClick={openModalHandler}
      >
        닫기
      </Button>
    </>
  );
};

ExplainModalContent.propTypes = {
  openModalHandler: propTypes.func
};

export default ExplainModalContent;
