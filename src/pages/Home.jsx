import styled from 'styled-components';
import Title from '../components/Title.jsx';
import UtilButton from '../components/buttons/UtilButton.jsx';
import SIZE from '../constants/size';
import COLOR from '../constants/color';
import MEDIA_QUERY_END_POINT from '../constants/media-query';

const Container = styled.div`
  width: ${SIZE.CONTAINER.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 106px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    padding-top: 184px;
  }
`;

const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const home = () => {
  return (
    <Container>
      <Title />
      <ButtonSection>
        <UtilButton size={SIZE.BIG_BUTTON} color={COLOR.RED} text="게임시작" />
        <UtilButton
          size={SIZE.BIG_BUTTON}
          color={COLOR.YELLOW}
          text="게임설명"
        />
        <UtilButton size={SIZE.BIG_BUTTON} color={COLOR.BLUE} text="순위표" />
      </ButtonSection>
    </Container>
  );
};

export default home;
