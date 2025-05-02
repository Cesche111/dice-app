import { Box } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useGameLogic } from '@/features/game/hooks/useGameLogic';
import GameHeader from '@/features/game/components/GameHeader';
import GameDashboard from '@/features/game/components/GameDashboard';
import HistoryTable from '@/features/game/components/HistoryTable';
import PlayButton from '@/ui/buttons/PlayButton';

export default function DiceGame() {
  const {
    targetValue,
    selectedChoice,
    lastGameResult,
    history: rawHistory,
    setTargetValue,
    setSelectedChoice,
    handlePlay
  } = useGameLogic();

  const handleValueChange = useCallback((value: number) => {
    setTargetValue(value);
  }, []);

  const handleChoiceChange = useCallback((choice: 'greater' | 'lesser') => {
    setSelectedChoice(choice);
  }, []);

  const memoizedResult = useMemo(() => lastGameResult,
    [lastGameResult?.result, lastGameResult?.win]);

  const history = useMemo(() => rawHistory, [rawHistory]);

  return (
    <Box
      component="main"
      sx={{
        maxWidth: (theme) => theme.sizes.container,
        mx: 'auto',
        mb: 14,
        p: 2
      }}
    >
      <GameHeader lastGameResult={memoizedResult} />
      <GameDashboard
        targetValue={targetValue}
        selectedChoice={selectedChoice}
        onValueChange={handleValueChange}
        onChoiceChange={handleChoiceChange}
      />
      <PlayButton
        onClick={handlePlay}
        sx={{ mt: 4, mx: 'auto', display: 'block' }}
      />
      {history.length > 0 && (
        <HistoryTable
          history={history}
          sx={{ mt: 6 }}
        />
      )}
    </Box>
  );
}