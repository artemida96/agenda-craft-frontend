import IconType from "./types/IconType";

const FavoriteTasksSVG:  React.FC<IconType>  = ({width, height,color})  => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="w-6 h-6"
      fill= {color}
      viewBox="0 0 48 48"
    >
<defs>
<style>
  {
    ".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}"
  }
</style>
</defs>
<path
d="m40.6 27.52-3.6 2.6a.33.33 0 0 0-.12.38l1.36 4.21a.51.51 0 0 1-.79.58l-3.58-2.6a.35.35 0 0 0-.41 0l-3.58 2.6a.52.52 0 0 1-.73-.12.53.53 0 0 1-.07-.46l1.37-4.21a.33.33 0 0 0-.12-.38l-3.58-2.6a.52.52 0 0 1-.11-.73.51.51 0 0 1 .41-.21h4.43a.33.33 0 0 0 .32-.24l1.37-4.21a.52.52 0 0 1 1 0l1.36 4.21a.35.35 0 0 0 .33.24h4.43a.52.52 0 0 1 .33.94ZM41.68 13H24.77c-2-.1-5.93-4.23-8.19-4.23h-9.9A2.18 2.18 0 0 0 4.5 11h0v7.29h39v-3.42A1.83 1.83 0 0 0 41.68 13Z"
className="cls-1"
/>
<path
d="M43.5 18.28h-39V37a2.18 2.18 0 0 0 2.17 2.2h34.65A2.18 2.18 0 0 0 43.5 37h0Z"
className="cls-1"
/>
</svg>)

export default FavoriteTasksSVG;