export interface ThemeProps {
  colors: {
    primary: string;
    secondary: string;
    third: string;
    fourth: string;
    error: string;
    success: string;
    light: string;
  };
  schema: {
    gray: {
      base: string;
      light: string;
      regular: string;
      medium: string;
      dark: string;
    };
  };
}

const theme: ThemeProps = {
  colors: {
    primary: '#e49c86',
    secondary: '#11d2ef',
    third: '#537bdf',
    fourth: '#ffd661',
    error: '#ed4337',
    success: '#5cb85c',
    light: '#f5f5f5',
  },
  schema: {
    gray: {
      base: '#f5f5f5',
      light: '#e1e1e1',
      regular: '#888',
      medium: '#444',
      dark: '#111',
    },
  },
};

export default theme;
