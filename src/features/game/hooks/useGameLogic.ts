import { useState, useCallback, useMemo } from 'react';
import { GameChoice, GameResult } from '@/types/game';

export const useGameLogic = () => {
  const [targetValue, setTargetValue] = useState(100);
  const [selectedChoice, setSelectedChoice] = useState<GameChoice>('lesser');
  const [lastGameResult, setLastGameResult] = useState<{
    result: number;
    win: boolean;
    choice: GameChoice;
  } | null>(null);
  const [rawHistory, setRawHistory] = useState<GameResult[]>([]);

  const stableSetTargetValue = useCallback((value: number) => {
    setTargetValue(value);
  }, []);

  const stableSetSelectedChoice = useCallback((choice: GameChoice) => {
    setSelectedChoice(choice);
  }, []);

  const handlePlay = useCallback(() => {
    const newResult = Math.floor(Math.random() * 100) + 1;
    const win = selectedChoice === 'greater'
      ? newResult > targetValue
      : newResult < targetValue;

    setRawHistory(prev => {
      const newHistory = [{
        id: Date.now(),
        targetValue,
        choice: selectedChoice,
        result: newResult,
        win
      }, ...prev];
      return newHistory.slice(0, 10);
    });

    const currentResult = { result: newResult, win, choice: selectedChoice };
    setLastGameResult(prev =>
      prev?.result === currentResult.result && prev.win === currentResult.win
        ? prev
        : currentResult
    );

    stableSetTargetValue(100);
    stableSetSelectedChoice('lesser');
  }, [selectedChoice, targetValue, stableSetTargetValue, stableSetSelectedChoice]);

  const history = useMemo(() => rawHistory, [rawHistory]);

  return {
    targetValue,
    selectedChoice,
    lastGameResult,
    history,
    setTargetValue: stableSetTargetValue,
    setSelectedChoice: stableSetSelectedChoice,
    handlePlay
  };
};