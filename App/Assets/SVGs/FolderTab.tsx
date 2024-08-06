import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_84087)">
<path d="M15.5832 7.79175V12.0417C15.5832 14.8751 14.8748 15.5834 12.0415 15.5834H4.95817C2.12484 15.5834 1.4165 14.8751 1.4165 12.0417V4.95841C1.4165 2.12508 2.12484 1.41675 4.95817 1.41675H6.02067C7.08317 1.41675 7.31692 1.72841 7.72067 2.26675L8.78317 3.68341C9.05234 4.03758 9.20817 4.25008 9.9165 4.25008H12.0415C14.8748 4.25008 15.5832 4.95841 15.5832 7.79175Z" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M5.6665 1.41675H12.0415C13.4582 1.41675 14.1665 2.12508 14.1665 3.54175V4.51925" stroke="#94A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_6_84087">
<rect width="17" height="17" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const activeXml = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_85059)">
<path d="M15.5834 7.79175V12.0417C15.5834 14.8751 14.8751 15.5834 12.0417 15.5834H4.95841C2.12508 15.5834 1.41675 14.8751 1.41675 12.0417V4.95841C1.41675 2.12508 2.12508 1.41675 4.95841 1.41675H6.02091C7.08341 1.41675 7.31716 1.72841 7.72091 2.26675L8.78341 3.68341C9.05258 4.03758 9.20841 4.25008 9.91675 4.25008H12.0417C14.8751 4.25008 15.5834 4.95841 15.5834 7.79175Z" stroke="#38BDF8" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M5.66675 1.41675H12.0417C13.4584 1.41675 14.1667 2.12508 14.1667 3.54175V4.51925" stroke="#38BDF8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_6_85059">
<rect width="17" height="17" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export default ({ active = false, ...props }) => (
  <SvgXml xml={active ? activeXml : xml} {...props} />
);
