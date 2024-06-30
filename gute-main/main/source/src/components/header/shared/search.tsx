import React from 'react';

const HeaderSearch = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div {...props} id="search-box">
      <div className="container">
        <form action="/" method="POST">
          <input type="text" placeholder="Searching for news" name="search" />
          <button>
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeaderSearch;
