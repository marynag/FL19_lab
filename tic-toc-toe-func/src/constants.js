export const SQUARES_AMOUNT = 9
export const MAX_HISTORY_LENGTH = SQUARES_AMOUNT+1

export const WIN_LINES  = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

export const PLAYER_X='X'
export const PLAYER_O='O'
export const PLAYER_ORDER = [PLAYER_O, PLAYER_X];

export const NEXT_PLAYER = {
  [PLAYER_X]: PLAYER_O,

  [PLAYER_O]: PLAYER_X
}



