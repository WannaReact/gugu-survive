import React, { useCallback } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import TableRow from './TableRow';
import Cell from './Cell';
import COLOR from '../../constants/color';

const Row = styled(TableRow)`
  min-height: 60px;
  border-bottom: 1px solid ${COLOR.LIGHT_BORDER};
`;

const TableData = styled(Cell).attrs({ as: 'td' })`
  color: ${COLOR.BLACK};
`;

const Record = ({
  index,
  record: { username, score, round, combo },
  length,
  reverse
}) => {
  const getRank = useCallback((num) => {
    const rank = reverse.current ? num + 1 : length - num;
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return rank;
    }
  }, []);
  return (
    <Row>
      <TableData>{getRank(index)}</TableData>
      <TableData
        flex={4}
        style={{ minWidth: '100px', overflowWrap: 'break-word' }}
      >
        {username}
      </TableData>
      <TableData flex={3}>{score}</TableData>
      <TableData flex={2}>{round}</TableData>
      <TableData flex={2}>{combo}</TableData>
    </Row>
  );
};

Record.propTypes = {
  index: propTypes.number,
  record: propTypes.object,
  length: propTypes.number,
  reverse: propTypes.any
};

export default React.memo(Record);
