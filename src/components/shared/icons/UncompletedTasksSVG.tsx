

import * as React from "react"
import IconType from "./types/IconType"
const UncompletedTasksSVG:  React.FC<IconType>  = ({width, height,color}) => (
  <svg
    width={width}
    height={height}
    className="w-6 h-6"
    fill= {color}
    viewBox="0 0 36 36"
  >
    <title>{"error-standard-line"}</title>
    <circle
      cx={18}
      cy={26.06}
      r={1.33}
      className="clr-i-outline clr-i-outline-path-1"
    />
    <path
      d="M18 22.61a1 1 0 0 1-1-1v-12a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1Z"
      className="clr-i-outline clr-i-outline-path-2"
    />
    <path
      d="M18 34a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4Z"
      className="clr-i-outline clr-i-outline-path-3"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
)
export default UncompletedTasksSVG;