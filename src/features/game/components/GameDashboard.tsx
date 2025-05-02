import { Box } from '@mui/material';
import { memo } from 'react';
import GameControls from '@/features/game/components/GameControls';
import TargetResultDisplay from '@/features/game/components/TargetResultDisplay';

type GameDashboardProps = {
  targetValue: number;
  selectedChoice: 'greater' | 'lesser';
  onValueChange: (value: number) => void;
  onChoiceChange: (choice: 'greater' | 'lesser') => void;
};

const GameDashboard = memo(function GameDashboard({
  targetValue,
  selectedChoice,
  onValueChange,
  onChoiceChange
}: GameDashboardProps) {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: (theme) => theme.sizes.controls,
        mx: 'auto',
        p: 2
      }}
    >
      <TargetResultDisplay
        result={null}
        targetValue={targetValue}
        sx={{ mb: 3 }}
      />
      <GameControls
        targetValue={targetValue}
        selectedChoice={selectedChoice}
        onValueChange={onValueChange}
        onChoiceChange={onChoiceChange}
      />
    </Box>
  );
});

export default GameDashboard;