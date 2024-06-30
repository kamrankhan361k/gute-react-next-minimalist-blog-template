export interface NavigationItem {
  title: string;
  link: string;
  active?: string[];
  subMenu?: { title: string; link: string }[];
}

const data: NavigationItem[] = [
  {
    title: 'Homepages',
    link: '/',
    active: ['/homepages/'],
    subMenu: [
      { title: 'Homepage 1', link: '/' },
      { title: 'Homepage 2', link: '/homepages/homepage2' },
      { title: 'Homepage 3', link: '/homepages/homepage3' },
      { title: 'Homepage 4', link: '/homepages/homepage4' },
      { title: 'Homepage 5', link: '/homepages/homepage5' },
      // { title: 'Homepage 6', link: '/homepages/homepage6' },
      { title: 'Homepage 6', link: '/homepages/homepage7' },
      { title: 'Homepage 7', link: '/homepages/homepage8' },
      { title: 'Homepage 8', link: '/homepages/homepage9' },
    ],
  },
  {
    title: 'Blogs',
    link: '/blog/blog-category-grid',
    active: ['/blog/', '/post/'],
    subMenu: [
      { title: 'Blog category grid', link: '/blog/blog-category-grid' },
      { title: 'Blog category list', link: '/blog/blog-category-list' },
      { title: 'Post standard', link: '/post/post-standard' },
      { title: 'Post standard cover fullwidth', link: '/post/post-cover-fullwidth' },
      { title: 'Post standard sidebar', link: '/post/post-standard-sidebar' },
      { title: 'Post slider sidebar', link: '/post/post-slider-sidebar' },
      { title: 'Post video sidebar', link: '/post/post-video-sidebar' },
      { title: 'Post audio sidebar', link: '/post/post-audio-sidebar' },
    ],
  },
  {
    title: 'Pages',
    link: '/others/author',
    active: ['/others/author', '/others/shop', '/others/product-detail', '/others/cart', '/others/checkout'],
    subMenu: [
      { title: 'Author', link: '/others/author' },
      { title: 'About', link: '/others/about' },
      { title: 'Contact', link: '/others/contact' },
      { title: 'Shop', link: '/others/shop' },
      { title: 'Product detail', link: '/others/product-detail' },
      { title: 'Cart', link: '/others/cart' },
      { title: 'Checkout', link: '/others/checkout' },
      { title: 'Error 404', link: '/404' },
    ],
  },
  { title: 'About', link: '/others/about', active: [] },
  { title: 'Contact', link: '/others/contact', active: [] },
];

export default data;
