import { ComponentProps, forwardRef } from "react";

export const ColdWaterIcon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  ({ width = 40, height = 40, ...props }, ref) => {
    return (
      <>
        <svg
          ref={ref}
          width={width}
          height={height}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M20 30V27.5C20.9665 27.4165 21.8726 26.9946 22.5586 26.3086C23.2446 25.6226 23.6665 24.7165 23.75 23.75H26.25C26.1692 25.3815 25.4848 26.9247 24.3297 28.0797C23.1747 29.2348 21.6315 29.9192 20 30Z"
            fill="#2B6DB0"
          />
          <path
            d="M20 35C17.0174 34.9964 14.1581 33.8099 12.0491 31.7009C9.94007 29.5919 8.75364 26.7326 8.75 23.75C8.81728 21.5572 9.46142 19.4208 10.6175 17.5563L18.9412 4.29626C19.0615 4.12752 19.2203 3.98996 19.4045 3.89505C19.5886 3.80013 19.7928 3.75061 20 3.75061C20.2072 3.75061 20.4114 3.80013 20.5955 3.89505C20.7797 3.98996 20.9385 4.12752 21.0588 4.29626L29.3462 17.4913C30.5217 19.3731 31.1785 21.5324 31.25 23.75C31.2464 26.7326 30.0599 29.5919 27.9509 31.7009C25.8419 33.8099 22.9826 34.9964 20 35ZM20 7.31001L12.7725 18.82C11.8412 20.3013 11.3162 22.0016 11.25 23.75C11.25 26.0707 12.1719 28.2962 13.8128 29.9372C15.4538 31.5781 17.6794 32.5 20 32.5C22.3206 32.5 24.5462 31.5781 26.1872 29.9372C27.8281 28.2962 28.75 26.0707 28.75 23.75C28.6787 21.9771 28.1406 20.2545 27.19 18.7563L20 7.31001Z"
            fill="#2B6DB0"
          />
        </svg>
      </>
    );
  }
);
