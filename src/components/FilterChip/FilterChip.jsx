/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckOutline3 } from "../../icons/CheckOutline3";
import { PlaceholderOutline1 } from "../../icons/PlaceholderOutline1";

export const FilterChip = ({ text = "Billed", style, isSelected, state, className }) => {
  return (
    <div
      className={`inline-flex items-center h-[32px] overflow-hidden rounded-[24px] justify-center relative ${
        !isSelected ? "border border-solid" : ""
      } ${
        state === "default" && !isSelected
          ? "border-[color:var(--bordercontextualinput)]"
          : !isSelected && state === "pressed"
          ? "border-[color:var(--bordercontextualon-surface-cont)]"
          : state === "disabled" && !isSelected
          ? "border-[color:var(--bordercontextualinput-disabled)]"
          : ""
      } ${
        state === "default" && isSelected
          ? "bg-[color:var(--backgroundcontextualprimary-cont)]"
          : isSelected && state === "pressed"
          ? "bg-[color:var(--backgroundcontextualprimary-cont-pressed)]"
          : state === "disabled" && isSelected
          ? "bg-[color:var(--backgroundcontextualsurface-cont)]"
          : !isSelected && state === "pressed"
          ? "bg-[color:var(--backgroundcontextualsurface-cont-pressed)]"
          : ""
      } ${className}`}
    >
      <div
        className={`inline-flex items-center flex-[0_0_auto] h-[32px] justify-center relative ${
          style === "unselected" ? "gap-[8px]" : "gap-[4px]"
        } ${
          style === "selected-trailing-icon"
            ? "px-[8px] py-[6px]"
            : style === "unselected"
            ? "px-[16px] py-[6px]"
            : style === "unselected-trailing-icon"
            ? "pl-[16px] pr-[8px] py-[6px]"
            : "pl-[8px] pr-[16px] py-[6px]"
        }`}
      >
        {isSelected && (
          <CheckOutline3
            className="!relative !w-[16px] !h-[16px]"
            color={state === "disabled" ? "#A6A6A6" : "#191307"}
          />
        )}

        {style === "unselected-leading-icon" && (
          <PlaceholderOutline1
            className="!relative !w-[16px] !h-[16px]"
            color={state === "disabled" ? "#A6A6A6" : "#F2F2F2"}
          />
        )}

        <div
          className={`[font-family:var(--body-medium-medium-emphasis-font-family)] w-fit mt-[-2.00px] tracking-[var(--body-medium-medium-emphasis-letter-spacing)] text-[length:var(--body-medium-medium-emphasis-font-size)] [font-style:var(--body-medium-medium-emphasis-font-style)] font-[number:var(--body-medium-medium-emphasis-font-weight)] text-center whitespace-nowrap leading-[var(--body-medium-medium-emphasis-line-height)] relative ${
            state === "disabled"
              ? "text-[color:var(--typecontextualdisabled)]"
              : (state === "default" && style === "unselected-leading-icon") ||
                (state === "default" && style === "unselected-trailing-icon") ||
                (state === "default" && style === "unselected") ||
                (state === "pressed" && style === "unselected-leading-icon") ||
                (state === "pressed" && style === "unselected-trailing-icon") ||
                (state === "pressed" && style === "unselected")
              ? "text-[color:var(--typecontextualon-surface-cont)]"
              : "text-[color:var(--typecontextualon-primary-cont)]"
          }`}
        >
          {text}
        </div>
        {["selected-trailing-icon", "unselected-trailing-icon"].includes(style) && (
          <div className="w-[24px] mt-[-2.00px] h-[24px] mb-[-2.00px] relative">
            <div
              className={`w-[20px] left-[2px] flex flex-col items-center top-[2px] gap-[8px] p-[8px] h-[20px] rounded-[40px] justify-center relative ${
                state === "disabled"
                  ? "bg-[color:var(--backgroundcontextualon-surface-cont)]"
                  : "bg-[color:var(--backgroundcontextualsurface-cont)]"
              }`}
            >
              <div
                className={`[font-family:'Inter',Helvetica] w-fit mt-[-3.75px] tracking-[0.24px] text-[12px] mr-[-2.25px] ml-[-2.25px] font-semibold text-center whitespace-nowrap mb-[-1.75px] leading-[18px] relative ${
                  state === "disabled"
                    ? "text-[color:var(--typecontextualdisabled)]"
                    : "text-[color:var(--typeneutralhigh-emphasis)]"
                }`}
              >
                2
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

FilterChip.propTypes = {
  text: PropTypes.string,
  style: PropTypes.oneOf([
    "unselected-trailing-icon",
    "selected-leading-icon",
    "unselected",
    "selected",
    "selected-trailing-icon",
    "unselected-leading-icon",
  ]),
  isSelected: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "pressed", "default"]),
};
