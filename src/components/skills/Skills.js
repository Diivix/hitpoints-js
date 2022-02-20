import Counter from '../counter/Counter';
import { Box, Container, Grid, Paper } from '@mui/material';
import { useState } from 'react';
import TalentTree from '../talenttree/TalentTree';
import { talents } from '../../consts';

function Skills() {
  const [talentPoints] = useState(6);
  const [activeTalents] = useState(['chevrons']);

  const talentTreeOne = talents.slice(0, 3);

  return (
    <Container>
      <Box sx={{ margin: '20px 20px 20px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TalentTree talents={talentTreeOne} activeTalents={activeTalents} />
          </Grid>
          <Grid item xs={4}>
            <Counter currentPoints={3} totalPoints={talentPoints} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Skills;
