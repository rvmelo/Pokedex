import React from 'react';
import {SvgXml} from 'react-native-svg';

interface FinderLogoProps {
  width: number;
  height: number;
}

export const ArrowDown: React.FC<FinderLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.2135 1.28497L23.1223 0.193708C22.864 -0.0645694 22.4452 -0.0645694 22.1869 0.193708L12.2036 10.1533L2.22026 0.193708C1.96198 -0.0645694 1.5432 -0.0645694 1.28487 0.193708L0.193615 1.28497C-0.0646629 1.54324 -0.0646629 1.96202 0.193615 2.22035L11.7359 13.7626C11.9941 14.0209 12.4129 14.0209 12.6712 13.7626L24.2135 2.22035C24.4718 1.96202 24.4718 1.54324 24.2135 1.28497Z" fill="#EC0344"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
