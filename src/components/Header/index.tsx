import styles from './header.module.css';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as CatalogIcon } from '../../assets/icons/catalog_icon.svg';
import UserInfo from '../UserInfo';
import SearchInput from '../SearchInput';
import { useState, useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useSticky } from '../../hooks/useSticky';
import cnBind from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = cnBind.bind(styles);

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeSearch = () => {
    setIsVisible(false);
  };

  useOutsideClick(containerRef, closeSearch, isVisible);
  const fixed = useSticky();

  return (
    <header className={cx(styles.header__wrapper, { sticky: fixed.fixed })}>
      <div className={styles.header__container} ref={containerRef}>
        <div className={styles.header__links}>
          <NavLink to="/">
            <div className={styles.links__left}>
              <LogoIcon />
              <span className={styles.left__text}>Казацкая изба</span>
            </div>
          </NavLink>
          <NavLink to="/catalog" className={styles.links__right}>
            <CatalogIcon className={styles.catalog__icon} />
            <span className={styles.right__text}>Каталог</span>
          </NavLink>
        </div>
        <UserInfo setIsVisible={setIsVisible} />
        <SearchInput isVisible={isVisible} handleClose={closeSearch} />
      </div>
    </header>
  );
};

export default Header;
