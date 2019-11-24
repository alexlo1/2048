import React from 'react';
import styled from 'styled-components'
import Tile from './Tile.jsx';

const Row = ({ className, values }) => (
  <div className={className}>
    <Tile value={values[0]} />
    <Tile value={values[1]} />
    <Tile value={values[2]} />
    <Tile value={values[3]} />
  </div>
);

const StyledRow = styled(Row)`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

const Board = ({ className, values }) => (
  <div className={className}>
    <StyledRow values={values.slice(0, 4)} />
    <StyledRow values={values.slice(4, 8)} />
    <StyledRow values={values.slice(8, 12)} />
    <StyledRow values={values.slice(12, 16)} />
  </div>
);

const StyledBoard = styled(Board)`
  width: 400px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export default StyledBoard;
