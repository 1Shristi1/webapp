/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

export const Component = ({ property1 }) => {
  const [displayText, setDisplayText] = useState("Convert to EMI");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) =>
        prevText === "Convert to EMI" ? "Cash withdrawal" : "Convert to EMI"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-[128px] h-[18px] relative ${property1 === "frame-48095623" ? "overflow-hidden" : ""}`}>
      <div
        className={`[font-family:var(--body-small-low-emphasis-font-family)] w-[128px] left-0  -translate-y-0 duration-100 tracking-[var(--body-small-low-emphasis-letter-spacing)] [font-style:var(--body-small-low-emphasis-font-style)] text-[length:var(--body-small-low-emphasis-font-size)] text-[color:var(--typeneutrallow-emphasis)] h-[18px] font-[number:var(--body-small-low-emphasis-font-weight)] leading-[var(--body-small-low-emphasis-line-height)] absolute ${
          property1 === "frame-48095624" ? "top-[-26px]" : "-top-px"
        }`}
      >
        {displayText}
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-48095623", "frame-48095624"]),
};
