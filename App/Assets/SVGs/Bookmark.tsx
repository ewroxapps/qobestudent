import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_17895)">
<path d="M10 15.1666H6C2.38 15.1666 0.833328 13.6199 0.833328 9.99992V5.99992C0.833328 2.37992 2.38 0.833252 6 0.833252H10C13.62 0.833252 15.1667 2.37992 15.1667 5.99992V9.99992C15.1667 13.6199 13.62 15.1666 10 15.1666ZM6 1.83325C2.92666 1.83325 1.83333 2.92659 1.83333 5.99992V9.99992C1.83333 13.0733 2.92666 14.1666 6 14.1666H10C13.0733 14.1666 14.1667 13.0733 14.1667 9.99992V5.99992C14.1667 2.92659 13.0733 1.83325 10 1.83325H6Z" fill="#475569"/>
<path d="M5.78666 10.221C5.50666 10.221 5.24666 10.1543 5.01999 10.0277C4.46666 9.71435 4.16666 9.09435 4.16666 8.28101V1.62769C4.16666 1.35435 4.39332 1.12769 4.66666 1.12769C4.93999 1.12769 5.16666 1.35435 5.16666 1.62769V8.28101C5.16666 8.71435 5.29332 9.03435 5.51332 9.15435C5.74666 9.28768 6.10666 9.22101 6.49999 8.98768L7.37999 8.46101C7.73999 8.24768 8.25332 8.24768 8.61332 8.46101L9.49332 8.98768C9.89332 9.22768 10.2533 9.28768 10.48 9.15435C10.7 9.02768 10.8267 8.70768 10.8267 8.28101V1.62769C10.8267 1.35435 11.0533 1.12769 11.3267 1.12769C11.6 1.12769 11.8267 1.35435 11.8267 1.62769V8.28101C11.8267 9.09435 11.5267 9.71435 10.9733 10.0277C10.42 10.341 9.69332 10.2743 8.97999 9.84768L8.09999 9.32101C8.05999 9.29435 7.93332 9.29435 7.89332 9.32101L7.01332 9.84768C6.59999 10.0943 6.17332 10.221 5.78666 10.221Z" fill="#475569"/>
<path d="M10 15.1666H6C2.38 15.1666 0.833328 13.6199 0.833328 9.99992V5.99992C0.833328 2.37992 2.38 0.833252 6 0.833252H10C13.62 0.833252 15.1667 2.37992 15.1667 5.99992V9.99992C15.1667 13.6199 13.62 15.1666 10 15.1666ZM6 1.83325C2.92666 1.83325 1.83333 2.92659 1.83333 5.99992V9.99992C1.83333 13.0733 2.92666 14.1666 6 14.1666H10C13.0733 14.1666 14.1667 13.0733 14.1667 9.99992V5.99992C14.1667 2.92659 13.0733 1.83325 10 1.83325H6Z" fill="#475569"/>
<path d="M5.78666 10.221C5.50666 10.221 5.24666 10.1543 5.01999 10.0277C4.46666 9.71435 4.16666 9.09435 4.16666 8.28101V1.62769C4.16666 1.35435 4.39332 1.12769 4.66666 1.12769C4.93999 1.12769 5.16666 1.35435 5.16666 1.62769V8.28101C5.16666 8.71435 5.29332 9.03435 5.51332 9.15435C5.74666 9.28768 6.10666 9.22101 6.49999 8.98768L7.37999 8.46101C7.73999 8.24768 8.25332 8.24768 8.61332 8.46101L9.49332 8.98768C9.89332 9.22768 10.2533 9.28768 10.48 9.15435C10.7 9.02768 10.8267 8.70768 10.8267 8.28101V1.62769C10.8267 1.35435 11.0533 1.12769 11.3267 1.12769C11.6 1.12769 11.8267 1.35435 11.8267 1.62769V8.28101C11.8267 9.09435 11.5267 9.71435 10.9733 10.0277C10.42 10.341 9.69332 10.2743 8.97999 9.84768L8.09999 9.32101C8.05999 9.29435 7.93332 9.29435 7.89332 9.32101L7.01332 9.84768C6.59999 10.0943 6.17332 10.221 5.78666 10.221Z" fill="#475569"/>
</g>
<defs>
<clipPath id="clip0_5_17895">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
