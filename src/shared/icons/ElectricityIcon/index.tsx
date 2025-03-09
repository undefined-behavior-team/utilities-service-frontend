import { ComponentProps, forwardRef } from "react";

export const ElectricityIcon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  ({ width = 40, height = 40, ...props }) => {
    return (
      <>
        <svg
          width={width}
          height={height}
          viewBox="0 0 398.528 398.528"
          fill="#e1ff00"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          {...props}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                fill="#ffff00"
                d="M315.232,9.015C311.883,3.276,305.681,0,298.244,0h-91.308c-10.9,0-22.224,7.113-26.93,16.924 L83.17,218.041c-3.162,6.56-2.967,13.518,0.471,19.037c3.463,5.568,9.592,8.811,16.859,8.966l71.662,0.902l-51.877,129.675 c-1.276,3.235-3.959,10.014,0.821,16.981c2.089,3.056,5.674,4.926,9.364,4.926h0.837c6.999,0,11.217-5.308,13.241-7.868 L312.176,180.17c7.153-8.966,4.202-17.013,3.121-19.354c-1.122-2.243-5.625-9.592-17.046-9.592h-53.34l69.8-122.985 C318.37,21.752,318.573,14.729,315.232,9.015z"
              />
            </g>
          </g>
        </svg>
      </>
    );
  }
);

/*

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <path style="fill:#ffff00;" d="M315.232,9.015C311.883,3.276,305.681,0,298.244,0h-91.308c-10.9,0-22.224,7.113-26.93,16.924 L83.17,218.041c-3.162,6.56-2.967,13.518,0.471,19.037c3.463,5.568,9.592,8.811,16.859,8.966l71.662,0.902l-51.877,129.675 c-1.276,3.235-3.959,10.014,0.821,16.981c2.089,3.056,5.674,4.926,9.364,4.926h0.837c6.999,0,11.217-5.308,13.241-7.868 L312.176,180.17c7.153-8.966,4.202-17.013,3.121-19.354c-1.122-2.243-5.625-9.592-17.046-9.592h-53.34l69.8-122.985 C318.37,21.752,318.573,14.729,315.232,9.015z"/> </g> </g>

*/
