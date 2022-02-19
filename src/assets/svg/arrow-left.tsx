import React from 'react';
import {SvgXml} from 'react-native-svg';

interface FinderLogoProps {
  width: number;
  height: number;
}

export const ArrowLeft: React.FC<FinderLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.2305 24.5117L13.0039 23.7383C13.1869 23.5553 13.1869 23.2585 13.0039 23.0754L6.94408 17.0157H20.2812C20.5401 17.0157 20.75 16.8058 20.75 16.5469V15.4532C20.75 15.1943 20.5401 14.9844 20.2812 14.9844H6.94408L13.0039 8.92465C13.1869 8.7416 13.1869 8.4448 13.0039 8.26172L12.2305 7.48836C12.0474 7.30531 11.7506 7.30531 11.5675 7.48836L3.38729 15.6686C3.20424 15.8516 3.20424 16.1484 3.38729 16.3315L11.5675 24.5118C11.7506 24.6948 12.0474 24.6948 12.2305 24.5117Z" fill="white"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
