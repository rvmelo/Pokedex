import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
      mediumGray: string;

      // pokemon types
      rock: string;
      ghost: string;
      steel: string;
      water: string;
      grass: string;
      psychic: string;
      ice: string;
      dark: string;
      fairy: string;
      normal: string;
      fighting: string;
      flying: string;
      poison: string;
      ground: string;
      bug: string;
      fire: string;
      electric: string;
      dragon: string;
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
