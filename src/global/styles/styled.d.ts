import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
      mediumGray: string;
    };
    fonts: {
      sizes: {
        xs: number;
        sm: number;
        m: number;
        lg: number;
        xl: number;
      };
      family: {
        regular: string;
        bold: string;
      };
    };
  }
}
