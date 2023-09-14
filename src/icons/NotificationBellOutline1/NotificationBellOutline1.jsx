/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const NotificationBellOutline1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 28.5H20" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path
        d="M7.02538 13C7.02373 11.814 7.25682 10.6394 7.71123 9.54394C8.16565 8.44846 8.83239 7.45375 9.67303 6.61714C10.5137 5.78054 11.5116 5.1186 12.6092 4.66946C13.7069 4.22033 14.8826 3.99289 16.0686 4.00025C21.0173 4.03704 24.9756 8.15042 24.9756 13.113V13.5C24.9756 17.977 25.9123 20.5749 26.7372 21.9948C26.8261 22.1465 26.8734 22.319 26.8743 22.4948C26.8753 22.6706 26.8298 22.8436 26.7426 22.9962C26.6554 23.1489 26.5294 23.2759 26.3774 23.3643C26.2255 23.4527 26.0529 23.4996 25.877 23.5H6.12296C5.94711 23.4995 5.77449 23.4527 5.62251 23.3643C5.47053 23.2758 5.34458 23.1488 5.25734 22.9961C5.17011 22.8434 5.12469 22.6704 5.12566 22.4946C5.12663 22.3187 5.17396 22.1463 5.26288 21.9946C6.08829 20.5746 7.02538 17.9767 7.02538 13.5L7.02538 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

NotificationBellOutline1.propTypes = {
  color: PropTypes.string,
};
