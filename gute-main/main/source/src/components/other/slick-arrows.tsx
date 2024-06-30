import { CustomArrowProps } from 'react-slick';

export const PrevArrow = ({ currentSlide, slideCount, ...arrowProps }: CustomArrowProps) => (
  <button {...arrowProps}>
    <i className="far fa-angle-left"></i>
  </button>
);

export const NextArrow = ({ currentSlide, slideCount, ...arrowProps }: CustomArrowProps) => (
  <button {...arrowProps}>
    <i className="far fa-angle-right"></i>
  </button>
);
