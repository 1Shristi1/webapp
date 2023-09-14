/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLeftOutline } from "../../icons/ArrowLeftOutline";
import { NotificationBellOutline1 } from "../../icons/NotificationBellOutline1";
import { SettingsGearOutline } from "../../icons/SettingsGearOutline";
import { TimeBar } from "../TimeBar";

export const MobilePageHeader = ({
  refreshPage = true,
  label = "Gold Cards",
  showTitle = true,
  trailingIcon2 = true,
  trailingIcon1 = true,
  navIcon = true,
  className,
  mobileHeaderClassName,
  onclose
}) => {
  return (
    <div className={`inline-flex flex-col items-start pt-[10px] relative ${className}`}>
      {/* <TimeBar
        className="!bg-[color:var(--backgroundcontextualsurface)] !relative"
        symbols="/img/symbols-1.svg"
        timeClassName="!text-[color:var(--typecontextualon-surface)]"
      /> */}
      <div
        className={`flex w-[360px] items-start justify-between pt-[20px] pb-[8px] px-[16px] relative flex-[0_0_auto] bg-[color:var(--backgroundcontextualsurface)] ${mobileHeaderClassName}`}
      >
        <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
          {navIcon && (
            <div className="inline-flex items-center justify-center p-[4px] relative flex-[0_0_auto] bg-[color:var(--backgroundcontextualsurface-cont)] rounded-[24px]">
               <button
                            onClick={onclose}
                            className="bg-transparent border-none"
                          >
                            <ArrowLeftOutline className="!relative !w-[24px] !h-[24px]" color="white" />
                          </button>
            </div>
          )}

          {showTitle && (
            <div className="relative w-fit [font-family:var(--title-2-font-family)] font-[number:var(--title-2-font-weight)] text-[color:var(--typecontextualon-surface)] text-[length:var(--title-2-font-size)] tracking-[var(--title-2-letter-spacing)] leading-[var(--title-2-line-height)] whitespace-nowrap [font-style:var(--title-2-font-style)]">
              {label}
            </div>
          )}
        </div>
        <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
          {trailingIcon1 && (
            <div className="inline-flex items-center justify-center p-[4px] relative flex-[0_0_auto] bg-[color:var(--backgroundcontextualsurface-cont)] rounded-[24px]">
              <SettingsGearOutline className="!relative !w-[24px] !h-[24px]" color="white" />
            </div>
          )}

          {trailingIcon2 && (
            <div className="inline-flex items-center justify-center p-[4px] relative flex-[0_0_auto] bg-[color:var(--backgroundcontextualsurface-cont)] rounded-[24px]">
              <NotificationBellOutline1 className="!relative !w-[24px] !h-[24px]" color="white" />
            </div>
          )}
        </div>
      </div>
      {refreshPage && (
        <img
          className="relative w-[360px] flex-[0_0_auto]"
          alt="Claws for refresh"
          src="/img/claws-for-refresh-affordance.svg"
        />
      )}
    </div>
  );
};

MobilePageHeader.propTypes = {
  refreshPage: PropTypes.bool,
  label: PropTypes.string,
  showTitle: PropTypes.bool,
  trailingIcon2: PropTypes.bool,
  trailingIcon1: PropTypes.bool,
  navIcon: PropTypes.bool,
};
