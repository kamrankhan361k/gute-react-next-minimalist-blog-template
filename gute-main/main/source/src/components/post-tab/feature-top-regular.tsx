import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import Loading from '@components/other/loading';
import PostStardard from '@components/post/post-stardard';
import PostStardardFull from '@components/post/post-stardard-full';
import { AppState } from '@store';
import { handleGetGuidePosts } from '@store/thunk/post';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PostTabHeader from './shared/header';

const StyledPostStardardFull = styled(PostStardardFull)`
  margin-bottom: ${30 / 14}rem;
`;

const StyledPostStardard = styled(PostStardard)`
  margin-bottom: ${30 / 14}rem;
`;

const PostTabFeatureTopRegular = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();
  const PAGE_SIZE = 3;
  const types = 'image';

  const [currentCategory, setCurrentCategory] = useState<number>(0);

  const { data, fetching } = useSelector((state: AppState) => state.posts.guide);
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
      handleGetGuidePosts({
        _limit: PAGE_SIZE,
        type_like: types,
        'category.id_like': currentCategory || null,
      }),
    );
  }, [currentCategory]);

  return (
    <div className="news-block -feature-top-regular">
      <div className="container">
        <PostTabHeader
          theme={theme}
          value={currentCategory}
          onChange={(val) => setCurrentCategory(Number(val))}
          title="Treding posts"
          tabLinks={tabs}
        />
        {fetching ? (
          <Loading theme={theme} />
        ) : (
          <div className="row">
            <div className="col-12">
              {data.slice(0, 1).map((item, index) => (
                <StyledPostStardardFull
                  key={index}
                  theme={theme}
                  data={item}
                  hideDescription
                  hideButton
                  className="-no-content-padding news-block-post-item -big"
                />
              ))}
            </div>
            <div className="col-12">
              <div className="row">
                {data.slice(1, 4).map((item, index) => (
                  <div className="col-12 col-sm-6">
                    <StyledPostStardard
                      key={index}
                      data={item}
                      hideButton
                      theme={theme}
                      className="-no-content-padding news-block-post-item -small"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostTabFeatureTopRegular;
