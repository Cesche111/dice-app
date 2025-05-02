import { Box, Button } from '@mui/material';
import { useGameLogic } from '@/features/game/hooks/useGameLogic';
import { GameHeader } from '@/features/game/components/GameHeader';
import { GameDashboard } from '@/features/game/components/GameDashboard';
import HistoryTable from '@/features/game/components/HistoryTable';
import PlayButton from '@/ui/buttons/PlayButton';

export default function DiceGame() {
  const {
    targetValue,
    selectedChoice,
    lastGameResult,
    history,
    setTargetValue,
    setSelectedChoice,
    handlePlay
  } = useGameLogic();

  return (
    <Box sx={{
      maxWidth: (theme) => theme.sizes.container,
      width: '100%',
      mx: 'auto',
      mb: 14,
      p: 2
    }}>
      <GameHeader lastGameResult={lastGameResult} />

      <GameDashboard
        targetValue={targetValue}
        selectedChoice={selectedChoice}
        onValueChange={setTargetValue}
        onChoiceChange={setSelectedChoice}
      />

      <PlayButton onClick={handlePlay} />

      <HistoryTable history={history} />
    </Box>
  );
}