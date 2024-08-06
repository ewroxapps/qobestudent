import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3296 17.4496C12.1496 17.5096 11.8396 17.5096 11.6596 17.4496C10.0996 16.9196 6.59961 14.6896 6.59961 10.9096C6.59961 9.23964 7.93961 7.88965 9.59961 7.88965C10.5796 7.88965 11.4496 8.35965 11.9996 9.09965C12.5396 8.36965 13.4196 7.88965 14.3996 7.88965C16.0596 7.88965 17.3996 9.23964 17.3996 10.9096C17.3996 14.6896 13.8996 16.9196 12.3296 17.4496Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
