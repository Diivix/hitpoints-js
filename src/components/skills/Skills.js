import Counter from '../counter/Counter'
import { Box, Container, Grid, Paper } from '@mui/material';
import { useState } from 'react';
import TalentTree from '../talenttree/TalentTree';


function Skills() {
  const [talentPoints] = useState(6);

  const talents = [
    {
      name: "Chevrons",
      image: "testimage"
    },
    {
      name: "Silverware",
      image: "testimage"
    },
  ];

  return (
    <Container>
      <Box sx={{ margin: '20px 20px 20px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TalentTree talents={talents}/>
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
