import styled from 'styled-components';
import propTypes from 'prop-types';
import TableRow from './TableRow';
import Cell from './Cell';
import COLOR from '../../constants/color';

const Row = styled(TableRow)`
  min-height: 60px;
  border-bottom: 1px solid ${COLOR.LIGHT_BORDER};
`;

const TableData = styled(Cell)`
  color: ${COLOR.BLACK};
`;

const getRank = (num) => {
  switch (num) {
    case 1:
      return '🥇';
    case 2:
      return '🥈';
    case 3:
      return '🥉';
    default:
      return num;
  }
};

const Record = ({ index, record: { username, score, round, combo } }) => {
  return (
    <Row>
      <TableData>{getRank(index + 1)}</TableData>
      <TableData flex={4}>{username}</TableData>
      <TableData flex={3}>{score}</TableData>
      <TableData flex={2}>{round}</TableData>
      <TableData flex={2}>{combo}</TableData>
    </Row>
  );
};

Record.propTypes = {
  index: propTypes.number,
  record: propTypes.object
};

export default Record;
