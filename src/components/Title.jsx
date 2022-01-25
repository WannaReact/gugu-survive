import styled from 'styled-components';
import pigeon from '../assets/images/pigeon.png';
import MEDIA_QUERY_END_POINT from '../constants/media-query';

const TitleContainer = styled.h1`
  width: 288px;
  margin-bottom: 104px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 450px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const GuGu = styled.span`
  font-size: 80px;
  font-weight: bold;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 120px;
  }
`;

const Survive = styled(GuGu)`
  display: flex;
  justify-content: flex-end;
  text-align: end;
`;

const Img = styled.img`
  width: 54px;
  height: 54px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 82px;
    height: 82px;
  }
`;

const Title = () => {
  return (
    <TitleContainer>
      <div>
        <GuGu>GuGu</GuGu>
        <Img src={pigeon}></Img>
      </div>
      <Survive>Survive</Survive>
    </TitleContainer>
  );
};

export default Title;
