import styled from 'styled-components';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const Cell = styled.th`
  flex: ${({ flex }) => flex ?? 1};
  font-family: 'NotoSans', sans-serif;
  font-size: 16px;
  text-align: center;
  word-break: keep-all;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 25px;
  }
`;

export default Cell;
