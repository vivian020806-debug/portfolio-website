export function HandwrittenTitle() {
  return (
    <svg
      className="handwritten-title"
      viewBox="0 0 1120 300"
      role="img"
      aria-label="portfolio"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <mask id="handwriting-reveal" maskUnits="userSpaceOnUse">
          <rect width="1120" height="300" fill="black" />
          <g className="handwriting-mask" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
            <path pathLength="1" d="M92 92 L92 260 M92 132 C119 96 176 98 185 139 C194 183 149 211 99 190" />
            <path pathLength="1" d="M221 162 C224 111 302 104 314 155 C323 201 289 226 254 216 C225 208 215 185 221 162" />
            <path pathLength="1" d="M349 118 L349 215 M351 151 C370 119 402 111 424 126" />
            <path pathLength="1" d="M469 80 L469 204 C469 222 488 226 508 214 M438 125 L510 125" />
            <path pathLength="1" d="M560 213 L560 92 C560 61 597 55 620 73 M530 126 L609 126" />
            <path pathLength="1" d="M642 162 C645 111 723 104 735 155 C744 201 710 226 675 216 C646 208 636 185 642 162" />
            <path pathLength="1" d="M777 67 C771 112 775 165 779 215" />
            <path pathLength="1" d="M831 124 L831 213 M829 83 L830 84" />
            <path pathLength="1" d="M875 162 C878 111 956 104 968 155 C977 201 943 226 908 216 C879 208 869 185 875 162" />
          </g>
        </mask>
      </defs>

      <text className="handwritten-word" x="560" y="222" textAnchor="middle" mask="url(#handwriting-reveal)">
        portfolio
      </text>
    </svg>
  );
}
