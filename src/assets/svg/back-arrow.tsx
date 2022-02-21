import React from 'react';
import {SvgXml} from 'react-native-svg';

interface FinderLogoProps {
  width: number;
  height: number;
}

export const BackArrow: React.FC<FinderLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="31" height="18" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.57494 -0.0330334L10.0563 0.448296C10.3754 0.767321 10.3754 1.2846 10.0563 1.60369L4.34249 7.2846L29.933 7.2846C30.3842 7.2846 30.75 7.6504 30.75 8.10157V8.78238C30.75 9.23355 30.3842 9.59934 29.933 9.59934L4.34249 9.59934L10.0563 15.2803C10.3754 15.5993 10.3754 16.1166 10.0563 16.4357L9.57494 16.917C9.25592 17.236 8.73864 17.236 8.41962 16.917L0.489269 9.01964C0.170244 8.70061 0.170244 8.18334 0.489269 7.86424L8.41962 -0.033102C8.73864 -0.352127 9.25592 -0.352127 9.57494 -0.0330334Z" fill="#EC0344"/>
  </svg>
  `;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
