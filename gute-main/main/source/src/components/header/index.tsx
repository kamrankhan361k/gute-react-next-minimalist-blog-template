import React, { useEffect, useRef, useState } from 'react';
import Navigation from './shared/navigation';
import Link from 'next/link';
import GUButton from '@components/control/gu-button';
import Socials from '@components/other/socials';
import classNames from 'classnames';
import { renderThemeClass } from '@common/functions';
import HeaderSearch from './shared/search';
import SlideEffect from '@components/animation/slide-effect';

const Header = ({ theme }: { theme?: 'primary' | 'secondary' | 'third' | 'fourth' }) => {
  const [isOpenNavMobile, setIsOpenNavMobile] = useState<boolean>(false);
  const [shouldShowSearch, setShouldShowSearch] = useState(false);

  return (
    <>
      <div className="header-spacing" />
      <header className={classNames(renderThemeClass(theme))}>
        <div className="container">
          <SlideEffect in={shouldShowSearch}>
            <HeaderSearch />
          </SlideEffect>
          <div className="header-wrapper">
            <Link href="/">
              <a className="header-logo" href="/">
                <img src="/assets/images/logo.png" alt="Logo" />
              </a>
            </Link>
            <Navigation isOpenNavMobile={isOpenNavMobile} setIsOpenNavMobile={setIsOpenNavMobile} />
            <div className="header-icons">
              <GUButton
                onClick={() => setShouldShowSearch(!shouldShowSearch)}
                color={theme}
                className="header-icons__search header-icons__item"
                variant="link">
                <i className="fas fa-search" />
              </GUButton>
              <div className="social">
                <Socials color={theme} className="header-icons__item" spacing={20} variant="link" />
                <GUButton
                  color={theme}
                  onClick={() => setIsOpenNavMobile(!isOpenNavMobile)}
                  className="header-icons__item header-icons__menu-controller"
                  variant="link">
                  <i className="fas fa-bars" />
                </GUButton>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
