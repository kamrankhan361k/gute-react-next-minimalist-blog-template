import { getAuthorDetail } from '@services/author';
import { getPosts } from '@services/post';
import { authorActions } from '@store/slices/author';
import { GetPostListParams } from '@store/slices/posts';
import { Dispatch } from 'redux';

interface GetAuthorPostParams extends GetPostListParams {
  id: number;
  'user.id'?: number;
}

export const handleGetAuthorDetail = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(authorActions.getAuthorDetailRequest());
    const { data } = await getAuthorDetail(id);
    dispatch(authorActions.getAuthorDetailSuccess(data));
  } catch (error) {
    dispatch(authorActions.getAuthorDetailFailed(error.message));
  }
};

export const handleGetAuthorPosts = (params: GetAuthorPostParams) => async (dispatch: Dispatch) => {
  try {
    dispatch(authorActions.getAuthorPostsRequest());
    const data = await getPosts({ 'user.id': params.id } as GetAuthorPostParams);
    dispatch(authorActions.getAuthorPostsSuccess(data));
  } catch (error) {
    dispatch(authorActions.getAuthorPostsFailed(error.message));
  }
};
