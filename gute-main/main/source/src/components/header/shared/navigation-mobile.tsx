import React, { useState } from 'react';
import data from './navigation-data';
import Link from 'next/link';
import GUButton from '@components/control/gu-button';
import SlideEffect from '@components/animation/slide-effect';

const NavigationMobile = () => {
  const [currentIndex, setCurrentIndex] = useState<number>();

  return (
    <nav className="navigation-mobile">
      <ul>
        {data.map((item, index) => (
          <li key={index} className="nav-item">
            <Link href={item.link}>
              <a href={item.link} title={item.title}>
                {item.title}
              </a>
            </Link>
            {item?.subMenu && (
              <>
                <GUButton
                  onClick={() => {
                    currentIndex === index ? setCurrentIndex(-1) : setCurrentIndex(index);
                  }}
                  className="dropdown-menu__controller">
                  <i className="fas fa-plus"></i>
                </GUButton>
                <SlideEffect in={currentIndex === index}>
                  <ul className="dropdown-menu">
                    {item.subMenu.map((subMenu) => (
                      <li>
                        <Link href={subMenu.link}>
                          <a href={subMenu.link} title={item.title}>
                            {subMenu.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SlideEffect>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMobile;
