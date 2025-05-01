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
  const rafId = useRef<number | undefined>(undefined); // [!code ++]

  const handleChoiceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onChoiceChange(e.target.value as Choice),
    [onChoiceChange]
  );

  const handleSliderChange = useCallback(
    (_: Event, value: number | number[]) => {
      const newValue = value as number;
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => {
        onValueChange(newValue);
      });
    },
    [onValueChange]
  );

  // Очистка при размонтировании  // [!code ++]
  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <RadioGroup
        row
        value={selectedChoice}
        onChange={handleChoiceChange}
        sx={{ justifyContent: 'center', mb: 3 }}
      >
        <FormControlLabel value="lesser" control={<Radio />} label="Under" />
        <FormControlLabel value="greater" control={<Radio />} label="Over" />
      </RadioGroup>

      <Box sx={{ width: '100%', mt: 2 }}>
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