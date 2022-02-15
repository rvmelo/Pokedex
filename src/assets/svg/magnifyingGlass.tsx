import React from 'react';
import {SvgXml} from 'react-native-svg';

interface FinderLogoProps {
  width: number;
  height: number;
}

export const MagnifyingGlass: React.FC<FinderLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.883 15.5682L12.8523 11.5375C12.7759 11.4612 12.6763 11.4213 12.5701 11.4213H12.1318C13.1777 10.2095 13.8118 8.63239 13.8118 6.90591C13.8118 3.09106 10.7208 0 6.90591 0C3.09106 0 0 3.09106 0 6.90591C0 10.7208 3.09106 13.8118 6.90591 13.8118C8.63239 13.8118 10.2095 13.1777 11.4213 12.1318V12.5701C11.4213 12.6763 11.4645 12.7759 11.5375 12.8523L15.5682 16.883C15.7242 17.039 15.9766 17.039 16.1326 16.883L16.883 16.1326C17.039 15.9766 17.039 15.7242 16.883 15.5682ZM6.90591 12.2182C3.9709 12.2182 1.59367 9.84093 1.59367 6.90591C1.59367 3.9709 3.9709 1.59367 6.90591 1.59367C9.84093 1.59367 12.2182 3.9709 12.2182 6.90591C12.2182 9.84093 9.84093 12.2182 6.90591 12.2182Z" fill="#EC0344"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
