import GUButton from '@components/control/gu-button';
import { AppState } from '@store';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

export enum PostView {
  Grid,
  Row,
}

interface PostsHeaderBarProps {
  currentView: PostView;
  getCurrentView?: (p: PostView) => void;
}

const PostsHeaderBar = ({ currentView, getCurrentView }: PostsHeaderBarProps) => {
  const router = useRouter();
  const id = Number(router.query.id);
  const { data } = useSelector((state: AppState) => state.posts.categories);

  const categoryName = useMemo(() => data.find((item) => item.id === id)?.name, [data]);

  return (
    <div className="post-header-bar">
      {categoryName && (
        <div className="post-header-bar-content">
          <h5>
            Categories: <span>{categoryName}</span>
          </h5>
        </div>
      )}

      <div className="post-header-bar-toogle-view">
        <GUButton
          className={classNames({ active: currentView === PostView.Grid })}
          onClick={() => getCurrentView?.(PostView.Grid)}>
          <i className="fas fa-th"></i>
        </GUButton>
        <GUButton
          className={classNames({ active: currentView === PostView.Row })}
          onClick={() => getCurrentView?.(PostView.Row)}>
          <i className="fas fa-bars"></i>
        </GUButton>
      </div>
    </div>
  );
};

export default PostsHeaderBar;
