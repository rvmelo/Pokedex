import React from 'react';
import {SvgXml} from 'react-native-svg';

interface FinderLogoProps {
  width: number;
  height: number;
}

export const EmptyHeart: React.FC<FinderLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25.433 3.50013L25.4332 3.5003C26.0681 4.13487 26.5717 4.88831 26.9153 5.71758C27.2589 6.54685 27.4358 7.43569 27.4358 8.33333C27.4358 9.23096 27.2589 10.1198 26.9153 10.9491C26.5717 11.7783 26.0681 12.5318 25.4332 13.1664L25.4331 13.1664L24.0198 14.5798L14 24.5996L3.98022 14.5798L2.56688 13.1664C1.28506 11.8846 0.564941 10.1461 0.564941 8.33333C0.564941 6.52056 1.28506 4.78203 2.56688 3.50021C3.8487 2.21839 5.58723 1.49827 7.4 1.49827C9.21276 1.49827 10.9513 2.21839 12.2331 3.50021L13.6464 4.91355C13.8417 5.10881 14.1583 5.10881 14.3535 4.91355L15.7669 3.50021L15.767 3.50013C16.4015 2.86526 17.155 2.36163 17.9843 2.01802C18.8135 1.67441 19.7024 1.49756 20.6 1.49756C21.4976 1.49756 22.3865 1.67441 23.2157 2.01802C24.045 2.36163 24.7985 2.86526 25.433 3.50013Z" stroke="#EC0344" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
