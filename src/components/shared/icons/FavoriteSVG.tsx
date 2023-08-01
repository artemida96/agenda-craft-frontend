import * as React from "react";
import IconType from "./types/IconType";
const FavoriteSVG: React.FC<IconType> = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    className="w-6 h-6"
    fill={color}
    viewBox="0 0 512 512"
    stroke={color}
  >
    <path d="m512 198.525-184.083-15.806L256 12.53l-71.917 170.189L0 198.525l139.637 120.988L97.783 499.47 256 404.056l158.217 95.414-41.854-179.957z" />
  </svg>
);
export default FavoriteSVG;
