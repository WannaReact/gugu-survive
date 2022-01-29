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
  round: 1,
  correctCount: 0,
  levelUp: 8,
  windowSize: window.innerWidth,
  width: 3000,
  gameOver: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GAME_LOGIC':
      if (+state.inp === state.numFirst * state.numSecond) {
        state = {
          ...state,
          combo: state.combo + 1,
          score: state.score + 100 + state.round * state.combo,
          correctCount: state.correctCount + 1,
          width: state.width + 300
        };
      } else {
        state = {
          ...state,
          combo: 0,
          width: state.width - 100
        };
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

    case 'CHANGE_TIMER': {
      const { diff } = action;
      if (state.width >= diff) {
        return {
          ...state,
          width: state.width - diff
        };
      }
      return {
        ...state,
        width: 0
      };
    }

    case 'CHECK_TIMER': {
      const { timer } = action;
      if (state.width === 0) {
        clearInterval(timer.current);
        state = {
          ...state,
          gameOver: true
        };
      } else if (state.width > 1500) {
        return {
          ...state,
          width: 1500
        };
      }
      return state;
    }
    default:
      return state;
  }
};

// 이제 문제점 1. 정답맞혔을 때 width 값 어떻게 늘려줄건지,  2. correct 카운트 어떻게 늘려주지?? 그냥 return 을 해버려서 도달할 수가 없네
// 3. reducer 에서 함수형 업데이트가 있었나?? 4. 문제 맞혔을 때 useRef focus()를 못해주고있다

const Game = () => {
  // console.log('Game');

  const handler = useRef(null);
  const answer = useRef();

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    inp,
    numFirst,
    numSecond,
    score,
    combo,
    round,
    windowSize,
    width,
    gameOver
  } = state;

  // const levelUp = useRef(8);
  // const width = useRef(3000);

  const onChangeValue = useCallback((e) => {
    dispatch({ type: 'CHANGE_VALUE', payload: e.target.value });
  }, []);

  const handleKeyDown = useCallback((e) => {
    const { key } = e;
    if (key === 'Enter') {
      dispatch({ type: 'GAME_LOGIC' });
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
      <GameTimer
        width={width}
        score={score}
        dispatch={dispatch}
        gameOver={gameOver}
      />
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

      <GameKeyPad dispatch={dispatch} answer={answer} />
    </Main>
  );
};

export default Game;

// 여기 inp 창에 숫자오르고 내리는거 없애줘
