import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08333 21V8.16671C4.08333 3.50004 5.25 2.33337 9.91667 2.33337H18.0833C22.75 2.33337 23.9167 3.50004 23.9167 8.16671V19.8334C23.9167 19.9967 23.9167 20.16 23.905 20.3234" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.40833 17.5H23.9167V21.5833C23.9167 23.835 22.085 25.6667 19.8333 25.6667H8.16667C5.915 25.6667 4.08333 23.835 4.08333 21.5833V20.825C4.08333 18.9933 5.57667 17.5 7.40833 17.5Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 8.16663H18.6667" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 12.25H15.1667" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
