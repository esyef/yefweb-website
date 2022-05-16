export type ThemeProps = {
  colors: {
    primary: string;
    secondary: string;
    neutral: string;
    white: string;
  };
  fontWeight: {
    Regular: number;
    Medium: number;
    Bold: number;
    Black: number;
  };
  fontFamily: {
    sans: string;
  };

  fontSizes: {
    text: string;
    heading1: string;
    subheading: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  shadows: {
    standar: string;
  };
  background: {
    primary: string;
  };
};

export const Theme: ThemeProps = {
  colors: {
    neutral: '#403C5C',
    primary: '#13122E',
    white: '#F3ECFF',
    secondary: '#00C897',
  },
  fontWeight: {
    Regular: 400,
    Medium: 500,
    Bold: 700,
    Black: 900,
  },
  fontFamily: {
    sans: "'Roboto', sans-serif;",
  },
  fontSizes: {
    text: '1.5rem',
    heading1: '3rem',
    subheading: '2.5rem',
  },
  spacing: {
    small: '1.5rem',
    medium: '3rem',
    large: '4.5rem',
  },
  shadows: {
    standar: '-2px 2px 10px -5px #403C5C',
  },
  background: {
    primary:
      ' linear-gradient(to right top, #13122e, #13112b, #131028, #130e26, #130d23);',
  },
};
