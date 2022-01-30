import React, { useRef, useReducer, useCallback, useEffect } from 'react';
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

const initialState = {
  inp: '',
  numFirst: Math.ceil(Math.random() * 9),
  numSecond: Math.ceil(Math.random() * 9),
  score: 0,
  combo: 0,
  maxCombo: 0,
  round: 1,
  correctCount: 0,
  levelUp: 8,
  windowSize: window.innerWidth
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GAME_LOGIC':
      if (+state.inp === state.numFirst * state.numSecond) {
        state = {
          ...state,
          combo: state.combo + 1,
          maxCombo: Math.max(state.combo + 1, state.maxCombo),
          score: state.score + 100 + state.round * state.combo,
          correctCount: state.correctCount + 1
        };
        action.width.current += 300;
      } else {
        state = {
          ...state,
          combo: 0
        };
        action.width.current -= 100;
      }
      if (state.correctCount > 0 && state.correctCount % 5 === 0) {
        state = {
          ...state,
          round: state.round + 1,
          levelUp: state.levelUp + 1
        };
      }
      action.answer.current.focus();
      return {
        ...state,
        inp: '',
        numFirst: Math.ceil(Math.random() * state.levelUp),
        numSecond: Math.ceil(Math.random() * state.levelUp)
      };

    case 'CHANGE_VALUE':
      return {
        ...state,
        inp: action.payload
      };

    case 'CHANGE_KEYPAD':
      return {
        ...state,
        inp: state.inp + action.keypad
      };

    case 'CHANGE_WIDTH':
      return {
        ...state,
        windowSize: action.windowSize
      };

    default:
      return state;
  }
};

const Game = () => {
  const handler = useRef(null);
  const answer = useRef();
  const width = useRef(3000);

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    inp,
    numFirst,
    numSecond,
    score,
    combo,
    maxCombo,
    round,
    windowSize
  } = state;

  const registerRecord = useCallback(() => {
    fetch('/addRecord', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: localStorage.getItem('gamerName'),
        score,
        round,
        combo: maxCombo
      })
    }).catch(() => alert('기록 등록에 실패했습니다!'));
  }, [score, round, maxCombo]);

  const onChangeValue = useCallback((e) => {
    dispatch({ type: 'CHANGE_VALUE', payload: e.target.value });
  }, []);

  const handleKeyDown = useCallback((e) => {
    const { key } = e;
    if (key === 'Enter') {
      dispatch({ type: 'GAME_LOGIC', answer, width });
    }
  }, []);

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
    handler.current = debounce(() => {
      dispatch({ type: 'CHANGE_WIDTH', windowSize: window.innerWidth });
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
      <GameKeyPad dispatch={dispatch} answer={answer} width={width} />
    </Main>
  );
};

export default Game;
