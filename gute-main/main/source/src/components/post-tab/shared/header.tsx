import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import GUButton from '@components/control/gu-button';
import classNames from 'classnames';
import React from 'react';

interface PostTabHeaderLink {
  name: string;
  value: string | number;
}

export interface PostTabHeaderProps {
  title: string;
  tabLinks: PostTabHeaderLink[];
  theme?: ThemeVariation;
  value: number | string;
  onChange?: (value: number | string) => void;
}

const PostTabHeader = ({ title, tabLinks, theme, value, onChange }: PostTabHeaderProps) => {
  return (
    <div className={classNames('news-block__header', renderThemeClass(theme))}>
      <div className="header__controller__title">
        <div className="center-line-title -large -mb-0">
          <h5>{title}</h5>
        </div>
      </div>
      <div className="header__controller">
        <div className="header__controller__tab">
          {tabLinks?.map((item, index) => (
            <GUButton
              onClick={() => onChange && onChange(item.value)}
              key={index}
              className={classNames('tab-item', { active: value === item.value })}
              variant="link"
              color={theme}>
              {item.name}
            </GUButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostTabHeader;
