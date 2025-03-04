import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66667 14.1663H4.33333C1.9 14.1663 0.5 12.7663 0.5 10.333V4.66634C0.5 2.23301 1.9 0.833008 4.33333 0.833008H9.66667C12.1 0.833008 13.5 2.23301 13.5 4.66634V10.333C13.5 12.7663 12.1 14.1663 9.66667 14.1663ZM4.33333 1.83301C2.42667 1.83301 1.5 2.75967 1.5 4.66634V10.333C1.5 12.2397 2.42667 13.1663 4.33333 13.1663H9.66667C11.5733 13.1663 12.5 12.2397 12.5 10.333V4.66634C12.5 2.75967 11.5733 1.83301 9.66667 1.83301H4.33333Z" fill="#64748B"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
