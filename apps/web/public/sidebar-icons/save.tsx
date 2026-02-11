import React from "react";

function SaveIcon({ className }: { className: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`-ms-0.5 ${className}`}
    >
      <g filter="url(#filter0_d_328_37)">
        <path
          d="M25.3199 24.988L14.972 14.309L4.625 24.992V3.125C4.625 2.46196 4.88846 1.82608 5.3573 1.35724C5.82614 0.888398 6.46196 0.625 7.125 0.625H22.984C23.6047 0.625265 24.2 0.872041 24.6388 1.31104C25.0776 1.75003 25.3241 2.3453 25.3241 2.966L25.3199 24.988Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeMiterlimit="10"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_328_37"
          x="0"
          y="0"
          width="29.9491"
          height="34.5352"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_328_37"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_328_37"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SaveIcon;
