import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Socials from '@components/other/socials';
import Instagram from '@components/sections/instagram';
import SubcribeBar from '@components/subcribe-bar';
import React from 'react';

const About = () => {
  const handleSubmit = (val: { email: string }) => {
    console.log(val);
  };

  return (
    <Layout title="About us">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem>About</BreadcrumbItem>
        </Breadcrumb>
        <div className="about-us">
          <div className="row align-items-center">
            <div className="col-12 col-sm-8 col-md-6 mx-auto">
              <div className="about-us__image">
                <img src="/assets/images/pages/about/1.png" alt="About us image" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-us__content">
                <h3>Thank you for visit out my website.</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores sit amet vel facilisis beatae vitae dicta sunt.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus.
                </p>
                <div className="follow">
                  <p>Follow us:</p>
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
            </div>
          </div>
        </div>
        <SubcribeBar onSubmit={handleSubmit} />
      </div>
      <Instagram />
    </Layout>
  );
};

export default About;
