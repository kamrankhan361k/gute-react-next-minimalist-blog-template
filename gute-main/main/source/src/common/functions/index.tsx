export const renderThemeClass = (theme?: 'primary' | 'secondary' | 'third' | 'fourth') => {
  return (theme && theme === 'secondary') || theme === 'third' || theme === 'fourth' ? `-theme--${theme}` : '';
};

export const calculateTotalPrice = (arr: number[] = []) => {
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
  return arr?.reduce(reducer, 0);
};
