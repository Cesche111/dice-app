// features/game/hooks/useGameLogic.ts
import { useState, useCallback } from 'react';
import { GameChoice, GameResult } from '@/types/game';

export const useGameLogic = () => {
  const [targetValue, setTargetValue] = useState(100);
  const [selectedChoice, setSelectedChoice] = useState<GameChoice>('lesser');
  const [lastGameResult, setLastGameResult] = useState<{
    result: number;
    win: boolean;
    choice: GameChoice;
  } | null>(null);
  const [history, setHistory] = useState<GameResult[]>([]);

  const handlePlay = useCallback(() => {
    const newResult = Math.floor(Math.random() * 100) + 1;
    const win = selectedChoice === 'greater' 
      ? newResult > targetValue 
      : newResult < targetValue;

    setHistory(prev => [
      {
        id: Date.now(),
        targetValue,
        choice: selectedChoice,
        result: newResult,
        win
      },
      ...prev.slice(0, 9)
    ]);

    setLastGameResult({ result: newResult, win, choice: selectedChoice });
    setTargetValue(100);
    setSelectedChoice('lesser');
  }, [selectedChoice, targetValue]);

  return {
    targetValue,
    selectedChoice,
    lastGameResult,
    history,
    setTargetValue,
    setSelectedChoice,
    handlePlay
  };
};