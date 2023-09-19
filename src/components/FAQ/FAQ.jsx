import React from "react";
import { CaretRightOutline } from "../../icons/CaretRightOutline";

export const FAQ= () => {
  return (
    <div className="inline-flex flex-col items-start gap-[16px] w-full relative">
      <div className="flex w-full items-center justify-between py-0 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
          <img className="relative w-[24px] h-[24px]" alt="Question" src="/img/question.svg" />
          <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-large-high-emphasis-font-family)] font-[number:var(--body-large-high-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-large-high-emphasis-font-size)] tracking-[var(--body-large-high-emphasis-letter-spacing)] leading-[var(--body-large-high-emphasis-line-height)] whitespace-nowrap [font-style:var(--body-large-high-emphasis-font-style)]">
            Need Help?
          </div>
        </div>
        <div className="inline-flex items-center justify-end gap-[8px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-medium-high-emphasis-font-family)] font-[number:var(--body-medium-high-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-medium-high-emphasis-font-size)] tracking-[var(--body-medium-high-emphasis-letter-spacing)] leading-[var(--body-medium-high-emphasis-line-height)] whitespace-nowrap [font-style:var(--body-medium-high-emphasis-font-style)]">
            See all
          </div>
          <CaretRightOutline className="!relative !w-[16px] !h-[16px]" color="#D8D8D8" />
        </div>
      </div>
      <div className="inline-flex flex-col items-start py-0 relative flex-[0_0_auto] w-full">
        <div className="flex flex-wrap justify-between w-full items-center gap-[32px] pl-0 pr-[16px] py-[16px] relative border-b [border-bottom-style:solid] border-[color:var(--bordercontextualon-surface-cont)]">
          <div className="flex items-center gap-[8px] relative">
            <div className="relative flex-1 mt-[-1.00px] [font-family:var(--body-medium-medium-emphasis-font-family)] font-[number:var(--body-medium-medium-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-medium-medium-emphasis-font-size)] tracking-[var(--body-medium-medium-emphasis-letter-spacing)] leading-[var(--body-medium-medium-emphasis-line-height)] [font-style:var(--body-medium-medium-emphasis-font-style)]">
              How to make repayment?
            </div>
          </div>
          <CaretRightOutline className="!relative !w-[16px] !h-[16px] !mr-[-16.00px]" color="#F2F2F2" />
        </div>
        <div className="flex flex-wrap justify-between  w-full items-center gap-[32px] pl-0 pr-[16px] py-[16px] relative border-b [border-bottom-style:solid] border-[color:var(--bordercontextualon-surface-cont)]">
          <div className="flex items-center gap-[8px] relative">
            <p className="relative flex-1 mt-[-1.00px] [font-family:var(--body-medium-medium-emphasis-font-family)] font-[number:var(--body-medium-medium-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-medium-medium-emphasis-font-size)] tracking-[var(--body-medium-medium-emphasis-letter-spacing)] leading-[var(--body-medium-medium-emphasis-line-height)] [font-style:var(--body-medium-medium-emphasis-font-style)]">
              How to set ATM/POS PIN?
            </p>
          </div>
          <CaretRightOutline className="!relative !w-[16px] !h-[16px] !mr-[-16.00px]" color="#F2F2F2" />
        </div>
        <div className="flex flex-wrap justify-between w-full items-center gap-[32px] pl-0 pr-[16px] py-[16px] relative">
          <div className="flex items-center gap-[8px] relative">
            <p className="relative flex-1 mt-[-1.00px] [font-family:var(--body-medium-medium-emphasis-font-family)] font-[number:var(--body-medium-medium-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-medium-medium-emphasis-font-size)] tracking-[var(--body-medium-medium-emphasis-letter-spacing)] leading-[var(--body-medium-medium-emphasis-line-height)] [font-style:var(--body-medium-medium-emphasis-font-style)]">
              How to set transaction limit?
            </p>
          </div>
          <CaretRightOutline className="!relative !w-[16px] !h-[16px] !mr-[-16.00px]" color="#F2F2F2" />
        </div>
      </div>
    </div>
  );
};
