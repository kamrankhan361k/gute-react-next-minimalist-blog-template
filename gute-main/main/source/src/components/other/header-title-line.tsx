import React from 'react';
import classNames from 'classnames';

const HeaderTitleLine = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={classNames('center-line-title', className)}>
      <h5>{title}</h5>
    </div>
  );
};

export default HeaderTitleLine;
