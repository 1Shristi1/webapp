/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const GoldJewelsOutline = ({ color = "#191307", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 3.66602V6.66602" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M9 5.42822L10.5 8.0263" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M23 5.42822L21.5 8.0263" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path
        d="M3.45093 10.2158L6.049 11.7158"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M28.5491 10.2158L25.951 11.7158"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M20.375 12.6667H11.625C11.2798 12.6667 11 13.1144 11 13.6667V18.6667C11 19.219 11.2798 19.6667 11.625 19.6667H20.375C20.7202 19.6667 21 19.219 21 18.6667V13.6667C21 13.1144 20.7202 12.6667 20.375 12.6667Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.5455 19.6667H6.45455C6.20351 19.6667 6 20.1144 6 20.6667V25.6667C6 26.219 6.20351 26.6667 6.45455 26.6667H15.5455C15.7965 26.6667 16 26.219 16 25.6667V20.6667C16 20.1144 15.7965 19.6667 15.5455 19.6667Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M25.5455 19.6667H16.4545C16.2035 19.6667 16 20.1144 16 20.6667V25.6667C16 26.219 16.2035 26.6667 16.4545 26.6667H25.5455C25.7965 26.6667 26 26.219 26 25.6667V20.6667C26 20.1144 25.7965 19.6667 25.5455 19.6667Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

GoldJewelsOutline.propTypes = {
  color: PropTypes.string,
};
