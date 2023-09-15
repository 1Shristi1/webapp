import React from "react";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { Component } from "../Component/Component";

export const ManageCard = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-[8px] w-full h-[112px] p-[16px] relative bg-[color:var(--backgroundcontextualsurface-cont)] rounded-[16px] overflow-hidden">
      <img className="absolute w-[126px] h-[181px] top-[-22px] right-[16px]" alt="Frame" src="/img/frame-48095659.svg" />
      <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start justify-center gap-[4px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-large-high-emphasis-font-family)] font-[number:var(--body-large-high-emphasis-font-weight)] text-[color:var(--typeneutralmedium-emphasis)] text-[length:var(--body-large-high-emphasis-font-size)] tracking-[var(--body-large-high-emphasis-letter-spacing)] leading-[var(--body-large-high-emphasis-line-height)] whitespace-nowrap [font-style:var(--body-large-high-emphasis-font-style)]">
            Manage my card
          </div>
          <Component property1="frame-48095623" />
        </div>
        <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-medium-medium-emphasis-font-family)] font-[number:var(--body-medium-medium-emphasis-font-weight)] text-[color:var(--typebrandtertiary)] text-[length:var(--body-medium-medium-emphasis-font-size)] text-right tracking-[var(--body-medium-medium-emphasis-letter-spacing)] leading-[var(--body-medium-medium-emphasis-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-emphasis-font-style)]">
            Manage
          </div>
          <ArrowRight1 className="!relative !w-[16px] !h-[16px]" color="#FFE3B6" />
        </div>
      </div>
    </div>
  );
};
