import styled from 'styled-components';
import Title from '../components/Title.jsx';
import SPEC from '../constants/spec';
import COLOR from '../constants/color';
import Button from '../components/Button.jsx';

const Container = styled.div`
  width: ${SPEC.CONTAINER.width};
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
        <Button
          spec={SPEC.BIG_BUTTON}
          color={COLOR.RED}
          style={{ marginBottom: '23px' }}
        >
          게임 시작
        </Button>
        <Button
          spec={SPEC.BIG_BUTTON}
          color={COLOR.YELLOW}
          style={{ marginBottom: '23px' }}
        >
          게임 설명
        </Button>
        <Button
          spec={SPEC.BIG_BUTTON}
          color={COLOR.BLUE}
          style={{ marginBottom: '23px' }}
        >
          순위표
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default home;
