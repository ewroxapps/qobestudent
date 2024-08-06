import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 17.5228 6.4772 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.4772 2 2 6.47715 2 12Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.26 8.46973L9.74001 11.9998L13.26 15.5298" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
