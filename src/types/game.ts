export type GameChoice = 'greater' | 'lesser';
export type GameResult = {
  id: number;
  targetValue: number;
  choice: GameChoice;
  result: number;
  win: boolean;
}