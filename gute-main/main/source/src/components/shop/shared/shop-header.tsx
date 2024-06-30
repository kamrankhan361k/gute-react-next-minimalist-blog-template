import { AppState } from '@store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

interface ShopHeaderProps {
  getCurrentSort?: (value: string) => void;
  getCurrentView?: (value: number) => void;
}

const ShopHeader = ({ getCurrentSort, getCurrentView }: ShopHeaderProps) => {
  const [currentSort, setCurrentSort] = useState('');
  const [currentView, setCurrentView] = useState(9);

  const { data, meta } = useSelector((state: AppState) => state.product.list);

  return (
    <div className="shop-header">
      <h5>
        <span>{meta?.total}</span>Product found
      </h5>
      <div className="product-filter">
        <div className="select-group">
          <span>Sort by:</span>
          <select
            value={currentSort}
            id="sort"
            name="sort"
            onChange={(e) => {
              setCurrentSort(e.target.value);
              getCurrentSort?.(e.target.value);
            }}>
            <option value="">Default</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="name:asc">Alphabet: A to Z</option>
            <option value="name:desc">Alphabet: Z to A</option>
          </select>
        </div>
        <div className="select-group">
          <span>Show:</span>
          <select
            value={currentView}
            id="show"
            name="show"
            onChange={(e) => {
              setCurrentView(Number(e.target.value));
              getCurrentView?.(Number(e.target.value));
            }}>
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="27">27</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
