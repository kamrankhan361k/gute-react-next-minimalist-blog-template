import React, { ReactNode } from 'react';

interface EmptyProps {
  title: string;
  description?: string;
  ExtraContent?: ReactNode;
}

const Empty = ({ title, description, ExtraContent }: EmptyProps) => {
  return (
    <div className="empty-skeleton">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {ExtraContent && <div className="empty-skeleton-extra">{ExtraContent}</div>}
    </div>
  );
};

export default Empty;
