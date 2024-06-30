import GUButton from '@components/control/gu-button';
import Loading from '@components/other/loading';
import Product from '@components/product';
import { AppState } from '@store';
import { handleGetProducts } from '@store/thunk/products';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ShopHeader from './shared/shop-header';
import ShopSidebar from './shared/shop-sidebar';

const StyledProduct = styled(Product)`
  margin-bottom: ${20 / 14}rem;
`;

const ButtonContaier = styled.div`
  text-align: center;
`;

const StyledButton = styled(GUButton)`
  text-transform: uppercase;
`;

interface PriceRange {
  minPrice: number | null;
  maxPrice: number | null;
}

const ShopLayout = () => {
  const dispatch = useDispatch();

  const [currentSort, setCurrentSort] = useState('');
  const [currentView, setCurrentView] = useState(9);
  const [selectedCategoriesId, setSelectedCategoriesId] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<PriceRange>({ minPrice: null, maxPrice: null });

  const { data, fetching, meta, loadingMore } = useSelector((state: AppState) => state.product.list);
  const [sortKey, sortValue] = useMemo(() => currentSort.split(':'), [currentSort]);

  useEffect(() => {
    dispatch(
      handleGetProducts({
        _page: 1,
        _limit: currentView,
        _sort: sortKey,
        _order: sortValue,
        'categories.id_like': selectedCategoriesId.join('|') || null,
        price_gte: priceRange.minPrice || null,
        price_lte: priceRange.maxPrice || null,
      }),
    );
  }, [currentSort, currentView, selectedCategoriesId, priceRange]);

  const onLoadingMore = () => {
    if (meta && data.length && meta.page < meta.pageCount) {
      dispatch(
        handleGetProducts({
          _limit: currentView,
          _page: meta.page + 1,
          _sort: sortKey,
          _order: sortValue,
          loadingMore: true,
          'categories.id_like': selectedCategoriesId.join('|') || null,
          price_gte: priceRange.minPrice || null,
          price_lte: priceRange.maxPrice || null,
        }),
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <ShopSidebar
            onFilterPrice={({ minPrice, maxPrice }) => setPriceRange({ minPrice, maxPrice })}
            getSelectedCategoriesId={(ids) => setSelectedCategoriesId(ids)}
          />
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <ShopHeader getCurrentSort={(val) => setCurrentSort(val)} getCurrentView={(val) => setCurrentView(val)} />
          {fetching ? (
            <Loading />
          ) : (
            <div className="shop-content">
              <div className="row">
                {data?.map((product) => (
                  <div className="col-12 col-sm-6 col-lg-4">
                    <StyledProduct data={product} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {meta && meta.page < meta.pageCount && (
            <ButtonContaier>
              <StyledButton
                disabled={loadingMore}
                preffix={loadingMore && <i className="fal fa-spinner-third" />}
                onClick={onLoadingMore}
                variant="contained"
                shape="round"
                weight="bold">
                Load more posts
              </StyledButton>
            </ButtonContaier>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
