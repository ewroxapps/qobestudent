import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="12" height="12" fill="#EF4444"/>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
