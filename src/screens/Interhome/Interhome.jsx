import React, { useState } from "react";
import { FilterChip } from "../../components/FilterChip";
import { SectionalButton } from "../../components/SectionalButton";
// import { TimeBar } from "../../components/TimeBar";
import { ArrowDownOutline1 } from "../../icons/ArrowDownOutline1";
import { ArrowLeftOutline1 } from "../../icons/ArrowLeftOutline1";
import { CaretRightOutline } from "../../icons/CaretRightOutline";
import { GoldJewelsOutline } from "../../icons/GoldJewelsOutline";
import { CardTracker } from '../CardTracker';

export const Interhome = () => {
  const [isCardTrackingVisible, setIsCardTrackingVisible] = useState(false);

  const handleCardTrackingClick = () => {
    setIsCardTrackingVisible(true);
  };

  const handleCloseCardTracking = () => {
    setIsCardTrackingVisible(false);
  };

  const cardTrackerStyles = {
    position: 'fixed',
    top: '0',
    right: isCardTrackingVisible ? '0' : '-100%',
    width: '100%',
    height: '100%',
    backgroundColor: '#131313',
    opacity: '1',
    transition: 'right 0.3s ease-in-out',
    zIndex: '50',
  };

  return (
    <div className="bg-[#131313] flex flex-row justify-center w-full">
      <div className="bg-[color:var(--backgroundcontextualsurface)] w-[360px] h-[1067px] relative">
        <div className="absolute w-[360px] h-[790px] top-0 left-0">
          <div className="inline-flex flex-col items-start gap-[16px] px-0 py-[12px] absolute top-[80px] left-0">
            <div className="flex items-center gap-[8px] px-[16px] py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] [font-family:var(--title-1-font-family)] font-[number:var(--title-1-font-weight)] text-[color:var(--typecontextualhighlight)] text-[length:var(--title-1-font-size)] tracking-[var(--title-1-letter-spacing)] leading-[var(--title-1-line-height)] [font-style:var(--title-1-font-style)]">
                Hello Rajeshwar
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-[32px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full flex-[0_0_auto]"
                  alt="Manage card"
                  src="/img/manage-card.png"
                />
                <div className="flex w-[328px] items-start gap-[12px] relative flex-[0_0_auto]">
                  <SectionalButton
                    buttonLabelClassName="!text-[color:var(--typeneutralmedium-emphasis)]"
                    className="!flex-1 !grow !w-[unset]"
                    icon={<GoldJewelsOutline className="!relative !w-[24px] !h-[24px]" color="#191307" />}
                    label={
                      <>
                        View <br />
                        Jewels
                      </>
                    }
                    selected={false}
                    state="enabled"
                  />
                  <SectionalButton
                    className="!flex-1 !grow !w-[unset]"
                    icon={<ArrowDownOutline1 className="!relative !w-[24px] !h-[24px]" color="#191307" />}
                    label="Withdraw"
                    selected={false}
                    state="enabled"
                  />
                </div>
                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center gap-[10px] relative flex-[0_0_auto]">
                      <div className="flex w-[328px] items-center justify-between p-[16px] relative flex-[0_0_auto] bg-[color:var(--backgroundneutraltertiary)] rounded-[16px_16px_0px_0px]">
                        <div className="flex w-[262px] items-center gap-[12px] relative">
                          <div className="relative w-[42px] h-[42px]">
                            <div className="relative w-[37px] h-[34px] top-[5px] left-[3px]">
                              <div className="absolute w-[34px] h-[19px] top-[13px] left-[2px] bg-[#bbf4d9]" />
                              <img
                                className="absolute w-[36px] h-[33px] top-px left-px"
                                alt="Vector"
                                src="/img/vector-1.svg"
                              />
                              <img
                                className="absolute w-[37px] h-[24px] top-0 left-0"
                                alt="Vector"
                                src="/img/vector.svg"
                              />
                            </div>
                          </div>
                          <div className="inline-flex flex-col items-start justify-center gap-[4px] relative flex-[0_0_auto]">
                            <p className="w-[202px] font-medium text-[color:var(--typecontextualon-surface-cont)] relative mt-[-1.00px] [font-family:'Inter',Helvetica] text-[14px] tracking-[0] leading-[22px]">
                              Your credit card has been dispatched
                            </p>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={handleCardTrackingClick}
                            className="bg-transparent border-none"
                          >
                            <CaretRightOutline
                              className="!relative !w-[16px] !h-[16px]"
                              color="#F2F2F2"
                            />
                          </button>

                          <div style={cardTrackerStyles}>
                            {isCardTrackingVisible && (
                              <CardTracker onClose={handleCloseCardTracking} />
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="flex w-[328px] h-[40px] items-center justify-center gap-[10px] px-[16px] py-[8px] relative bg-[color:var(--backgroundcontextualon-surface-cont)] rounded-[0px_0px_16px_16px]">
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <p className="relative w-fit mt-[-1.00px] [font-family:var(--body-small-medium-emphasis-font-family)] font-[number:var(--body-small-medium-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-small-medium-emphasis-font-size)] tracking-[var(--body-small-medium-emphasis-letter-spacing)] leading-[var(--body-small-medium-emphasis-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-emphasis-font-style)]">
                        Expected Card Delivery by 12 Sep
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[360px] items-start gap-[16px] px-[16px] py-0 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                  <img className="relative w-[24px] h-[24px]" alt="Gift" src="/img/gift.svg" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-large-high-emphasis-font-family)] font-[number:var(--body-large-high-emphasis-font-weight)] text-[color:var(--typeneutrallow-emphasis)] text-[length:var(--body-large-high-emphasis-font-size)] tracking-[var(--body-large-high-emphasis-letter-spacing)] leading-[var(--body-large-high-emphasis-line-height)] whitespace-nowrap [font-style:var(--body-large-high-emphasis-font-style)]">
                    Rewards and Cashback
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="relative w-[328px] h-[54px] bg-[color:var(--backgroundneutralsecondary-inverse)] rounded-[16px_16px_0px_0px]">
                      <div className="flex w-[296px] justify-between top-[16px] left-[16px] items-center relative">
                        <div className="flex w-[296px] items-center gap-[12px] relative">
                          <div className="inline-flex items-center gap-[80px] relative flex-[0_0_auto]">
                            <div className="w-fit font-semibold text-[color:var(--typeneutralhigh-emphasis)] whitespace-nowrap relative mt-[-1.00px] [font-family:'Inter',Helvetica] text-[14px] tracking-[0] leading-[22px]">
                              Total Cashback
                            </div>
                            <div className="w-[85px] font-semibold text-[color:var(--typeneutralhigh-emphasis)] text-right relative mt-[-1.00px] [font-family:'Inter',Helvetica] text-[14px] tracking-[0] leading-[22px]">
                              ₹ 0
                            </div>
                          </div>
                        </div>
                        <CaretRightOutline className="!relative !w-[16px] !h-[16px] !ml-[-16px]" color="#A6A6A6" />
                      </div>
                    </div>
                    <div className="flex w-[328px] items-center justify-center gap-[10px] pt-[8px] pb-[12px] px-[16px] relative flex-[0_0_auto] bg-[#eefcf5] rounded-[0px_0px_16px_16px]">
                      <div className="inline-flex items-end justify-center gap-[8px] relative flex-[0_0_auto] ml-[-3.00px] mr-[-3.00px]">
                        <img className="relative w-[24px] h-[24px]" alt="Hand coins" src="/img/handcoins.svg" />
                        <p className="relative w-fit [font-family:var(--body-small-medium-emphasis-font-family)] font-[number:var(--body-small-medium-emphasis-font-weight)] text-[#225b40] text-[length:var(--body-small-medium-emphasis-font-size)] tracking-[var(--body-small-medium-emphasis-letter-spacing)] leading-[var(--body-small-medium-emphasis-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-emphasis-font-style)]">
                          Make your first transaction to earn cash back
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[328px] items-center gap-[16px] px-[16px] py-[24px] relative flex-[0_0_auto] bg-[color:var(--backgroundneutralsecondary-inverse)] rounded-[16px] overflow-hidden">
                    <div className="absolute w-[264px] h-[264px] top-[23px] left-[123px] rotate-[-17.25deg]">
                      <div className="relative h-[264px] rounded-[262.02px]">
                        <div className="absolute w-[264px] h-[264px] top-0 left-0 rounded-[262.02px] overflow-hidden border-[0.52px] border-solid border-transparent backdrop-blur-[4.19px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.19px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgba(249,221,183,0),rgba(249,221,183,0.4)_52.29%,rgba(249,221,183,0)_100%)_1] [background:linear-gradient(180deg,rgba(249,221,183,0)_35.16%,rgba(249,221,183,0.2)_89.02%)]">
                          <div className="w-[52px] h-[52px] top-[-48px] left-[106px] rounded-[26.2px] blur-[56.6px] relative bg-[#ffe3b6]" />
                        </div>
                        <div className="absolute w-[224px] h-[224px] top-[37px] left-[20px] rounded-[262.02px] overflow-hidden border-[0.52px] border-solid border-transparent backdrop-blur-[4.19px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.19px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgba(249,221,183,0),rgba(249,221,183,0.4)_52.29%,rgba(249,221,183,0)_100%)_1] [background:linear-gradient(180deg,rgba(249,221,183,0)_29.06%,rgba(249,221,183,0.2)_89.02%)]">
                          <div className="relative w-[52px] h-[52px] top-[-57px] left-[86px] bg-[#ffe3b699] rounded-[26.2px] blur-[56.6px]" />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[color:var(--typeneutralhigh-emphasis)] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                        My Rewards
                      </div>
                      <p className="relative w-[148px] [font-family:var(--body-small-low-emphasis-font-family)] font-[number:var(--body-small-low-emphasis-font-weight)] text-[color:var(--typeneutralhigh-emphasis)] text-[length:var(--body-small-low-emphasis-font-size)] tracking-[var(--body-small-low-emphasis-letter-spacing)] leading-[var(--body-small-low-emphasis-line-height)] [font-style:var(--body-small-low-emphasis-font-style)]">
                        Win up to 2 gms <br />
                        of Gold by using your credit card
                      </p>
                    </div>
                    <img
                      className="absolute w-[213px] h-[213px] -top-px left-[143px] object-cover"
                      alt="Gift dynamic premium"
                      src="/img/gift-dynamic-premium.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[360px] items-start justify-between pt-[16px] pb-[8px] px-[16px] absolute top-[24px] left-0 bg-[color:var(--backgroundcontextualsurface)]">
            <div className="inline-flex gap-[12px] flex-[0_0_auto] items-center relative">
              <div className="inline-flex justify-center p-[4px] flex-[0_0_auto] bg-[color:var(--backgroundcontextualsurface-cont)] rounded-[24px] items-center relative">
                <ArrowLeftOutline1 className="!relative !w-[24px] !h-[24px]" color="white" />
              </div>
            </div>
            <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]" />
          </div>
          <FilterChip
            className="!absolute !left-[241px] !top-[40px]"
            isSelected={false}
            state="default"
            style="unselected"
            text="Need Help"
          />
          <div className="absolute w-[360px] h-[144px] top-0 left-0">
            <div className="w-[300px] h-[300px] top-[-309px] left-[28px] rounded-[150px] blur-[200px] relative bg-[color:var(--backgroundcontextualprimary-cont)]" />
          </div>
          {/* <TimeBar
            className="!absolute !left-0 !bg-[unset] !top-0"
            symbols="/img/symbols-1.svg"
            timeClassName="!text-[color:var(--typecontextualon-surface)]"
          /> */}
        </div>
        <img
          className="absolute w-[344px] h-[180px] top-[887px] left-[16px] object-cover"
          alt="Footerimage"
          src="/img/footerimage-1.png"
        />
      </div>
    </div>
  );
};
