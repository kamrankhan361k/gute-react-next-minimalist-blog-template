import { ThemeVariation } from '@common/enum';
import PostStardardFull from '@components/post/post-stardard-full';
import { PostInfo } from '@components/post/shared';
import { AppState } from '@store';
import { handleGetLastestPosts } from '@store/thunk/post';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostTabHeader from './shared/header';
import styled from 'styled-components';
import { renderThemeClass } from '@common/functions';
import classNames from 'classnames';
import Loading from '@components/other/loading';

const StyledPostStardardFull = styled(PostStardardFull)`
  margin-bottom: ${20 / 14}rem;
`;

const GridTwoColumn = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();
  const PAGE_SIZE = 8;
  const types = 'image';

  const [currentCategory, setCurrentCategory] = useState<number>(0);

  const { data, fetching } = useSelector((state: AppState) => state.posts.lastest);
  const { data: categoriesData } = useSelector((state: AppState) => state.posts.categories);

  const tabs = [
    { name: 'All', value: 0 },
    ...categoriesData.map((item) => ({
      name: item.name,
      value: item.id,
    })),
  ];

  useEffect(() => {
    dispatch(
      handleGetLastestPosts({
        _limit: PAGE_SIZE,
        type_like: types,
        'category.id_like': currentCategory || null,
      }),
    );
  }, [currentCategory]);

  return (
    <div className="news-block -grid-two-col">
      <div className="container">
        <PostTabHeader
          theme={theme}
          value={currentCategory}
          onChange={(val) => setCurrentCategory(Number(val))}
          title="DESTINATION"
          tabLinks={tabs}
        />
        {fetching ? (
          <Loading theme={theme} />
        ) : (
          <div className="row">
            {data.map((item) => (
              <div className="col-12 col-md-6">
                <StyledPostStardardFull
                  hideButton
                  infos={[PostInfo.Date, PostInfo.Comment]}
                  className="-small -horizontal -no-content-padding"
                  theme={theme}
                  data={item}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GridTwoColumn;
