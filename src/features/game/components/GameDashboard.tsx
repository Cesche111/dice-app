// features/game/components/GameDashboard.tsx
import { Box } from '@mui/material';
import GameControls from '@/features/game/components/GameControls';
import TargetResultDisplay from '@/features/game/components/TargetResultDisplay';

export const GameDashboard = ({ 
  targetValue,
  selectedChoice,
  onValueChange,
  onChoiceChange
}: {
  targetValue: number;
  selectedChoice: 'greater' | 'lesser';
  onValueChange: (value: number) => void;
  onChoiceChange: (choice: 'greater' | 'lesser') => void;
}) => (
  <Box sx={{ maxWidth: (theme) => theme.sizes.controls, mx: 'auto' }}>
    <TargetResultDisplay result={null} targetValue={targetValue} />
    <GameControls
      targetValue={targetValue}
      selectedChoice={selectedChoice}
      onValueChange={onValueChange}
      onChoiceChange={onChoiceChange}
    />
  </Box>
);