import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title.jsx';
import SPEC from '../constants/spec';
import COLOR from '../constants/color';
import Button from '../components/Button.jsx';
import Modal from '../components/modal/Modal.jsx';
import RegisterModalContent from '../components/modal/RegisterModalContent.jsx';
import ExplainModalContent from '../components/modal/ExplainModalContent.jsx';

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

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(null);
  const openModalHandler = (elem) => {
    switch (elem) {
      case 'start':
        setWhichModal(<RegisterModalContent />);
        break;
      case 'explain':
        setWhichModal(<ExplainModalContent />);
        break;
      default:
        return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <Title />
        <ButtonSection>
          <Button
            spec={SPEC.BIG_BUTTON}
            color={COLOR.RED}
            style={{ marginBottom: '23px' }}
            onClick={() => openModalHandler('start')}
          >
            게임 시작
          </Button>

          <Button
            spec={SPEC.BIG_BUTTON}
            color={COLOR.YELLOW}
            style={{ marginBottom: '23px' }}
            onClick={() => openModalHandler('explain')}
          >
            게임 설명
          </Button>
          <Link to="/leaderboard">
            <Button
              spec={SPEC.BIG_BUTTON}
              color={COLOR.BLUE}
              style={{ marginBottom: '23px' }}
            >
              순위표
            </Button>
          </Link>
        </ButtonSection>
      </Container>
      {isOpen && (
        <Modal openModalHandler={openModalHandler}>{whichModal}</Modal>
      )}
    </>
  );
};

export default Home;
