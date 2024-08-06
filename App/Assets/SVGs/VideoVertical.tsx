import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const xml = `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1251 16.1147H6.87508C3.02883 16.1147 1.3855 14.4713 1.3855 10.6251V6.37508C1.3855 2.52883 3.02883 0.885498 6.87508 0.885498H11.1251C14.9713 0.885498 16.6147 2.52883 16.6147 6.37508V10.6251C16.6147 14.4713 14.9713 16.1147 11.1251 16.1147ZM6.87508 1.948C3.60966 1.948 2.448 3.10966 2.448 6.37508V10.6251C2.448 13.8905 3.60966 15.0522 6.87508 15.0522H11.1251C14.3905 15.0522 15.5522 13.8905 15.5522 10.6251V6.37508C15.5522 3.10966 14.3905 1.948 11.1251 1.948H6.87508Z" fill="#94A3B8"/>
<path d="M5.38086 15.7459C5.09045 15.7459 4.84961 15.5051 4.84961 15.2146V1.78467C4.84961 1.49425 5.09045 1.25342 5.38086 1.25342C5.67128 1.25342 5.91211 1.48717 5.91211 1.78467V15.2146C5.91211 15.5121 5.67128 15.7459 5.38086 15.7459Z" fill="#94A3B8"/>
<path d="M12.4641 15.7459C12.1737 15.7459 11.9329 15.5051 11.9329 15.2146V1.78467C11.9329 1.49425 12.1737 1.25342 12.4641 1.25342C12.7545 1.25342 12.9954 1.49425 12.9954 1.78467V15.2146C12.9954 15.5121 12.7545 15.7459 12.4641 15.7459Z" fill="#94A3B8"/>
<path d="M5.37983 5.46753H2.29858C2.00817 5.46753 1.76733 5.2267 1.76733 4.93628C1.76733 4.64586 2.00817 4.40503 2.29858 4.40503H5.37983C5.67025 4.40503 5.91108 4.64586 5.91108 4.93628C5.91108 5.2267 5.67025 5.46753 5.37983 5.46753Z" fill="#94A3B8"/>
<path d="M5.38122 9.03125H1.93872C1.6483 9.03125 1.40747 8.79042 1.40747 8.5C1.40747 8.20958 1.6483 7.96875 1.93872 7.96875H5.38122C5.67164 7.96875 5.91247 8.20958 5.91247 8.5C5.91247 8.79042 5.67164 9.03125 5.38122 9.03125Z" fill="#94A3B8"/>
<path d="M5.38083 12.5508H2.25708C1.96666 12.5508 1.72583 12.3099 1.72583 12.0195C1.72583 11.7291 1.96666 11.4883 2.25708 11.4883H5.38083C5.67125 11.4883 5.91208 11.7291 5.91208 12.0195C5.91208 12.3099 5.67125 12.5508 5.38083 12.5508Z" fill="#94A3B8"/>
<path d="M16.0048 5.46753H12.9236C12.6332 5.46753 12.3923 5.2267 12.3923 4.93628C12.3923 4.64586 12.6332 4.40503 12.9236 4.40503H16.0048C16.2952 4.40503 16.5361 4.64586 16.5361 4.93628C16.5361 5.2267 16.2952 5.46753 16.0048 5.46753Z" fill="#94A3B8"/>
<path d="M16.0062 9.03125H12.5637C12.2734 9.03125 12.0325 8.79042 12.0325 8.5C12.0325 8.20958 12.2734 7.96875 12.5637 7.96875H16.0062C16.2966 7.96875 16.5375 8.20958 16.5375 8.5C16.5375 8.79042 16.2966 9.03125 16.0062 9.03125Z" fill="#94A3B8"/>
<path d="M12.5195 9.03125H4.72778C4.43737 9.03125 4.19653 8.79042 4.19653 8.5C4.19653 8.20958 4.43737 7.96875 4.72778 7.96875H12.5195C12.8098 7.96875 13.0507 8.20958 13.0507 8.5C13.0507 8.79042 12.817 9.03125 12.5195 9.03125Z" fill="#94A3B8"/>
<path d="M16.0058 12.5508H12.8821C12.5917 12.5508 12.3508 12.3099 12.3508 12.0195C12.3508 11.7291 12.5917 11.4883 12.8821 11.4883H16.0058C16.2962 11.4883 16.5371 11.7291 16.5371 12.0195C16.5371 12.3099 16.2962 12.5508 16.0058 12.5508Z" fill="#94A3B8"/>
</svg>
`;
const activeXml = `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1248 16.1147H6.87484C3.02859 16.1147 1.38525 14.4713 1.38525 10.6251V6.37508C1.38525 2.52883 3.02859 0.885498 6.87484 0.885498H11.1248C14.9711 0.885498 16.6144 2.52883 16.6144 6.37508V10.6251C16.6144 14.4713 14.9711 16.1147 11.1248 16.1147ZM6.87484 1.948C3.60942 1.948 2.44775 3.10966 2.44775 6.37508V10.6251C2.44775 13.8905 3.60942 15.0522 6.87484 15.0522H11.1248C14.3903 15.0522 15.5519 13.8905 15.5519 10.6251V6.37508C15.5519 3.10966 14.3903 1.948 11.1248 1.948H6.87484Z" fill="#38BDF8"/>
<path d="M5.38086 15.7459C5.09045 15.7459 4.84961 15.5051 4.84961 15.2146V1.78467C4.84961 1.49425 5.09045 1.25342 5.38086 1.25342C5.67128 1.25342 5.91211 1.48717 5.91211 1.78467V15.2146C5.91211 15.5121 5.67128 15.7459 5.38086 15.7459Z" fill="#38BDF8"/>
<path d="M12.4644 15.7459C12.1739 15.7459 11.9331 15.5051 11.9331 15.2146V1.78467C11.9331 1.49425 12.1739 1.25342 12.4644 1.25342C12.7548 1.25342 12.9956 1.49425 12.9956 1.78467V15.2146C12.9956 15.5121 12.7548 15.7459 12.4644 15.7459Z" fill="#38BDF8"/>
<path d="M5.37959 5.46753H2.29834C2.00792 5.46753 1.76709 5.2267 1.76709 4.93628C1.76709 4.64586 2.00792 4.40503 2.29834 4.40503H5.37959C5.67001 4.40503 5.91084 4.64586 5.91084 4.93628C5.91084 5.2267 5.67001 5.46753 5.37959 5.46753Z" fill="#38BDF8"/>
<path d="M5.38146 9.03125H1.93896C1.64855 9.03125 1.40771 8.79042 1.40771 8.5C1.40771 8.20958 1.64855 7.96875 1.93896 7.96875H5.38146C5.67188 7.96875 5.91271 8.20958 5.91271 8.5C5.91271 8.79042 5.67188 9.03125 5.38146 9.03125Z" fill="#38BDF8"/>
<path d="M5.38059 12.5508H2.25684C1.96642 12.5508 1.72559 12.3099 1.72559 12.0195C1.72559 11.7291 1.96642 11.4883 2.25684 11.4883H5.38059C5.671 11.4883 5.91184 11.7291 5.91184 12.0195C5.91184 12.3099 5.671 12.5508 5.38059 12.5508Z" fill="#38BDF8"/>
<path d="M16.0046 5.46753H12.9233C12.6329 5.46753 12.3921 5.2267 12.3921 4.93628C12.3921 4.64586 12.6329 4.40503 12.9233 4.40503H16.0046C16.295 4.40503 16.5358 4.64586 16.5358 4.93628C16.5358 5.2267 16.295 5.46753 16.0046 5.46753Z" fill="#38BDF8"/>
<path d="M16.0065 9.03125H12.564C12.2736 9.03125 12.0327 8.79042 12.0327 8.5C12.0327 8.20958 12.2736 7.96875 12.564 7.96875H16.0065C16.2969 7.96875 16.5377 8.20958 16.5377 8.5C16.5377 8.79042 16.2969 9.03125 16.0065 9.03125Z" fill="#38BDF8"/>
<path d="M12.5197 9.03125H4.72803C4.43761 9.03125 4.19678 8.79042 4.19678 8.5C4.19678 8.20958 4.43761 7.96875 4.72803 7.96875H12.5197C12.8101 7.96875 13.051 8.20958 13.051 8.5C13.051 8.79042 12.8172 9.03125 12.5197 9.03125Z" fill="#38BDF8"/>
<path d="M16.0056 12.5508H12.8818C12.5914 12.5508 12.3506 12.3099 12.3506 12.0195C12.3506 11.7291 12.5914 11.4883 12.8818 11.4883H16.0056C16.296 11.4883 16.5368 11.7291 16.5368 12.0195C16.5368 12.3099 16.296 12.5508 16.0056 12.5508Z" fill="#38BDF8"/>
</svg>
`;

export default ({ active = false, ...props }) => (
  <SvgXml xml={active ? activeXml : xml} {...props} />
);
