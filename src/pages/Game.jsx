import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import GameTimer from '../components/game/GameTimer';
import GameKeyPad from '../components/game/GameKeyPad';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 770px;
  min-width: 320px;
`;

const Game = () => {
  const gameLogic = () => {};
  const [inp, setInp] = useState('');

  const onChangeValue = (e) => {
    setInp(e.target.value);
  };
  return (
    <Main>
      <GameTimer />

      <input type="number" value={inp} onChange={onChangeValue} />
      <GameKeyPad />
    </Main>
  );
};

export default Game;
