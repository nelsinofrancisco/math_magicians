/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const ExpandedMobMenu = (props) => {
  const { styles, closeButton } = props;

  return (
    <div className={styles.expandedMenuContainer}>
      <button type="button" className={styles.menuButton} onClick={() => closeButton(false)}>
        <IoMdClose />
      </button>
      <ul className={styles.expandedLinksContainer}>
        <li className={styles.linksItemsExpanded}>
          <NavLink to="/" activeClassName="active-link" exact onClick={() => closeButton(false)} className={styles.anchorItem}>
            Home
          </NavLink>
        </li>
        <li className={styles.linksItemsExpanded}>
          <NavLink to="/calculator" activeClassName="active-link" exact onClick={() => closeButton(false)} className={styles.anchorItem}>
            Calculator
          </NavLink>

        </li>
        <li className={styles.linksItemsExpanded}>
          <NavLink to="/quote" activeClassName="active-link" exact onClick={() => closeButton(false)} className={styles.anchorItem}>
            Quote
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

ExpandedMobMenu.propTypes = {
  styles: PropTypes.any.isRequired,
  closeButton: PropTypes.func.isRequired,
};

export default ExpandedMobMenu;
