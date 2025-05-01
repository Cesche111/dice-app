import { Alert, Box, Typography } from '@mui/material';
import { memo, useState, useEffect, useRef } from 'react';

interface GameAlertProps {
    win: boolean;
    choice: 'greater' | 'lesser';
}

const GameAlert = memo(function GameAlert({ win, choice }: GameAlertProps) {
    const [opacity, setOpacity] = useState(0);
    const rafId = useRef<number | undefined>(undefined); // Исправлено здесь
    const alertRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        rafId.current = requestAnimationFrame(() => {
            setOpacity(1);
        });

        return () => {
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    return (
        <Alert
            ref={alertRef}
            severity={win ? "success" : "error"}
            variant="filled"
            sx={{ 
                width: '100%',
                opacity: opacity,
                transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '& .MuiAlert-message': {
                    width: '100%',
                    py: 1
                }
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body2" component="span">
                    {win ? 'You won' : 'You lost'}
                </Typography>
                {!win && (
                    <Typography variant="caption" component="span">
                        Number was {choice === 'greater' ? 'lower' : 'higher'}
                    </Typography>
                )}
            </Box>
        </Alert>
    );
});

export default GameAlert;