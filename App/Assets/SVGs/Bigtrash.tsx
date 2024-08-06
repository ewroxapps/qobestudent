import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.875 12.2093C36.0763 11.5356 29.2367 11.1885 22.4175 11.1885C18.375 11.1885 14.3325 11.3926 10.29 11.801L6.125 12.2093" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3542 10.1468L17.8033 7.47217C18.13 5.53259 18.375 4.08301 21.8254 4.08301H27.1746C30.625 4.08301 30.8904 5.61426 31.1967 7.49259L31.6458 10.1468" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.4852 18.6611L37.1581 39.2207C36.9335 42.4261 36.7497 44.9169 31.0535 44.9169H17.946C12.2498 44.9169 12.066 42.4261 11.8415 39.2207L10.5144 18.6611" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0904 33.6875H27.8892" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3958 25.5205H29.6042" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
