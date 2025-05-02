import { Button } from '@mui/material';

interface PlayButtonProps {
  onClick: () => void;
}

const PlayButton = ({ onClick }: PlayButtonProps) => (
  <Button
    variant="contained"
    color="secondary"
    fullWidth
    onClick={onClick}
    sx={{ mb: 3 }}
  >
    PLAY
  </Button>
);

export default PlayButton;