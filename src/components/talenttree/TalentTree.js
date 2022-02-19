import PropTypes from 'prop-types';
import TalentNode from '../talentnode/TalentNode';

function TalentTree(props) {

  const talentNodes = props.talents.map(t => {
    return <TalentNode name={t.name} image={t.image}/>
  });

  return (
    <div>
      {talentNodes}
    </div>
  );
}

TalentTree.propTypes = {
  talents: PropTypes.array
}

export default TalentTree;
