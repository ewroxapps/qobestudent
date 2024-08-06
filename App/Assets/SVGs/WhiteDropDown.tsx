import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.946 5.45312H7.7927H4.05268C3.41268 5.45312 3.09268 6.22646 3.54601 6.6798L6.99936 10.1331C7.5527 10.6865 8.4527 10.6865 9.00603 10.1331L10.3194 8.8198L12.4594 6.6798C12.906 6.22646 12.586 5.45312 11.946 5.45312Z" fill="#475569"/>
</svg>
`;

export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
