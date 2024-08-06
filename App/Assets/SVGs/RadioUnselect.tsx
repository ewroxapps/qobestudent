import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.32812 15.6719C5.92188 17.2344 7.8125 18.0156 10 18.0156C12.1875 18.0156 14.0625 17.2344 15.625 15.6719C17.2188 14.0781 18.0156 12.1875 18.0156 10C18.0156 7.8125 17.2188 5.9375 15.625 4.375C14.0625 2.78125 12.1875 1.98438 10 1.98438C7.8125 1.98438 5.92188 2.78125 4.32812 4.375C2.76562 5.9375 1.98438 7.8125 1.98438 10C1.98438 12.1875 2.76562 14.0781 4.32812 15.6719ZM2.92188 2.96875C4.89062 1 7.25 0.015625 10 0.015625C12.75 0.015625 15.0938 1 17.0312 2.96875C19 4.90625 19.9844 7.25 19.9844 10C19.9844 12.75 19 15.1094 17.0312 17.0781C15.0938 19.0156 12.75 19.9844 10 19.9844C7.25 19.9844 4.89062 19.0156 2.92188 17.0781C0.984375 15.1094 0.015625 12.75 0.015625 10C0.015625 7.25 0.984375 4.90625 2.92188 2.96875Z" fill="black" fill-opacity="0.6"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
