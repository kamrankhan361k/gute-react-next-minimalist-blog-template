import React from 'react';
import classNames from 'classnames';
import { renderThemeClass } from '@common/functions';
import { ThemeVariation } from '@common/enum';

const Loading = ({ theme }: { theme?: ThemeVariation }) => {
  return (
    <div className={classNames('loading-container', renderThemeClass(theme))}>
      <i className="fa-spin fa-2x fa-2-xl fad fa-spinner-third" />
    </div>
  );
};

export default Loading;
