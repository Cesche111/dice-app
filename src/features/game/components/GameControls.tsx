import { RadioGroup, FormControlLabel, Radio, Slider, Box, Typography } from '@mui/material';
import { memo, useCallback, useRef, useEffect } from 'react';

type Choice = 'greater' | 'lesser';

interface GameControlsProps {
  targetValue: number;
  selectedChoice: Choice;
  onValueChange: (value: number) => void;
  onChoiceChange: (choice: Choice) => void;
}

const GameControls = memo(function GameControls({
  targetValue,
  selectedChoice,
  onValueChange,
  onChoiceChange
}: GameControlsProps) {
  const rafId = useRef<number | undefined>(undefined);

  const handleChoiceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChoiceChange(e.target.value as Choice);
    },
    [onChoiceChange]
  );

  const handleSliderChange = useCallback(
    (_: Event, value: number | number[]) => {
      const newValue = value as number;
      if (rafId.current !== undefined) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => {
        onValueChange(newValue);
      });
    },
    [onValueChange]
  );

  useEffect(() => {
    return () => {
      if (rafId.current !== undefined) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <Box>
      <RadioGroup
        row
        value={selectedChoice}
        onChange={handleChoiceChange}
        sx={{ 
          justifyContent: 'center', 
          mt: 3,
          mb: 4
        }}
      >
        <FormControlLabel 
          value="lesser" 
          control={<Radio />} 
          label="Under"
          labelPlacement="start" 
        />
        <FormControlLabel 
          value="greater" 
          control={<Radio />} 
          label="Over" 
          labelPlacement="start"
        />
      </RadioGroup>

      <Box>
        <Slider
          value={targetValue}
          onChange={handleSliderChange}
          max={100}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption">0</Typography>
          <Typography variant="caption">100</Typography>
        </Box>
      </Box>
    </Box>
  );
});

export default GameControls;