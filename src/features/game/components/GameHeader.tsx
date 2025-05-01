// features/game/components/GameHeader.tsx
import { Box } from '@mui/material';
import GameAlert from '@/ui/GameAlert';

export const GameHeader = ({ lastGameResult }: { 
  lastGameResult: { result: number; win: boolean; choice: 'greater' | 'lesser' } | null 
}) => (
  <Box sx={{ height: 76, mb: 2, width: '100%' }}>
    {lastGameResult ? (
      <GameAlert win={lastGameResult.win} choice={lastGameResult.choice} />
    ) : <Box sx={{ height: 76 }} />}
  </Box>
);