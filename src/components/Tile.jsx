import React from 'react';
import styled from 'styled-components'
import colors from '../constants/colors';

const Tile = ({ className, value }) => (
  <div className={className}>
    {value !== 0 && value}
  </div>
);

const StyledTile = styled(Tile)`
  width: 90px;
  height: 90px;
  border-radius: 5px;
  background: ${props => colors[props.value] || colors.default};
  color: white;
  font-size: 30px;
  line-height: 90px;
`;

export default StyledTile;
