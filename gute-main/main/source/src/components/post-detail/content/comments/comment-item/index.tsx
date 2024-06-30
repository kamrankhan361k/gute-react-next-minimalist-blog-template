import { PostCommentItem } from '@store/slices/posts';
import moment from 'moment';
import React from 'react';

const PostCommentItemDetail = ({ data }: { data: PostCommentItem }) => {
  return (
    <div className="comment-item">
      <div className="comment-item__avatar">
        <img src={data.user.avatar || ''} alt={data.user.name} />
      </div>
      <div className="comment-item__content">
        <div className="comment-item__content-header">
          <h5>{data.user.name}</h5>
          <div className="data">
            <p>
              <i className="far fa-clock" />
              {moment(data.publicDate).format('MMM,DD,YYYY')}
            </p>
            <p>
              <i className="far fa-heart" />
              {data.favourite}
            </p>
            <p>
              <i className="far fa-share-square" />
              {data.shared}
            </p>
          </div>
        </div>
        <p>{data.content}</p>
      </div>
      {data.replies?.length &&
        data.replies.map((item, index) => (
          <div key={index} className="comment-item__reply">
            <div className="comment-item">
              <div className="comment-item__avatar">
                <img src={item.user.avatar || ''} alt="Author avatar" />
              </div>
              <div className="comment-item__content">
                <div className="comment-item__content-header">
                  <h5>{item.user.name}</h5>
                  <div className="data">
                    <p>
                      <i className="far fa-clock" />
                      {moment(item.publicDate).format('MMM,DD,YYYY')}
                    </p>
                    <p>
                      <i className="far fa-heart" />
                      {item.favourite}
                    </p>
                    <p>
                      <i className="far fa-share-square" />
                      {item.shared}
                    </p>
                  </div>
                </div>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostCommentItemDetail;
