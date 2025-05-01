import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography } from '@mui/material';
import { memo } from 'react';

interface HistoryTableProps {
  history: Array<{
    id: number;
    targetValue: number;
    choice: 'greater' | 'lesser';
    result: number;
    win: boolean;
  }>;
}

const HistoryTable = memo(function HistoryTable({ history }: HistoryTableProps) {
  const tableCellStyle = { // [!code ++]
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: 1.43,
    letterSpacing: '0.17px'
  };

  return (
    <TableContainer sx={{
      width: '100%',
      maxWidth: (theme) => theme.sizes.container
    }}>
      <Table sx={{ width: '100%' }}>
        <TableHead>
          <TableRow sx={{ height: 32 }}>
            <TableCell>
              <Typography sx={tableCellStyle}>Time</Typography> {/* [!code ++] */}
            </TableCell>
            <TableCell>
              <Typography sx={tableCellStyle}>Guess</Typography> {/* [!code ++] */}
            </TableCell>
            <TableCell>
              <Typography sx={tableCellStyle}>Result</Typography> {/* [!code ++] */}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((game) => (
            <TableRow key={game.id} sx={{ height: 32 }}>
              <TableCell sx={{ py: 0.5 }}>
                <Typography sx={tableCellStyle}> {/* [!code ++] */}
                  {new Date(game.id).toLocaleTimeString()}
                </Typography>
              </TableCell>
              <TableCell sx={{ py: 0.5 }}>
                <Typography sx={tableCellStyle}> {/* [!code ++] */}
                  {game.choice === 'greater' ? 'Over' : 'Under'} {game.targetValue}
                </Typography>
              </TableCell>
              <TableCell sx={{ py: 0.5 }}>
                <Typography // [!code ++]
                  sx={{ 
                    ...tableCellStyle,
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