import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import pigeon from '../../assets/images/pigeon.png';
import flame from '../../assets/images/flame.png';

const Progress = styled.div`
  border-radius: 50px;
  background-color: #f1f1f1;
  width: calc(100% - 50px);
`;
const ProgressBar = styled.div`
  border-radius: 10px;
  background-color: #ff8888;
  width: ${(props) => props.width};
  height: 30px;
  position: relative;
  transition: 0.5s linear;

  &::before {
    content: '';
    display: block;
    width: 60px;
    height: 60px;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(-40%);
    background-image: url(${flame});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &::after {
    content: '';
    display: block;
    width: 54px;
    height: 54px;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(-40%);
    background-image: url(${pigeon});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

const TimeNumber = styled.p`
  padding-left: 10px;
  padding-top: 3px;
`;

const GameTimer = () => {
  console.log('hi');
  const [value, setValue] = useState(3000);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (value > 0) {
  //       setValue((prev) => {
  //         console.log(value);
  //         return prev - 1;
  //       });
  //     } else {
  //       clearInterval(timer);
  //     }
  //   }, 10);
  //   return () => clearInterval(timer);
  // }, [value]);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev > 0) {
          return prev - 50;
        }
        clearInterval(timer);
        return 0;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const bonus = () => {
    setValue((prev) => {
      if (prev < 2700) {
        return prev + 300;
      }
      return 3000;
    });
    // value 100초과시 예외처리
  };

  return (
    <>
      <Progress>
        <ProgressBar width={`${(value / 3000) * 95 + 5}%`}>
          <TimeNumber>{`${value}`}</TimeNumber>
        </ProgressBar>
      </Progress>
      <button onClick={bonus}>시간추가</button>
    </>
  );
};

export default GameTimer;
