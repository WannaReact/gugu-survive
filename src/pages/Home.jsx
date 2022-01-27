import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title.jsx';
import SPEC from '../constants/spec';
import COLOR from '../constants/color';
import Button from '../components/Button.jsx';
import Modal from '../components/modal/Modal.jsx';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
            onClick={openModal}
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
          <Link to="/leaderboard">
            <Button
              spec={SPEC.BIG_BUTTON}
              color={COLOR.BLUE}
              style={{ marginBottom: '23px' }}
              onClick={openModal}
            >
              순위표
            </Button>
          </Link>
        </ButtonSection>
      </Container>
      {isModalVisible && (
        <Modal
          isVisible={isModalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          Hello
        </Modal>
      )}
    </>
  );
};

export default Home;
