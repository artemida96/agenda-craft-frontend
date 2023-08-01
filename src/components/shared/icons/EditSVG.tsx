import * as React from "react"
import IconType from "./types/IconType";
const EditSVG: React.FC<IconType>  = ({width, height,color}) => (
  <svg
  width={width}
    height={height}
    className="w-6 h-6"
    fill= {color}
    viewBox="0 0 24 24"
  >
    <path
      fill="#000"
      d="M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
)
export default EditSVG;
