import React from 'react';

interface EvoluirLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showTagline?: boolean;
}

export const EvoluirLogo: React.FC<EvoluirLogoProps> = ({
  className = 'h-10',
  variant = 'dark',
  showTagline = true,
}) => {
  const textColor =
    variant === 'white'
      ? '#FFFFFF'
      : variant === 'light'
      ? '#F8FAFB'
      : '#063F82'; // Deep blue

  const subtextColor =
    variant === 'white' ? '#EAF6FB' : '#6B7C87'; // Muted grey-blue

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Exact Evoluir Multicolor Stylized Ring / Figures */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto aspect-square shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Símbolo Evoluir Clínica Integrada"
      >
        {/* Central harmony group - 7 figures holding hands */}
        <g transform="translate(50, 50)">
          {/* Figure 1 - Cyan (top) */}
          <g transform="rotate(0)">
            <circle cx="0" cy="-34" r="5.2" fill="#18C4D9" />
            <path
              d="M -7.5 -24 C -7.5 -24, 0 -28, 7.5 -24 C 5 -12, -5 -12, -7.5 -24 Z"
              fill="#18C4D9"
            />
          </g>

          {/* Figure 2 - Green (top right) */}
          <g transform="rotate(51.4)">
            <circle cx="0" cy="-34" r="5.2" fill="#58B957" />
            <path
              d="M -7.5 -24 C -7.5 -24, 0 -28, 7.5 -24 C 5 -12, -5 -12, -7.5 -24 Z"
              fill="#58B957"
            />
          </g>

          {/* Figure 3 - Yellow (right) */}
          <g transform="rotate(102.8)">
            <circle cx="0" cy="-34" r="5.2" fill="#FFD500" />
            <path
              d="M -7.5 -24 C -7.5 -24, 0 -28, 7.5 -24 C 5 -12, -5 -12, -7.5 -24 Z"
              fill="#FFD500"
            />
          </g>

          {/* Figure 4 - Orange (bottom right) */}
          <g transform="rotate(154.2)">
            <circle cx="0" cy="-34" r="5.2" fill="#F5842A" />
            <path
              d="M -7.5 -24 C -7.5 -24, 0 -28, 7.5 -24 C 5 -12, -5 -12, -7.5 -24 Z"
              fill="#F5842A"
            />
          </g>

          {/* Figure 5 - Magenta (bottom left) */}
          <g transform="rotate(205.7)">
            <circle cx="0" cy="-34" r="5.2" fill="#EC155A" />
            <path
              d="M -7.5 -24 C -7.5 -24, 0 -28, 7.5 -24 C 5 -12, -5 -12, -7.5 -24 Z"
              fill="#EC155A"
            />
          </g>

          {/* Figure 6 - Deep Blue (left) */}
          <g transform="rotate(257.1)">
            <circle cx="0" cy="-34" r="5.2" fill="#063F82" />
            <path
              d="M -7.5 -24 C -7.5 -24, 0 -28, 7.5 -24 C 5 -12, -5 -12, -7.5 -24 Z"
              fill="#063F82"
            />
          </g>

          {/* Figure 7 - Brand Blue (top left) */}
          <g transform="rotate(308.5)">
            <circle cx="0" cy="-34" r="5.2" fill="#1267B1" />
            <path
              d="M -7.5 -24 C -7.5 -24, 0 -28, 7.5 -24 C 5 -12, -5 -12, -7.5 -24 Z"
              fill="#1267B1"
            />
          </g>

          {/* Subtle inner connecting flower ring */}
          <circle cx="0" cy="0" r="14" stroke="#18C4D9" strokeWidth="2.5" strokeOpacity="0.4" strokeDasharray="3 3" />
        </g>
      </svg>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className="text-lg sm:text-xl font-extrabold tracking-wider font-['Manrope']"
          style={{ color: textColor }}
        >
          EVOLUIR
        </span>
        {showTagline && (
          <span
            className="text-[9px] sm:text-[10px] font-medium tracking-tight mt-0.5"
            style={{ color: subtextColor }}
          >
            clínica multidisciplinar integrada
          </span>
        )}
      </div>
    </div>
  );
};
