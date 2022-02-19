import { Box, Container, Paper, Typography } from '@mui/material';

function Header() {
  return (
    <Container>
      <Box sx={{ margin: '20px 20px 20px 20px' }}>
        <Paper elevation={3}>
          <Typography variant="h5" component="h1">
            Titanstar Legends - Rune Mastery Loadout Talent Calculator 9000
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default Header;
