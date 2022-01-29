import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GameTimer from '../components/game/GameTimer';
import GameKeyPad from '../components/game/GameKeyPad';
import COLOR from '../constants/color';
import GameInfo from '../components/game/GameInfo';
import Problem from '../components/game/Problem';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 770px;
  min-width: 320px;
`;

const Answer = styled.input`
  width: 206px;
  height: 64px;
  border: 2px solid ${COLOR.BLACK};
  margin-bottom: 18px;
  font-size: 40px;
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }
  &:disabled {
    background-color: ${COLOR.WHITE};
  }
`;

const Game = () => {
  const inputRef = useRef();
  const [inp, setInp] = useState('');
  const numFirstRef = useRef();
  const [numFirst, setNumFirst] = useState(Math.ceil(Math.random() * 8) + 1);
  const numSecondRef = useRef();
  const [numSecond, setNumSecond] = useState(Math.ceil(Math.random() * 8) + 1);
  const [score, setScore] = useState(0);
  const comboRef = useRef();
  const [combo, setCombo] = useState(0);
  const roundRef = useRef();
  const [round, setRound] = useState(1);
  const correctCountRef = useRef();
  const [correctCount, setCorrectCount] = useState(0);
  const levelUp = useRef(8);
  const width = useRef(3000);
  const handler = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const answer = useRef();

  const gameLogic = useCallback(() => {
    if (+inputRef.current === numFirstRef.current * numSecondRef.current) {
      setCombo((prev) => prev + 1);
      setScore((prev) => prev + 100 + roundRef.current * comboRef.current);
      setCorrectCount((prev) => prev + 1);
      width.current += 300;
    } else {
      comboRef.current = 0;
      setCombo(comboRef.current);
      width.current -= 100;
    }
    if (correctCountRef.current > 0 && correctCountRef.current % 5 === 0) {
      roundRef.current += 1;
      setRound(roundRef.current);
      levelUp.current += 2;
    }
    setNumFirst(Math.ceil(Math.random() * levelUp.current) + 1);
    setNumSecond(Math.ceil(Math.random() * levelUp.current) + 1);
    inputRef.current = '';
    setInp(inputRef.current);
    answer.current.focus();
  }, []);

  const registerRecord = useCallback(() => {
    fetch('/addRecord', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: localStorage.getItem('gamerName'),
        score,
        round,
        combo
      })
    }).catch(() => alert('기록 등록에 실패했습니다!'));
  }, [score, round, combo]);

  const onChangeValue = useCallback((e) => {
    inputRef.current = e.target.value;
    setInp(inputRef.current);
  }, []);

  const handleKeyDown = useCallback((e) => {
    const { key } = e;
    if (key === 'Enter') {
      gameLogic();
    }
  }, []);

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
    inputRef.current = inp;
    numFirstRef.current = numFirst;
    numSecondRef.current = numSecond;
    comboRef.current = combo;
    roundRef.current = round;
    correctCountRef.current = correctCount;
  });

  useEffect(() => {
    handler.current = debounce(() => {
      setWindowSize(window.innerWidth);
      answer.current.focus();
    }, 100);
    window.addEventListener('resize', handler.current);
    answer.current.focus();
    return () => window.removeEventListener('resize', handler.current);
  }, []);

  return (
    <Main>
      <GameTimer width={width} score={score} registerRecord={registerRecord} />
      <GameInfo score={score} combo={combo} round={round} />
      <Problem numFirst={numFirst} numSecond={numSecond} />
      <Answer
        ref={answer}
        type="number"
        value={inp}
        onChange={windowSize > 768 ? onChangeValue : null}
        onKeyDown={windowSize > 768 ? handleKeyDown : null}
        disabled={windowSize <= 768}
      />
      <GameKeyPad keypadValue={keypadValue} gameLogic={gameLogic} />
    </Main>
  );
};

export default Game;

// 여기 inp 창에 숫자오르고 내리는거 없애줘
