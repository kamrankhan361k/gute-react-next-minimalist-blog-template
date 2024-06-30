import React, { useEffect, useState } from 'react';
import data from './navigation-data';
import Link from 'next/link';
import NavigationMobile from './navigation-mobile';
import SlideEffect from '@components/animation/slide-effect';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { route } from 'next/dist/next-server/server/router';
interface NavigationProps {
  isOpenNavMobile: boolean;
  setIsOpenNavMobile: (p: boolean) => void;
}

const Navigation = ({ isOpenNavMobile, setIsOpenNavMobile }: NavigationProps) => {
  const router = useRouter();

  useEffect(() => {
    const onWindowResize = () => {
      if (!window.matchMedia('(max-width: 768px)').matches) {
        setIsOpenNavMobile(false);
      }
    };

    window?.addEventListener('resize', onWindowResize);

    return () => window?.removeEventListener('resize', onWindowResize);
  }, []);

  return (
    <>
      <nav>
        <ul>
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className={classNames('nav-item', {
                  active: item.active?.find((o) => router?.pathname.startsWith(o)) || item.link === router?.pathname,
                })}>
                <Link href={item.link}>
                  <a href={item.link} title={item.title}>
                    {item.title}
                  </a>
                </Link>
                {item?.subMenu && (
                  <ul className="dropdown-menu">
                    {item.subMenu.map((subMenu, subMenuIndex) => (
                      <li key={subMenuIndex}>
                        <Link href={subMenu.link}>
                          <a href={subMenu.link} title={item.title}>
                            {subMenu.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <SlideEffect in={isOpenNavMobile}>
        <NavigationMobile />
      </SlideEffect>
    </>
  );
};

export default Navigation;
