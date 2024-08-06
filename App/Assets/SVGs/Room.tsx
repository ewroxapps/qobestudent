import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.5" y="1.5" width="10" height="13" rx="1.5" stroke="#475569"/>
<rect x="5.43359" y="3.6001" width="4.13333" height="3.9" rx="0.5" stroke="#475569"/>
<ellipse cx="10.7997" cy="10.0999" rx="0.733333" ry="0.7" fill="#475569"/>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
