import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.61981 3.95312L13.6665 7.99977L9.61981 12.0464" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.33331 8H13.5533" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;