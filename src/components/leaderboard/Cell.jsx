import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const TableCell = styled.th`
  flex: ${({ flex }) => flex ?? 1};
  font-family: 'NotoSans', sans-serif;
  font-size: 16px;
  word-break: keep-all;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 25px;
  }
`;

const Cell = ({ children, ...rest }) => {
  return <TableCell {...rest}>{children}</TableCell>;
};

Cell.propTypes = {
  children: propTypes.oneOfType([propTypes.number, propTypes.string])
};

export default React.memo(Cell);
