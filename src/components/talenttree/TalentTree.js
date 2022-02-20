import PropTypes from 'prop-types';
import TalentNode from '../talentnode/TalentNode';

function TalentTree(props) {

  const talentNodes = props.talents.map(t => {
    const icon = props.activeTalents.includes(t.name) ? t.activeIcon : t.inactiveIcon;
    return <TalentNode name={t.name} icon={icon}/>
  });

  return (
    <div>
      {talentNodes}
    </div>
  );
}

TalentTree.propTypes = {
  talents: PropTypes.array,
  activeTalents: PropTypes.array

}

export default TalentTree;
