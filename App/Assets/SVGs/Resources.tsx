import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 11V17C22.5 21 21.5 22 17.5 22H7.5C3.5 22 2.5 21 2.5 17V7C2.5 3 3.5 2 7.5 2H9C10.5 2 10.83 2.44 11.4 3.2L12.9 5.2C13.28 5.7 13.5 6 14.5 6H17.5C21.5 6 22.5 7 22.5 11Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M8.5 2H17.5C19.5 2 20.5 3 20.5 5V6.38" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
