import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.4772 17.5228 2 12 2C6.47715 2 2 6.4772 2 12C2 17.5229 6.47715 22 12 22C17.5228 22 22 17.5229 22 12Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.74 15.5303L14.26 12.0002L10.74 8.47024" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
