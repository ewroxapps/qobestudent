import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="106" height="105" viewBox="0 0 106 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.49 14.17L67.8799 2.67002C71.5299 -1.36998 78.2299 1.41 77.9499 6.84L77.1599 22.32C76.9899 25.74 79.81 28.57 83.23 28.39L98.71 27.6C104.15 27.32 106.92 34.02 102.88 37.67L91.3799 48.06C88.8399 50.36 88.8399 54.35 91.3799 56.65L102.88 67.04C106.92 70.69 104.14 77.39 98.71 77.11L83.23 76.32C79.81 76.15 76.9799 78.97 77.1599 82.39L77.9499 97.87C78.2299 103.31 71.5299 106.08 67.8799 102.04L57.49 90.54C55.19 88 51.1999 88 48.8999 90.54L38.51 102.04C34.86 106.08 28.1599 103.3 28.4399 97.87L29.23 82.39C29.4 78.97 26.5799 76.14 23.1599 76.32L7.67992 77.11C2.23992 77.39 -0.53 70.69 3.51 67.04L15.01 56.65C17.55 54.35 17.55 50.36 15.01 48.06L3.51 37.67C-0.53 34.02 2.24992 27.32 7.67992 27.6L23.1599 28.39C26.5799 28.56 29.41 25.74 29.23 22.32L28.4399 6.84C28.1599 1.4 34.86 -1.36998 38.51 2.67002L48.8999 14.17C51.1999 16.71 55.19 16.71 57.49 14.17Z" fill="#120101"/>
<path d="M34.2501 104.62C33.4101 104.62 32.5701 104.46 31.7501 104.12C29.1901 103.06 27.6301 100.59 27.7701 97.83L28.5602 82.35C28.6302 80.91 28.0902 79.49 27.0702 78.47C26.0502 77.45 24.64 76.91 23.19 76.98L7.71007 77.77C4.95007 77.91 2.48003 76.35 1.42003 73.79C0.36003 71.23 1.00017 68.38 3.06017 66.53L14.5602 56.14C15.6302 55.17 16.2501 53.79 16.2501 52.34C16.2501 50.89 15.6302 49.51 14.5602 48.54L3.06017 38.15C1.01017 36.3 0.36003 33.45 1.42003 30.89C2.48003 28.33 4.95007 26.77 7.71007 26.91L23.19 27.7C24.63 27.77 26.0502 27.23 27.0702 26.21C28.0902 25.19 28.6402 23.77 28.5602 22.33L27.7701 6.85002C27.6301 4.09002 29.1901 1.62001 31.7501 0.560013C34.3101 -0.499987 37.1601 0.140027 39.0101 2.20003L49.4 13.7C50.37 14.77 51.7501 15.39 53.2001 15.39C54.6501 15.39 56.0301 14.77 57.0001 13.7L67.39 2.20003C69.24 0.150027 72.09 -0.499987 74.65 0.560013C77.21 1.62001 78.77 4.09002 78.63 6.85002L77.8402 22.33C77.7702 23.77 78.3102 25.19 79.3302 26.21C80.3502 27.23 81.7701 27.77 83.2101 27.7L98.69 26.91C101.45 26.77 103.92 28.33 104.98 30.89C106.04 33.45 105.4 36.3 103.34 38.15L91.8402 48.54C90.7702 49.51 90.15 50.89 90.15 52.34C90.15 53.79 90.7702 55.17 91.8402 56.14L103.34 66.53C105.39 68.38 106.04 71.23 104.98 73.79C103.92 76.35 101.45 77.91 98.69 77.77L83.2101 76.98C81.7701 76.91 80.3502 77.45 79.3302 78.47C78.3102 79.49 77.7602 80.91 77.8402 82.35L78.63 97.83C78.77 100.59 77.21 103.06 74.65 104.12C72.09 105.18 69.24 104.54 67.39 102.48L57.0001 90.98C56.0301 89.91 54.6501 89.29 53.2001 89.29C51.7501 89.29 50.37 89.91 49.4 90.98L39.0101 102.48C37.7501 103.88 36.0301 104.62 34.2501 104.62ZM53.19 87.95C55.01 87.95 56.7601 88.73 57.9801 90.08L68.3702 101.58C70.1502 103.56 72.51 103.55 74.13 102.88C75.74 102.21 77.4201 100.55 77.2801 97.89L76.4901 82.41C76.4001 80.59 77.0802 78.81 78.3702 77.52C79.6602 76.23 81.4401 75.54 83.2601 75.64L98.7401 76.43C101.4 76.56 103.06 74.89 103.73 73.28C104.4 71.67 104.41 69.31 102.43 67.52L90.93 57.13C89.58 55.91 88.8002 54.16 88.8002 52.34C88.8002 50.52 89.58 48.77 90.93 47.55L102.43 37.16C104.41 35.38 104.4 33.02 103.73 31.4C103.06 29.79 101.4 28.11 98.7401 28.25L83.2601 29.04C81.4401 29.13 79.6602 28.45 78.3702 27.16C77.0802 25.87 76.4001 24.09 76.4901 22.27L77.2801 6.79002C77.4201 4.13002 75.74 2.47 74.13 1.8C72.52 1.13 70.1602 1.12002 68.3702 3.10002L57.9801 14.6C56.7601 15.95 55.01 16.73 53.19 16.73C51.37 16.73 49.62 15.95 48.4 14.6L38.0101 3.10002C36.2301 1.12002 33.8701 1.13 32.2501 1.8C30.6401 2.47 28.9602 4.13002 29.1002 6.79002L29.89 22.27C29.98 24.09 29.3001 25.87 28.0101 27.16C26.7201 28.45 24.9402 29.14 23.1202 29.04L7.64 28.25C4.98 28.12 3.32001 29.79 2.65001 31.4C1.98001 33.01 1.97006 35.37 3.95006 37.16L15.4501 47.55C16.8001 48.77 17.5802 50.52 17.5802 52.34C17.5802 54.16 16.8001 55.91 15.4501 57.13L3.95006 67.52C1.97006 69.3 1.98001 71.66 2.65001 73.28C3.32001 74.89 4.98 76.57 7.64 76.43L23.1202 75.64C24.9402 75.54 26.7201 76.23 28.0101 77.52C29.3001 78.81 29.98 80.59 29.89 82.41L29.1002 97.89C28.9602 100.55 30.6401 102.21 32.2501 102.88C33.8601 103.55 36.2201 103.56 38.0101 101.58L48.4 90.08C49.62 88.73 51.37 87.95 53.19 87.95Z" fill="#120101"/>
<path d="M51.5901 80.13C66.9326 80.13 79.3701 67.6924 79.3701 52.35C79.3701 37.0075 66.9326 24.57 51.5901 24.57C36.2476 24.57 23.8101 37.0075 23.8101 52.35C23.8101 67.6924 36.2476 80.13 51.5901 80.13Z" fill="black"/>
</svg>
`;
export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
