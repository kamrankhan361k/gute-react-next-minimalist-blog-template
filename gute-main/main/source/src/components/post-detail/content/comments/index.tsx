import React, { useState } from 'react';
import PostCommentItemDetail from './comment-item';
import { useSelector } from 'react-redux';
import { AppState } from '@store';
import Loading from '@components/other/loading';
import GUButton from '@components/control/gu-button';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  website: Yup.string().required('Website is required'),
  message: Yup.string().required('Please leave your message'),
});

interface FormProps {
  name: string;
  email: string;
  website: string;
  message: string;
}

const PostCommentComments = () => {
  const { data, fetching } = useSelector((state: AppState) => state.posts.detail);

  const [isSubmited, setIsSubmited] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    website: '',
    message: '',
  };

  const handleFormSubmit = (val: FormProps) => {
    setIsSubmited(true);
  };

  return fetching ? (
    <Loading />
  ) : (
    <div className="post-comment">
      {data?.comments?.length && (
        <>
          <h3 className="post-comment-title">
            <span>{data?.comments?.length} comments</span>
          </h3>
          <div className="post-comment-detail">
            {data?.comments?.map((item) => (
              <PostCommentItemDetail data={item} />
            ))}
          </div>
        </>
      )}

      <h3 className="post-comment-title">
        <span>Leave a comment</span>
      </h3>
      <div className="post-comment-form">
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={FormSchema}>
          {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
            return (
              <>
                <form>
                  <div className="row">
                    <div className="col-12 col-sm-4">
                      <div className="input-group">
                        <input
                          value={values.name}
                          type="text"
                          placeholder="Name"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.name && touched.name && <span className="error">{errors.name}</span>}
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="input-group">
                        <input
                          type="email"
                          value={values.email}
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email && <span className="error">{errors.email}</span>}
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="input-group">
                        <input
                          value={values.website}
                          type="text"
                          placeholder="Webiste"
                          name="website"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.website && touched.website && <span className="error">{errors.website}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="input-group">
                    <textarea
                      value={values.message}
                      cols={30}
                      rows={5}
                      placeholder="Messages"
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message && <span className="error">{errors.message}</span>}
                  </div>
                </form>
                <div className="center">
                  <GUButton disabled={isSubmited} onClick={() => handleSubmit()} variant="contained" shape="round">
                    {isSubmited ? 'Submited' : 'Submit'}
                  </GUButton>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default PostCommentComments;
