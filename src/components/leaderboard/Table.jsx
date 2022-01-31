import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';
import Cell from './Cell';
import Record from './Record';
import COLOR from '../../constants/color';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const TableContainer = styled.table`
  width: 100vw;
  max-width: 768px;
  background-color: ${COLOR.WHITE};
`;

const TableHead = styled.thead`
  display: flex;
  justify-content: center;
  height: 45px;
  border-bottom: 2px solid ${COLOR.BOLD_BORDER};
`;

const Field = styled(Cell)`
  position: relative;
  font-family: 'NotoSansMedium', sans-serif;
  color: ${({ order }) => (order ? COLOR.BLACK : COLOR.LEADERBOARD_FIELD)};
  cursor: ${({ cursor }) => (cursor ? 'pointer' : 'default')};
  &::after {
    content: '';
    display: ${({ order }) => (order ? 'inline-block' : 'none')};
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
      ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
    width: 0;
    height: 0;
    margin-left: 5px;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    border-top: 7px solid ${({ reverse }) => (reverse ? COLOR.RED : COLOR.BLUE)};
  }
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

const Table = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch('/record?order=score&isReverse=true')
      .then((res) => res.json())
      .then((json) => {
        setRecords(json);
      });
  }, []);
  const order = useRef('score');
  const isReverse = useRef(true);

  const fetchLeaderboard = useCallback((sortOrder) => {
    return () => {
      if (order.current === sortOrder) {
        isReverse.current = !isReverse.current;
      } else {
        order.current = sortOrder;
        isReverse.current = order.current !== 'username';
      }
      fetch(
        `/record?order=${order.current}&isReverse=${isReverse.current || ''}`
      )
        .then((res) => res.json())
        .then((json) => setRecords(json));
    };
  }, []);

  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          <Field>순위</Field>
          <Field flex={4}>이름</Field>
          <Field
            order={order.current === 'score' ? 1 : 0}
            reverse={isReverse.current}
            cursor={1}
            flex={3}
            onClick={fetchLeaderboard('score')}
          >
            점수
          </Field>
          <Field
            order={order.current === 'round' ? 1 : 0}
            reverse={isReverse.current}
            cursor={1}
            flex={2}
            onClick={fetchLeaderboard('round')}
          >
            라운드
          </Field>
          <Field
            order={order.current === 'combo' ? 1 : 0}
            reverse={isReverse.current}
            cursor={1}
            flex={2}
            onClick={fetchLeaderboard('combo')}
          >
            콤보
          </Field>
        </TableRow>
      </TableHead>
      <TableBody records={records}>
        {records.map((record, index) => {
          return (
            <Record
              key={record._id}
              index={index}
              record={record}
              length={records.length}
              reverse={isReverse}
            />
          );
        })}
      </TableBody>
    </TableContainer>
  );
};

export default React.memo(Table);
