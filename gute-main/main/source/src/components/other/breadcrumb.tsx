import Link from 'next/link';
import React from 'react';
import { ReactNode } from 'react';

const Breadcrumb = ({ children }: { children: ReactNode }) => {
  return <ul className="breadcrumb">{children}</ul>;
};

export const BreadcrumbItem = ({
  href,
  children,
  startIcon,
}: {
  href?: string;
  children: ReactNode;
  startIcon?: ReactNode;
}) => {
  return (
    <li className="breadcrumb-item">
      {startIcon && <span className="breadcrumb-item-icon">{startIcon}</span>}
      {href ? (
        <Link href={href}>
          <a href={href}>{children}</a>
        </Link>
      ) : (
        children
      )}
    </li>
  );
};

export default Breadcrumb;
