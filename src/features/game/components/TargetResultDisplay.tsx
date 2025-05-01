import { Typography, Box } from '@mui/material';
import { memo } from 'react';

interface ResultDisplayProps {
  result: number | null;
  targetValue: number;
}

const TargetResultDisplay = memo(function TargetResultDisplay({ 
  result, 
  targetValue 
}: ResultDisplayProps) {
  return (
    <Box sx={{ 
      width: (theme) => theme.sizes.controls,
      minHeight: '200px',
      mx: 'auto',
      bgcolor: 'rgba(0, 0, 0, 0.04)',
      borderRadius: '4px',
      p: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography variant="h1">
        {result ?? targetValue}
      </Typography>
    </Box>
  );
});

export default TargetResultDisplay;