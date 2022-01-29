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
  overflow: hidden;
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
  const maxComboRef = useRef(0);
  const [maxCombo, setMaxCombo] = useState(0);
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
      setScore((prev) => prev + 100 + roundRef.current * comboRef.current);
      setCombo((prev) => prev + 1);
      comboRef.current += 1;
      if (maxComboRef.current < comboRef.current) {
        setMaxCombo(() => comboRef.current);
        maxComboRef.current = comboRef.current;
      }
      setCorrectCount((prev) => prev + 1);
      correctCountRef.current += 1;
      width.current += 300;
      if (correctCountRef.current > 0 && correctCountRef.current % 5 === 0) {
        setRound((prev) => prev + 1);
        levelUp.current += 2;
      }
    } else {
      setCombo(0);
      comboRef.current = 0;
      width.current -= 100;
    }
    setNumFirst(Math.ceil(Math.random() * levelUp.current) + 1);
    setNumSecond(Math.ceil(Math.random() * levelUp.current) + 1);
    setInp('');
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
        combo: maxComboRef.current
      })
    }).catch(() => alert('기록 등록에 실패했습니다!'));
  }, [score, round, maxCombo]);

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
    maxComboRef.current = maxCombo;
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
