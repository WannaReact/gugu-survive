import React, { useState, ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import SPEC from '../constants/spec';
import COLOR from '../constants/color';
import Button from '../components/Button';
import Modal from '../components/modal/Modal';
import RegisterModalContent from '../components/modal/RegisterModalContent';
import ExplainModalContent from '../components/modal/ExplainModalContent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whichModal, setWhichModal] = useState<ReactElement|null>(null);
  const ModalSelector = (elem) => {
    switch (elem) {
      case 'start':
        setWhichModal(<RegisterModalContent />);
        setIsOpen(!isOpen);
        break;
      case 'explain':
        setWhichModal(<ExplainModalContent />);
        setIsOpen(!isOpen);
        break;
      default:
        return;
    }
  };

  const openModalHandler = () => {
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
            onClick={() => ModalSelector('start')}
          >
            게임 시작
          </Button>
          <Button
            spec={SPEC.BIG_BUTTON}
            color={COLOR.YELLOW}
            style={{ marginBottom: '23px' }}
            onClick={() => ModalSelector('explain')}
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
