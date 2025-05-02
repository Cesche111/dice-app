import { Box } from '@mui/material';
import { memo } from 'react';
import GameAlert from '@/ui/alerts/GameAlert';

interface GameHeaderProps {
  lastGameResult: {
    result: number;
    win: boolean;
    choice: 'greater' | 'lesser'
  } | null;
}

const GameHeader = memo(function GameHeader({ lastGameResult }: GameHeaderProps) {
  return (
    <Box sx={{ height: 76, mb: 2, width: '100%' }}>
      {lastGameResult ? (
        <GameAlert
          win={lastGameResult.win}
          choice={lastGameResult.choice}
        />
      ) : <Box sx={{ height: 76 }} />}
    </Box>
  );
});

export default GameHeader;