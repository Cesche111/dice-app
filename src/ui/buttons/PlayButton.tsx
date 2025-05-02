import { Button, SxProps, Theme } from '@mui/material';
import { memo } from 'react';

interface PlayButtonProps {
  onClick: () => void;
  sx?: SxProps<Theme>;
}

const PlayButton = memo(function PlayButton({ onClick, sx }: PlayButtonProps) {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onClick}
      sx={{
        mb: 3,
        ...sx
      }}
    >
      PLAY
    </Button>
  );
});

export default PlayButton;