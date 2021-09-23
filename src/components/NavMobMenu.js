/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { ImMenu } from 'react-icons/im';
import ExpandedMobMenu from './ExpandedMobMenu';

const NavMobMenu = (props) => {
  const { styles } = props;
  const [active, setActive] = useState(false);

  if (active) {
    return (<ExpandedMobMenu closeButton={setActive} styles={styles} />);
  }

  return (
    <button type="button" className={styles.menuButton} onClick={() => setActive(true)}>
      <ImMenu />
    </button>
  );
};

NavMobMenu.propTypes = {
  styles: PropTypes.any.isRequired,
};

export default NavMobMenu;
