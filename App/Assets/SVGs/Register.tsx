import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="white"/>
<path d="M11.4991 8.08902V17.249C11.4991 17.609 11.1391 17.849 10.8091 17.709C9.59914 17.189 8.01913 16.709 6.91913 16.569L6.72913 16.549C6.11913 16.469 5.61914 15.899 5.61914 15.279V7.57901C5.61914 6.81901 6.23915 6.24902 6.99915 6.30902C8.24915 6.40902 10.0992 7.00904 11.2592 7.66904C11.4092 7.73904 11.4991 7.90902 11.4991 8.08902Z" fill="white"/>
<path d="M18.38 7.70081V15.2708C18.38 15.8908 17.88 16.4608 17.27 16.5408L17.06 16.5608C15.97 16.7108 14.4 17.1808 13.19 17.6908C12.86 17.8308 12.5 17.5908 12.5 17.2308V8.08078C12.5 7.90078 12.59 7.73081 12.75 7.64081C13.91 6.99081 15.72 6.41078 16.95 6.30078H16.99C17.76 6.31078 18.38 6.93081 18.38 7.70081Z" fill="white"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
