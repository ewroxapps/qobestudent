import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 29.3333C23.3334 29.3333 29.3334 23.3333 29.3334 16C29.3334 8.66663 23.3334 2.66663 16 2.66663C8.66669 2.66663 2.66669 8.66663 2.66669 16C2.66669 23.3333 8.66669 29.3333 16 29.3333Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.2266 19.7733L19.7733 12.2267" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.7733 19.7733L12.2266 12.2267" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
