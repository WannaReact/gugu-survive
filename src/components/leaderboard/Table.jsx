import styled from 'styled-components';
import propTypes from 'prop-types';
import TableRow from './TableRow';
import Cell from './Cell';
import Record from './Record';
import COLOR from '../../constants/color';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const TableContainer = styled.table`
  width: 100vw;
  background-color: ${COLOR.WHITE};
  font-family: 'NotoSans', sans-serif;
`;

const TableHead = styled.thead`
  display: flex;
  justify-content: center;
  height: 45px;
  border-bottom: 2px solid ${COLOR.BOLD_BORDER};
`;

const Field = styled(Cell)`
  color: ${COLOR.LEADERBOARD_FIELD};
`;

const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 247px);
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    max-height: calc(100vh - 393px);
  }
`;

const Table = ({ records }) => {
  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          <Field>순위</Field>
          <Field flex={4}>이름</Field>
          <Field flex={3}>점수</Field>
          <Field flex={2}>라운드</Field>
          <Field flex={2}>콤보</Field>
        </TableRow>
      </TableHead>
      <TableBody records={records}>
        {records.map((record, index) => {
          return <Record key={record._id} index={index} record={record} />;
        })}
      </TableBody>
    </TableContainer>
  );
};

Table.propTypes = {
  records: propTypes.array
};

export default Table;
