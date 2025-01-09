export interface ITurn {
  activePlayer: string;
  block: { i: number; j: number };
}

export interface IPlayer {
  firstName: string;
  imageUrl: string;
}

export type IGameBoard = (string | null)[][]