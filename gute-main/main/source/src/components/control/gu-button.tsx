import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

export interface GUButtonProps {
  variant?: 'contained' | 'outline' | 'link' | 'underline';
  className?: string;
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  shape?: 'circle' | 'round';
  size?: 'small' | 'regular' | 'large';
  style?: React.CSSProperties;
  href?: string;
  fullwidth?: boolean;
  disabled?: boolean;
  buttonType?: 'submit' | 'reset' | 'button';
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
  children?: ReactNode;
  preffix?: ReactNode;
  color?: 'primary' | 'secondary' | 'third' | 'fourth' | 'error' | 'success' | 'light';
}

const GUButton = ({
  onClick,
  fullwidth,
  weight = 'regular',
  color = 'primary',
  size = 'regular',
  preffix,
  variant,
  buttonType,
  disabled,
  shape,
  className,
  children,
  href,
  style,
  ...props
}: GUButtonProps) => {
  const renderVariantClassName = (param: any, prefix?: string) => {
    if (param) {
      return prefix ? `-${prefix}--${param}` : `-${param}`;
    }
    return '';
  };

  const renderButtonClassName = () => {
    return classNames(
      'btn',
      renderVariantClassName(shape, 'shape'),
      renderVariantClassName(weight, 'weight'),
      renderVariantClassName(size, 'size'),
      renderVariantClassName(variant, 'variant'),
      renderVariantClassName(color, 'color'),
      { '-disabled': disabled, '-fullwidth': fullwidth },
      className,
    );
  };

  if (!children) {
    return <></>;
  }

  if (href) {
    return (
      <Link href={href}>
        <a
          style={style}
          href={href}
          className={renderButtonClassName()}
          onClick={(e) => {
            disabled ? e.preventDefault() : onClick && onClick(e);
          }}>
          <span>
            {preffix && <div className="btn-preffix">{preffix}</div>}
            {children}
          </span>
        </a>
      </Link>
    );
  }

  return (
    <button
      style={style}
      type={buttonType}
      className={renderButtonClassName()}
      onClick={(e) => {
        disabled ? e.preventDefault() : onClick && onClick(e);
      }}>
      <span>
        {preffix && <div className="btn-preffix">{preffix}</div>}
        {children}
      </span>
    </button>
  );
};

export default GUButton;
