import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

const Pagination = ({
  currentPage,
  ...props
}: Omit<ReactPaginateProps, 'forcePage' | 'pageRangeDisplayed' | 'marginPagesDisplayed'> & { currentPage: number }) => {
  return props.pageCount !== 1 ? (
    <ReactPaginate
      previousLinkClassName="btn -shape--circle"
      nextLinkClassName="btn -shape--circle"
      containerClassName="pagination"
      pageLinkClassName="btn -shape--circle"
      activeClassName="active"
      previousLabel={<i className="fal fa-angle-left" />}
      nextLabel={<i className="fal fa-angle-right" />}
      forcePage={currentPage - 1}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      {...props}
    />
  ) : (
    <></>
  );
};

export default Pagination;
