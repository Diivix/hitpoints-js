import { Box, Paper, Stack, Typography } from '@mui/material';

function Counter(props) {
  return (
    <Box>
      <Paper elevation={1}>
        <Stack>
          <Typography sx={{ fontSize: '1.2em' }}>{props.currentPoints}/{props.totalPoints}</Typography>
          <Typography sx={{ fontSize: '1.5em', color: '#31637a' }}>Points Spent</Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Counter;
