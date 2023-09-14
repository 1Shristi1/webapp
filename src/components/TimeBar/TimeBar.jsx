/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TimeBar = ({ className, symbols = "/img/symbols.svg", timeClassName }) => {
  return (
    <div className={`w-[360px] h-[24px] bg-[color:var(--backgroundneutralprimary)] ${className}`}>
      <div className="relative h-[22px]">
        <img className="absolute w-[46px] h-[10px] top-[6px] left-[298px]" alt="Symbols" src={symbols} />
        <div
          className={`absolute h-[16px] top-[2px] left-[16px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[color:var(--typeneutralmedium-emphasis)] text-[13px] text-center tracking-[0] leading-[normal] ${timeClassName}`}
        >
          19:05
        </div>
      </div>
    </div>
  );
};

TimeBar.propTypes = {
  symbols: PropTypes.string,
};
