import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.56055 9.38L4.00055 11.94L6.56055 14.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.2402 11.9399L4.07024 11.9399" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.2402 4C16.6602 4 20.2402 7 20.2402 12C20.2402 17 16.6602 20 12.2402 20" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
