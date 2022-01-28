import React, { useState, useCallback, useRef, useEffect } from 'react';
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
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }
`;

const Game = () => {
  const [inp, setInp] = useState('');
  const [numFirst, setNumFirst] = useState(Math.ceil(Math.random() * 8) + 1);
  const [numSecond, setNumSecond] = useState(Math.ceil(Math.random() * 8) + 1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [round, setRound] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);
  const levelUp = useRef(8);
  const width = useRef(3000);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const gameLogic = useCallback(() => {
    if (+inp === numFirst * numSecond) {
      setCombo((prev) => prev + 1);
      setScore((prev) => prev + 100 + round * combo);
      setCorrectCount((prev) => prev + 1);
      width.current += 300;
    } else {
      setCombo(0);
      width.current -= 100;
    }
    if (correctCount > 0 && correctCount % 5 === 0) {
      setRound((prev) => prev + 1);
      levelUp.current += 1;
    }
    setNumFirst(Math.ceil(Math.random() * levelUp.current) + 1);
    setNumSecond(Math.ceil(Math.random() * levelUp.current) + 1);
    setInp('');
  }, [inp, numFirst, numSecond, correctCount]);

  const onChangeValue = (e) => {
    setInp(e.target.value);
  };

  const keypadValue = useCallback(
    (item) => () => {
      setInp((prev) => prev + item);
    },
    []
  );

  const debounce = useCallback((callback, delay) => {
    let timer;
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(callback, delay);
    };
  }, []);

  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => {
        console.log('실행됨');
        setWindowSize(window.innerWidth);
      }, 100)
    );
  }, []);

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
          <p>Score: {score}</p>
          <p>Combo: {combo}</p>
        </div>
        <p>Round: {round}</p>
      </div>
      <Problem>{`${numFirst} X ${numSecond}`}</Problem>
      {windowSize > 768 ? (
        <Answer type="number" value={inp} onChange={onChangeValue} />
      ) : (
        <Answer type="number" value={inp} disabled />
      )}
      <GameKeyPad keypadValue={keypadValue} gameLogic={gameLogic} />
    </Main>
  );
};

export default Game;

// 여기 inp 창에 숫자오르고 내리는거 없애줘
