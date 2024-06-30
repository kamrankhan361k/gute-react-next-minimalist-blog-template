import GUButton from '@components/control/gu-button';
import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Socials from '@components/other/socials';
import Instagram from '@components/sections/instagram';
import SubcribeBar from '@components/subcribe-bar';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string().email('Email is not valid').required('Please enter your email'),
  website: Yup.string().required('Please enter your website'),
});

interface ContactFormProps {
  name: string;
  email: string;
  website: string;
  message?: string;
}

const Contact = () => {
  const handleSubcribeSubmit = (val: { email: string }) => {
    console.log(val);
  };

  const handleSubmitInfo = (val: ContactFormProps) => {
    console.log(val);
  };

  const initialValues = {
    name: '',
    email: '',
    website: '',
    message: '',
  };

  return (
    <Layout title="Contact us">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem>Contact</BreadcrumbItem>
        </Breadcrumb>
        <div className="contact-us">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="contact-us__info">
                <h3 className="contact-title">GET IN TOUCH</h3>
                <p className="contact-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis.{' '}
                </p>
                <div className="contact-method">
                  <div className="contact-method__item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>5 South Main Street Los Angeles, ZZ-96110 USA</p>
                  </div>
                  <div className="contact-method__item">
                    <i className="fas fa-mobile-alt"></i>
                    <p>125-711-811 | 125-668-886</p>
                  </div>
                  <div className="contact-method__item">
                    <i className="fas fa-headphones-alt"></i>
                    <p>Support.hosting@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="contact-us__social">
                <h3 className="contact-title">SOCIALS</h3>
                <Socials
                  spacing={10}
                  height={50}
                  width={50}
                  variant="contained"
                  size="small"
                  shape="circle"
                  color="light"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="contact-us__form">
                <h3 className="contact-title">LEAVE A MESSAGE</h3>
                <Formik initialValues={initialValues} onSubmit={handleSubmitInfo} validationSchema={ContactFormSchema}>
                  {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="input-group">
                        <input type="text" value={values.name} placeholder="Name" name="name" onChange={handleChange} />
                        {!!errors.name && !!touched.name && <span className="error">{errors.name}</span>}
                      </div>
                      <div className="input-group">
                        <input
                          type="email"
                          value={values.email}
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                        />
                        {!!errors.email && !!touched.email && <span className="error">{errors.email}</span>}
                      </div>
                      <div className="input-group">
                        <input
                          type="text"
                          value={values.website}
                          placeholder="Website"
                          name="website"
                          onChange={handleChange}
                        />
                        {!!errors.website && !!touched.website && <span className="error">{errors.website}</span>}
                      </div>
                      <textarea
                        name="message"
                        value={values.message}
                        cols={30}
                        rows={8}
                        placeholder="Message"
                        onChange={handleChange('message')}
                      />
                      <GUButton weight="bold" size="large" variant="contained" shape="round" buttonType="submit">
                        Send message
                      </GUButton>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <SubcribeBar onSubmit={handleSubcribeSubmit} />
      </div>
      <Instagram />
    </Layout>
  );
};

export default Contact;
