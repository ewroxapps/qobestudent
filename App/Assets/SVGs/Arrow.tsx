import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `

<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_762_17875)">
<path opacity="0.4" d="M18.19 2H9.81C6.17 2 4 4.17 4 7.81V16.18C4 19.83 6.17 22 9.81 22H18.18C21.82 22 23.99 19.83 23.99 16.19V7.81C24 4.17 21.83 2 18.19 2Z" fill="white"/>
<path d="M12.7397 16.2802C12.5497 16.2802 12.3597 16.2102 12.2097 16.0602C11.9197 15.7702 11.9197 15.2902 12.2097 15.0002L15.2097 12.0002L12.2097 9.00016C11.9197 8.71016 11.9197 8.23016 12.2097 7.94016C12.4997 7.65016 12.9797 7.65016 13.2697 7.94016L16.7997 11.4702C17.0897 11.7602 17.0897 12.2402 16.7997 12.5302L13.2697 16.0602C13.1197 16.2102 12.9297 16.2802 12.7397 16.2802Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_762_17875" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_762_17875"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_762_17875" result="shape"/>
</filter>
</defs>
</svg>

`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
