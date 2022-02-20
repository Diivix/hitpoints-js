import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Icons from "../../assets/talent-icons-sprite.png";



function TalentNode(props) {
  return (
    <Box>
      <Typography>{props.name}</Typography>
      <div
        alt={props.name}
        style={{
          backgroundImage: `url(${Icons})`,
          backgroundPosition: `${props.icon}`,
          width: '50px',
          height: '50px',
        }}
      />
    </Box>
  );
}

TalentNode.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default TalentNode;
