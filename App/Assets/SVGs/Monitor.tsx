import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_17906)">
<path d="M14.6667 7.08659V8.51992C14.6667 10.8933 14.0733 11.4799 11.7067 11.4799H4.29333C1.92666 11.4799 1.33333 10.8866 1.33333 8.51992V4.29325C1.33333 1.92659 1.92666 1.33325 4.29333 1.33325H11.7C14.0733 1.33325 14.6667 1.92659 14.6667 4.29325" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11.4792V14.6659" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.33333 8.66675H14.6667" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 14.6667H11" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5_17906">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
