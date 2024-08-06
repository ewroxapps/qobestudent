import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 5.97949C17.67 5.64949 14.32 5.47949 10.98 5.47949C9 5.47949 7.02 5.57949 5.04 5.77949L3 5.97949" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.8499 9.13965L18.1999 19.2096C18.0899 20.7796 17.9999 21.9996 15.2099 21.9996H8.7899C5.9999 21.9996 5.9099 20.7796 5.7999 19.2096L5.1499 9.13965" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.33 16.5H13.66" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 12.5H14.5" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
