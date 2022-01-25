import styled from 'styled-components';
import Title from '../components/Title.jsx';
import UtilButton from '../components/buttons/UtilButton.jsx';
import SIZE from '../constants/size';
import COLOR from '../constants/color';

const Container = styled.div`
  width: ${SIZE.CONTAINER.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <UtilButton
          size={SIZE.BIG_BUTTON}
          color={COLOR.RED}
          style={{ marginBottom: '23px' }}
        >
          게임 시작
        </UtilButton>
        <UtilButton
          size={SIZE.BIG_BUTTON}
          color={COLOR.YELLOW}
          style={{ marginBottom: '23px' }}
        >
          게임 설명
        </UtilButton>
        <UtilButton
          size={SIZE.BIG_BUTTON}
          color={COLOR.BLUE}
          style={{ marginBottom: '23px' }}
        >
          순위표
        </UtilButton>
      </ButtonSection>
    </Container>
  );
};

export default home;
