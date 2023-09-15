/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { EyeClosedOutline1 } from "../../icons/EyeClosedOutline1";

export const SectionalButton = ({
  label = "Transaction Limits",
  selected,
  state,
  className,
  icon = <EyeClosedOutline1 className="!relative !w-[24px] !h-[24px]" color="#191307" />,
  buttonLabelClassName,
}) => {
  return (
    <div
      className={`flex flex-wrap items-center gap-[8px] md:gap-[16px] px-[16px] py-[12px] rounded-[16px] justify-center ${!selected || state === "pressed" ? "flex" : state === "active" ? "inline-flex" : ""} ${
        state === "enabled"
          ? "bg-[color:var(--backgroundcontextualsurface-cont)]"
          : state === "active"
          ? "bg-[color:var(--backgroundcontextualprimary-cont)]"
          : !selected && state === "pressed"
          ? "bg-[color:var(--backgroundcontextualsurface-cont-pressed)]"
          : "bg-[color:var(--backgroundcontextualprimary-cont-pressed)]"
      } ${className}`}
    >
      <div
        className={`inline-flex flex-col items-center flex-[0_0_auto] p-[12px] rounded-[36px] justify-center relative ${
          state === "enabled"
            ? "bg-[color:var(--backgroundcontextualprimary-cont)]"
            : state === "active"
            ? "bg-[color:var(--backgroundbrandinverse-secondary)]"
            : !selected && state === "pressed"
            ? "bg-[color:var(--backgroundcontextualprimary-cont-pressed)]"
            : "bg-[color:var(--backgroundbrandinverse-tertiary)]"
        }`}
      >
        {icon}
      </div>
      <div
        className={`flex-1 relative ${
          selected ? "[font-family:var(--body-medium-high-emphasis-font-family)]" : "[font-family:'Inter',Helvetica]"
        } ${selected ? "tracking-[var(--body-medium-high-emphasis-letter-spacing)]" : "tracking-[0]"} ${
          selected ? "[font-style:var(--body-medium-high-emphasis-font-style)]" : ""
        } ${selected ? "text-[length:var(--body-medium-high-emphasis-font-size)]" : "text-[14px]"} ${
          selected
            ? "text-[color:var(--typecontextualon-primary)]"
            : "text-[color:var(--typecontextualon-surface-cont)]"
        } ${selected ? "font-[number:var(--body-medium-high-emphasis-font-weight)]" : "font-medium"} ${
          selected ? "leading-[var(--body-medium-high-emphasis-line-height)]" : "leading-[22px]"
        } ${buttonLabelClassName}`}
      >
        {label}
      </div>
    </div>
  );
};

SectionalButton.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
  state: PropTypes.oneOf(["pressed", "active", "enabled"]),
};
