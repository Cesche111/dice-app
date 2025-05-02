import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography, SxProps, Theme } from '@mui/material';
import { memo } from 'react';

interface GameResult {
  id: number;
  targetValue: number;
  choice: 'greater' | 'lesser';
  result: number;
  win: boolean;
}

interface HistoryTableProps {
  history: GameResult[];
  sx?: SxProps<Theme>;
}

const HistoryTable = memo(function HistoryTable({ history, sx }: HistoryTableProps) {
  return (
    <TableContainer sx={{
      width: '100%',
      maxWidth: (theme) => theme.sizes.container,
      ...sx
    }}>
      <Table sx={{ width: '100%' }}>
        <TableHead>
          <TableRow sx={{ height: 32 }}>
            <TableCell>
              <Typography variant="historyTableHeader">Time</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="historyTableHeader">Guess</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="historyTableHeader">Result</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {history.map((game) => (
            <TableRow key={game.id} sx={{ height: 32 }}>
              <TableCell sx={{ py: 0.5 }}>
                <Typography variant="historyTableCell">
                  {new Date(game.id).toLocaleTimeString()}
                </Typography>
              </TableCell>

              <TableCell sx={{ py: 0.5 }}>
                <Typography variant="historyTableCell">
                  {game.choice === 'greater' ? 'Over' : 'Under'} {game.targetValue}
                </Typography>
              </TableCell>

              <TableCell sx={{ py: 0.5 }}>
                <Typography
                  variant="historyTableCell"
                  sx={{
                    color: game.win ? 'success.main' : 'error.main',
                    fontWeight: 500
                  }}
                >
                  {game.result}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default HistoryTable;