import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9629 22.5876L4.37539 15.0002L11.9629 7.41269" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.625 15L4.5875 15" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
