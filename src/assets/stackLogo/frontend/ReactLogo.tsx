import { Vector } from "../../../interfaces/Vector"

export const ReactLogo = ({color, size}: Vector) => {
  return (
    <div style={{width: size}}>
      <svg version="1.1" width="100%" viewBox="0 0 184 166">
        <g transform="translate(92 83)">
          <circle fill={color} r="16" />
          <g fill="none" stroke={color} strokeWidth="8">
            <ellipse rx="84" ry="32" />
            <ellipse rx="84" ry="32" transform="rotate(120)" />
            <ellipse rx="84" ry="32" transform="rotate(60)" />
          </g>
        </g>
      </svg>
    </div>
  )
}
