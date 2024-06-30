import { calculateTotalPrice } from '@common/functions';
import AlertModal from '@components/alert-modal';
import GUButton from '@components/control/gu-button';
import QuantityController from '@components/control/quantity-controller';
import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Empty from '@components/other/empty';
import Loading from '@components/other/loading';
import SubcribeBar from '@components/subcribe-bar';
import { AppState } from '@store';
import { handleGetCart, handleRemoveFromCart, handleUpdateCartQuantity } from '@store/thunk/cart';
import { times } from 'lodash';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState<number | string | null>(null);

  const { data, fetching } = useSelector((state: AppState) => state.cart.list);

  useEffect(() => {
    dispatch(handleGetCart());
  }, []);

  const onConfirmDelete = () => {
    selectedId && dispatch(handleRemoveFromCart(selectedId));
    setIsOpen(false);
  };

  const onChangeQuantity = (cartQuantity: number, id: string | number) => {
    dispatch(handleUpdateCartQuantity({ id, cartQuantity }));
  };

  const handleSubcribeSubmit = (val: any) => {
    console.log(val);
  };

  return (
    <>
      <Layout title="Cart">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem>Cart</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="cart">
          <div className="container">
            {fetching ? (
              <Loading />
            ) : !data.length ? (
              <Empty
                title="No Product in cart"
                description="Discover our shop and add some product to cart!"
                ExtraContent={
                  <GUButton href="/others/shop" variant="contained" shape="round">
                    Go shopping
                  </GUButton>
                }
              />
            ) : (
              <>
                <div className="cart-table">
                  <table>
                    <colgroup>
                      <col span={1} style={{ width: '50%' }} />
                      <col span={1} style={{ width: '15%' }} />
                      <col span={1} style={{ width: '15%' }} />
                      <col span={1} style={{ width: '15%' }} />
                      <col span={1} style={{ width: ' 5%' }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>QUATILITY</th>
                        <th>TOTAL</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="cart-product">
                              <img src={item.cover} alt="Furry hooded parka" />
                              <div className="cart-product__content">
                                <Link href="/product/[id]" as={`/product/${item.id}`}>
                                  <a href={`/product/${item.id}`}>{item.name}</a>
                                  {/* <h5>{item.name}</h5> */}
                                </Link>

                                <div className="star" data-number="4">
                                  {times(item.rate, () => (
                                    <i className="fas fa-star" />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>${item.discountPrice || item.price}</td>
                          <td>
                            <QuantityController
                              defaultValue={item.cartQuantity}
                              onChange={(val) => onChangeQuantity(val, item.id)}
                            />
                          </td>
                          <td>${(item.discountPrice || item.price) * item.cartQuantity}</td>
                          <td>
                            <GUButton
                              onClick={() => {
                                setSelectedId(item.id);
                                setIsOpen(true);
                              }}>
                              <i className="fas fa-times" />
                            </GUButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="cart-footer">
                  <div className="cart-footer__actions">
                    <GUButton
                      href="/others/shop"
                      variant="contained"
                      weight="bold"
                      color="light"
                      size="large"
                      shape="round">
                      CONTINUE SHOPPING
                    </GUButton>
                    <GUButton
                      href="/others/shop"
                      variant="contained"
                      weight="bold"
                      color="light"
                      size="large"
                      shape="round">
                      UPDATE CART
                    </GUButton>
                  </div>
                </div>
                <div className="cart-total">
                  <div className="row justify-content-between">
                    <div className="col-12 col-md-8 col-lg-7">
                      <div className="cart-total__discount">
                        <form action="#">
                          <h3>DISCOUNT CODES</h3>
                          <input type="text" name="discount" placeholder="Enter your coupon code" />
                          <GUButton variant="contained" weight="bold" color="primary" shape="round">
                            Apply
                          </GUButton>
                        </form>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="cart-total__content">
                        <h3>Cart total</h3>
                        <div className="total__row">
                          <h5>Subtotal</h5>
                          <h5>
                            $
                            {calculateTotalPrice(
                              data.map((item) => (item.discountPrice || item.price) * item.cartQuantity),
                            )}
                          </h5>
                        </div>
                        <div className="total__row">
                          <h5>Total</h5>
                          <h5>
                            $
                            {calculateTotalPrice(
                              data.map((item) => (item.discountPrice || item.price) * item.cartQuantity),
                            )}
                          </h5>
                        </div>
                        <GUButton
                          fullwidth
                          href="/others/checkout"
                          variant="contained"
                          weight="bold"
                          color="primary"
                          shape="round">
                          PPROCEED TO CHECKOUT
                        </GUButton>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="container">
          <SubcribeBar onSubmit={handleSubcribeSubmit} />
        </div>
      </Layout>

      <AlertModal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        onCancelClick={() => setIsOpen(false)}
        onConfirmClick={onConfirmDelete}
      />
    </>
  );
};

export default Cart;
