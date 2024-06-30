import { ThemeVariation } from '@common/enum';
import Footer from '@components/footer';
import Header from '@components/header';
import { SECTION_SPACING } from 'common/variables';
import Head from 'next/head';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
  showHeaderSpacing?: boolean;
  title?: string;
  theme?: ThemeVariation;
}

const HeaderSpacing = styled.div`
  height: ${SECTION_SPACING / 14}rem;
`;

const Layout = ({ children, showHeaderSpacing = true, title, theme }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header theme={theme} />
      {showHeaderSpacing && <HeaderSpacing />}
      {children}
      <Footer theme={theme} />
    </>
  );
};

export default Layout;
