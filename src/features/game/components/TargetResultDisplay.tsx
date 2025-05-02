import { Typography, Box, type SxProps, type Theme } from '@mui/material';
import { memo } from 'react';

interface ResultDisplayProps {
  result: number | null;
  targetValue: number;
  sx?: SxProps<Theme>;
}

const TargetResultDisplay = memo(function TargetResultDisplay({
  result,
  targetValue,
  sx
}: ResultDisplayProps) {
  return (
    <Box
      sx={{
        width: (theme) => theme.sizes.controls,
        minHeight: 200,
        mx: 'auto',
        bgcolor: 'background.paper',
        borderRadius: 1,
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 1,
        ...sx
      }}
    >
      <Typography variant="h1">
        {result ?? targetValue}
      </Typography>
    </Box>
  );
});

export default TargetResultDisplay;