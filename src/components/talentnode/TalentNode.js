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
          backgroundPosition: '0px 50px',
          width: '50px',
          height: '50px',
        }}
      />
    </Box>
  );
}

TalentNode.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default TalentNode;
