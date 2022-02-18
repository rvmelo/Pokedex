import React from 'react';
import {SvgXml} from 'react-native-svg';

interface FinderLogoProps {
  width: number;
  height: number;
}

export const CloseIcon: React.FC<FinderLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="7.02612" y="5.68356" width="20" height="2.12712" rx="1.06356" transform="rotate(44.3466 7.02612 5.68356)" fill="#EC0344" stroke="#EC0344"/>
  <rect x="5.68308" y="19.8418" width="20" height="2.12712" rx="1.06356" transform="rotate(-45.6534 5.68308 19.8418)" fill="#EC0344" stroke="#EC0344"/>
  </svg>
  `;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
