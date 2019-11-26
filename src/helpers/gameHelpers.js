import { BOARD_WIDTH, BOARD_SIZE } from '../constants/constants';

/**
 * Gets the value at row i, column j
 * @param {Array}  values - 1-D board representation
 * @param {number} i - row
 * @param {number} j - column
 * @returns {number} value at row i, column j
 */
const getValue = (values, i, j) => {
  return values[i * BOARD_WIDTH + j];
};

/**
 * Rotates the board so that sliding can happen to the left
 * @param {Array}  values - 1-D board representation
 * @param {string} direction - left, right, up, down
 * @returns {Array} rotated values
 */
const rotateTiles = (values, direction) => {
  const rotatedValues = [];
  switch (direction) {
    case 'left':
      return values;
    case 'right':
      for (let i = BOARD_WIDTH - 1; i >= 0; i--) {
        for (let j = BOARD_WIDTH - 1; j >= 0; j--) {
          rotatedValues.push(values[i * BOARD_WIDTH + j]);
        }
      }
      return rotatedValues;
    case 'up':
      for (let j = BOARD_WIDTH - 1; j >= 0; j--) {
        for (let i = 0; i < BOARD_WIDTH; i++) {
          rotatedValues.push(values[i * BOARD_WIDTH + j]);
        }
      }
      return rotatedValues;
    case 'down':
      for (let j = 0; j < BOARD_WIDTH; j++) {
        for (let i = BOARD_WIDTH - 1; i >= 0; i--) {
          rotatedValues.push(values[i * BOARD_WIDTH + j]);
        }
      }
      return rotatedValues;
    default:
      return values;
  }
};

/**
 * Undoes the rotation for the specified direction
 * @param {Array}  values - 1-D board representation
 * @param {string} direction - left, right, up, down
 * @returns {Array} unrotated values
 */
const undoRotateTiles = (values, direction) => {
  const oppositeDirection = {
    left: 'left',
    right: 'right',
    up: 'down',
    down: 'up',
  };
  return rotateTiles(values, oppositeDirection[direction]);
};

/**
 * Extracts the specified row from the values array
 * @param {Array}  values - 1-D board representation
 * @param {number} rowNumber
 */
const getRow = (values, rowNumber) => {
  return values.slice(rowNumber * BOARD_WIDTH, (rowNumber + 1) * BOARD_WIDTH);
};

/**
 * Slides and merges one row of tiles to the left
 * Adds up any score changes resulting from merging
 * @param {Array} row
 * @returns {Array} [new row, change in score]
 */
const slideAndMergeRow = (row) => {
  let newRow = [...row];
  let scoreChange = 0;
  let merged = Array(BOARD_WIDTH).fill(false);
  for (let i = 1; i < BOARD_WIDTH; i++) {
    let curr = i-1;
    while (curr >= 0 && !merged[curr+1]) {
      if (newRow[curr] === 0) {
        newRow[curr] = newRow[curr+1];
      } else if (newRow[curr] === newRow[curr + 1]) {
        newRow[curr] = newRow[curr] * 2;
        scoreChange += newRow[curr];
        merged[curr] = true;
      } else {
        break;
      }
      newRow[curr+1] = 0;
      merged[curr] = merged[curr+1];
      merged[curr+1] = false;
      curr--;
    }
  }
  return [newRow, scoreChange];
};

/**
 * Creates a new board that is empty except for two tiles with value 2
 * @returns {Array} the new board
 */
export const initValues = () => {
  const initialValues = Array(BOARD_SIZE).fill(0);
  initialValues[Math.floor(Math.random() * BOARD_SIZE / 2)] = 2;
  initialValues[Math.floor((Math.random() + 1) * BOARD_SIZE / 2)] = 2;
  return initialValues;
};

/**
 * Determines if tiles can move in the specified direction
 * @param {Array}  values - 1-D board representation
 * @param {string} direction - left, right, up, down
 * @returns {boolean} true if tiles can move in the specified direction, false otherwise
 */
export const canSlideTiles = (values, direction) => {
  let tempValues = rotateTiles(values, direction);
  for (let i = 0; i < BOARD_WIDTH; i++) {
    for (let j = 1; j < BOARD_WIDTH; j++) {
      const currentValue = getValue(tempValues, i, j);
      const nextValue = getValue(tempValues, i, j-1);
      if (currentValue !== 0) {
        if (nextValue === 0 || nextValue === currentValue) {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * Slides and merges tiles in the specified direction
 * Rotates the board such so that sliding goes to the left, 
 * then slides and merges and then undoes the rotation
 * @param {Array}  values - 1-D board representation
 * @param {number} score
 * @param {string} direction - left, right, up, down
 * @returns {Array} [updated values, updated score]
 */
export const slideTiles = (values, score, direction) => {
  let tempValues = rotateTiles(values, direction);
  let newValues = [];
  let newScore = score;
  for (let i = 0; i < BOARD_WIDTH; i++) {
    let newRow = [];
    let scoreChange = 0;
    [newRow, scoreChange] = slideAndMergeRow(getRow(tempValues, i));
    newValues = newValues.concat(newRow);
    newScore += scoreChange;
  }
  return [undoRotateTiles(newValues, direction), newScore];
};

/**
 * Generates a new tile in an unoccupied spot with a value of 2 or 4
 * @param {Array} values - 1-D board representation
 * @returns {Array} updated values including new tile
 */
export const generateNewTile = (values) => {
  let freeTiles = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (values[i] === 0) freeTiles.push(i);
  }
  let index = Math.floor(Math.random() * freeTiles.length);
  values[freeTiles[index]] = Math.random() < 0.5 ? 2 : 4;
  return values;
};
