import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const Row = styled.tr`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    padding: 0 25px;
  }
`;

const TableRow = ({ children, ...rest }) => {
  return <Row {...rest}>{children}</Row>;
};

TableRow.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.array])
};

export default TableRow;
