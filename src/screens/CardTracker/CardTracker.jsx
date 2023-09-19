import React from "react";
import { MobilePageHeader } from "../../components/MobilePageHeader";
import { CreditCardSimpleOutline } from "../../icons/CreditCardSimpleOutline";
import { EnvelopeOpenOutline } from "../../icons/EnvelopeOpenOutline";
import { HomeOutline } from "../../icons/HomeOutline";

export const CardTracker = ({ onClose }) => {


  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-[#131313] bg-opacity-1 z-50">
      <div className="bg-[color:var(--backgroundneutralsecondary)]">
        <div className="flex flex-col w-[328px] h-[396px] items-start gap-[48px] pt-[8px] pb-0 px-0 absolute top-[104px] left-[16px]">
          <div className="flex flex-col items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="absolute w-[2px] h-[48px] top-[25px] left-[11px] bg-[color:var(--backgroundsuccessprimary)]" />
            <div className="flex items-center gap-[16px] px-0 py-[4px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start gap-[16px] relative flex-1 grow">
                <img className="relative w-[24px] h-[24px]" alt="Check circle" src="/img/checkcircle-1.svg" />
                <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[color:var(--typeneutralhigh-emphasis)] text-[14px] tracking-[0] leading-[22px]">
                    Application has been processed
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[16px] px-0 py-[4px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start gap-[16px] relative flex-1 grow">
                <div className="h-[109px] top-[20px] absolute w-[2px] left-[11px] bg-[color:var(--backgroundsuccessprimary)]" />
                <img className="relative w-[24px] h-[24px]" alt="Check circle" src="/img/checkcircle.svg" />
                <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[color:var(--typeneutralhigh-emphasis)] text-[14px] tracking-[0] leading-[22px]">
                    Your Gold is securely stored in Indian Bank&#39;s vault
                  </p>
                  <p className="w-[249px] font-[number:var(--body-small-low-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-small-low-emphasis-font-size)] tracking-[var(--body-small-low-emphasis-letter-spacing)] leading-[var(--body-small-low-emphasis-line-height)] relative [font-family:var(--body-small-low-emphasis-font-family)] [font-style:var(--body-small-low-emphasis-font-style)]">
                    Indian Bank, BTM Layout, #321 street, Bangalore - 560066.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[88px] top-[179px] absolute w-[2px] left-[11px] bg-[color:var(--backgroundsuccessprimary)]" />
            <div className="flex items-center gap-[16px] px-0 py-[4px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start gap-[16px] relative flex-1 grow ">
                {/* <CreditCardSimpleOutline className="!relative !w-[24px] !h-[24px]" /> */}
                <img className="relative w-[24px] h-[24px]" alt="Check circle" src="/img/checkcircle.svg" />
                <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                  <p className="self-stretch mt-[-1.00px] font-[number:var(--body-medium-high-emphasis-font-weight)] text-[color:var(--typeneutralmedium-emphasis)] text-[length:var(--body-medium-high-emphasis-font-size)] tracking-[var(--body-medium-high-emphasis-letter-spacing)] leading-[var(--body-medium-high-emphasis-line-height)] relative [font-family:var(--body-medium-high-emphasis-font-family)] [font-style:var(--body-medium-high-emphasis-font-style)]">
                    Credit Card has been issued
                  </p>
                  <p className="self-stretch font-[number:var(--body-small-low-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-small-low-emphasis-font-size)] tracking-[var(--body-small-low-emphasis-letter-spacing)] leading-[var(--body-small-low-emphasis-line-height)] relative [font-family:var(--body-small-low-emphasis-font-family)] [font-style:var(--body-small-low-emphasis-font-style)]">
                    You can start using your card virtually even before the card arrives.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[16px] px-0 py-[4px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start gap-[16px] relative flex-1 grow">
              <img className="relative w-[24px] h-[24px]" alt="Check circle" src="/img/checkcircle.svg" />
                {/* <EnvelopeOpenOutline className="!relative !w-[24px] !h-[24px]" /> */}
                <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                  <p className="self-stretch mt-[-1.00px] font-[number:var(--body-medium-high-emphasis-font-weight)] text-[color:var(--typeneutralmedium-emphasis)] text-[length:var(--body-medium-high-emphasis-font-size)] tracking-[var(--body-medium-high-emphasis-letter-spacing)] leading-[var(--body-medium-high-emphasis-line-height)] relative [font-family:var(--body-medium-high-emphasis-font-family)] [font-style:var(--body-medium-high-emphasis-font-style)]">
                    Credit card has been dispatched
                  </p>
                  <p className="w-[284px] font-[number:var(--body-small-low-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-small-low-emphasis-font-size)] tracking-[var(--body-small-low-emphasis-letter-spacing)] leading-[var(--body-small-low-emphasis-line-height)] relative [font-family:var(--body-small-low-emphasis-font-family)] [font-style:var(--body-small-low-emphasis-font-style)]">
                    Your card will be delivered in 8-10 working days
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[16px] px-0 py-[4px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start gap-[16px] relative flex-1 grow">
                <div className="h-[65px] top-[-45px] absolute w-[2px] left-[11px] bg-[color:var(--borderneutralprimary)]" />
                <HomeOutline className="!relative !w-[24px] !h-[24px]" />
                <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                  <p className="self-stretch mt-[-1.00px] font-[number:var(--body-medium-high-emphasis-font-weight)] text-[color:var(--typeneutralmedium-emphasis)] text-[length:var(--body-medium-high-emphasis-font-size)] tracking-[var(--body-medium-high-emphasis-letter-spacing)] leading-[var(--body-medium-high-emphasis-line-height)] relative [font-family:var(--body-medium-high-emphasis-font-family)] [font-style:var(--body-medium-high-emphasis-font-style)]">
                    Credit card has been delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobilePageHeader
          className="!fixed !left-0 !top-0"
          label="Card Tracking"
          mobileHeaderClassName="!border-[color:var(--bordercontextualon-surface-cont)] ![border-bottom-style:solid] !border-b"
          refreshPage={false}
          trailingIcon1={false}
          trailingIcon2={false}
          onclose={onClose}
        />
      </div>
    </div>
  );
};
