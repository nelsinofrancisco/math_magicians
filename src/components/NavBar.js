import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import NavMobMenu from './NavMobMenu';

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <nav className={styles.navContainer}>
      <p className={styles.logoTitle}>Math Magicians</p>
      {
        (width < breakPoint)

          ? (
            <NavMobMenu styles={styles} />
          )
          : (
            <ul className={styles.linksListContainer}>
              <li className={styles.linksItems}>
                <NavLink to="/" activeClassName="active-link" className={styles.anchorItem} exact>
                  Home
                </NavLink>
              </li>
              <li className={styles.linksItems}>
                <NavLink to="/calculator" activeClassName="active-link" className={styles.anchorItem} exact>
                  Calculator
                </NavLink>

              </li>
              <li className={styles.linksItems}>
                <NavLink to="/quote" activeClassName="active-link" className={styles.anchorItem} exact>
                  Quote
                </NavLink>
              </li>
            </ul>
          )

      }

    </nav>
  );
};

export default NavBar;
