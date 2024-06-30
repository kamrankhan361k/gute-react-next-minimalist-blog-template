import { AppState } from '@store';
import { times } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProductDetailTab = () => {
  const { data } = useSelector((state: AppState) => state.product.detail);

  return (
    <Tabs className="shop-detail-tab">
      <TabList className="shop-detail-tab__header">
        <Tab className="shop-detail-tab__header-item">Description</Tab>
        <Tab className="shop-detail-tab__header-item">Specification</Tab>
        <Tab className="shop-detail-tab__header-item">Reviews ({data?.reviews?.length || 0})</Tab>
      </TabList>
      <div className="shop-detail-tab__content">
        <TabPanel className="shop-detail-tab__content-item">
          <p>{data?.description}</p>
        </TabPanel>
        <TabPanel className="shop-detail-tab__content-item">
          <div className="product-detail-content__bottom">
            <div className="type-block">
              <p className="type-name">Sku</p>
              <p className="type-detail">{data?.sku}</p>
            </div>
            <div className="type-block">
              <p className="type-name">Categories</p>
              <p className="type-detail">{data?.categories.name}</p>
            </div>
            <div className="type-block">
              <p className="type-name">Promotions:</p>
              <p className="type-detail">Free shipping</p>
            </div>
            <div className="type-block">
              <p className="type-name">Tags:</p>
              <p className="type-detail">{data?.tags?.map((item) => '#' + item.name).join(',')}</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="shop-detail-tab__content-item">
          <div className="row">
            {data?.reviews?.map((item) => (
              <div className="col-12 col-sm-6">
                <div className="review-block">
                  <div className="review-block__avatar">
                    <img src={item.user.avatar || ''} alt="Reviewer" />
                  </div>
                  <div className="review-block__content">
                    <h5>{item.user.name}</h5>
                    <p>{item.content}</p>
                    <div className="star" data-number="4">
                      {times(item.rate, () => (
                        <i className="fas fa-star" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default ProductDetailTab;
