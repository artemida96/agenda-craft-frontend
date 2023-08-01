import * as React from "react"
import IconType from "./types/IconType"
const LogoutSVG:  React.FC<IconType>  = ({width, height,color}) => (
  <svg
    width={width}
    height={height}
    className="w-6 h-6"
    fill= {color}
    viewBox="0 0 24 24"
  >
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 12h10m0 0-3-3m3 3-3 3"
    />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 12a8 8 0 0 1 8-8m0 16a7.985 7.985 0 0 1-6.245-3"
    />
  </svg>
)
export default LogoutSVG;
