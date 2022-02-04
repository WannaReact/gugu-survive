import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ProblemContainer = styled.p`
  font-size: 80px;
  line-height: 101px;
  text-align: center;
`;

const Problem = ({ numFirst, numSecond }) => {
  return <ProblemContainer>{`${numFirst} X ${numSecond}`}</ProblemContainer>;
};

Problem.propTypes = {
  numFirst: propTypes.number,
  numSecond: propTypes.number
};

export default React.memo(Problem);
