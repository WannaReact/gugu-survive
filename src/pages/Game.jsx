import React, { useState, useCallback, useRef } from 'react';
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

const Problem = styled.p`
  font-size: 80px;
  line-height: 101px;
  text-align: center;
`;

const Answer = styled.input`
  width: 206px;
  height: 64px;
  border: 2px solid #000000;
  margin-bottom: 18px;
  font-size: 40px;
  text-align: center;
`;

const Game = () => {
  const [inp, setInp] = useState('');
  const [numFirst, setNumFirst] = useState(Math.ceil(Math.random() * 9));
  const [numSecond, setNumSecond] = useState(Math.ceil(Math.random() * 9));
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [round, setRound] = useState(1);
  const width = useRef(3000);

  const gameLogic = useCallback(() => {
    const levelUp = 9;
    if (+inp === numFirst * numSecond) {
      console.log('정답');
      // 시간 추가나 정답 처리
      setScore((prev) => prev + 1);
      setNumFirst(Math.ceil(Math.random() * levelUp));
      setNumSecond(Math.ceil(Math.random() * levelUp));
      setInp('');
      setCombo((prev) => prev + 1);
      setRound((prev) => prev + 1);
    } else {
      console.log('땡');
      // 땡처리
      setInp('');
    }
  });

  const onChangeValue = (e) => {
    setInp(e.target.value);
  };

  return (
    <Main>
      <GameTimer width={width} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 'calc(100% - 50px)'
        }}
      >
        <div>
          <p>Score:{score}</p>
          <p>Combo:{combo}</p>
        </div>
        <p>Round:{round}</p>
      </div>

      <Problem>{`${numFirst} X ${numSecond}`}</Problem>

      {window.innerWidth > 768 ? (
        <Answer type="number" value={inp} onChange={onChangeValue} />
      ) : (
        <Answer type="number" defaultValue={inp} disabled />
      )}

      <GameKeyPad setInp={setInp} gameLogic={gameLogic} />
    </Main>
  );
};

export default Game;

// 여기 inp 창에 숫자오르고 내리는거 없애줘
