import * as React from "react"
import IconType from "./types/IconType"
const CompletedTasksSVG: React.FC<IconType>  = ({width, height,color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className="w-6 h-6"
    fill= {color}
    viewBox="0 0 48 48"
  >
    <g id="SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}"
          }
        </style>
      </defs>
      <path
        d="M43.272 18.654A20 20 0 0 1 44 24h0a20 20 0 1 1-8.678-16.487"
        className="a"
      />
      <path d="m13.873 24.204 7.295 7.376 22.34-23.092" className="a" />
    </g>
  </svg>
)
export default  CompletedTasksSVG
