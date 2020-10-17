import React from 'react';

const CartIcon = ({ fill = '#fff', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    width={size}
    height={size}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const HomeIcon = ({ fill = '#fff', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    width={size}
    height={size}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
  </svg>
);

const CategoriesIcon = ({ fill = '#fff', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    width={size}
    height={size}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
  </svg>
);

const UserIcon = ({ fill = '#fff', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    width={size}
    height={size}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" />
  </svg>
);

const AddIcon = ({ fill = '#fff', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    width={size}
    height={size}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </svg>
);

const Loader = ({ fill = '#fff', size = 24 }) => (
  // <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
  <svg
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    stroke={fill}
    width={size}
    height={size}
  >
    <g fill="none" fillRule="evenodd" strokeWidth="2">
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="0s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="-0.9s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="-0.9s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

const LogoutIcon = ({ fill = '#fff', size = 24, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    width={size}
    height={size}
    {...rest}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm5.14 2.86c-.39.39-.38 1-.01 1.39 1.13 1.2 1.83 2.8 1.87 4.57.09 3.83-3.08 7.13-6.91 7.17C8.18 19.05 5 15.9 5 12c0-1.84.71-3.51 1.87-4.76.37-.39.37-1-.01-1.38-.4-.4-1.05-.39-1.43.02C3.98 7.42 3.07 9.47 3 11.74c-.14 4.88 3.83 9.1 8.71 9.25 5.1.16 9.29-3.93 9.29-9 0-2.37-.92-4.51-2.42-6.11-.38-.41-1.04-.42-1.44-.02z" />
  </svg>
);

const OrdersIcon = ({ fill = '#fff', size = 24, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    width={size}
    height={size}
    {...rest}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 9h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20 3H4c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 16H5V5h14v14z" />
  </svg>
);

export {
  CartIcon,
  HomeIcon,
  CategoriesIcon,
  UserIcon,
  AddIcon,
  Loader,
  LogoutIcon,
  OrdersIcon,
};
