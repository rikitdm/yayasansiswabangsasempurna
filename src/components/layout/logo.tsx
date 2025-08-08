import { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      {/* Blue top bar */}
      <polygon points="110,60 280,60 220,120 50,120" fill="#1a237e" />
      
      {/* Yellow middle bar */}
      <polygon points="50,140 280,140 220,200 0,200" fill="#ffd600" />
      
      {/* Teal bottom bars */}
      <polygon points="220,220 450,220 390,280 160,280" fill="#00897b" />
      <polygon points="160,300 390,300 330,360 100,360" fill="#00897b" />
      
      {/* Gradient face shape */}
      <path
        d="M250,380 C180,380 120,340 85,280 L85,420 C85,420 165,460 250,460 C335,460 415,420 415,420 L415,280 C380,340 320,380 250,380 Z"
        fill="url(#grad1)"
      />
      
      {/* White face details */}
      <path
        d="M170,380 C200,360 220,350 250,350 C280,350 300,360 330,380 C300,400 280,410 250,410 C220,410 200,400 170,380 Z"
        fill="white"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a237e" stopOpacity="1" />
          <stop offset="100%" stopColor="#00897b" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}