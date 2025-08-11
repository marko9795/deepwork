import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface CircularProgressProps {
  progress: number; // 0 to 1
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  backgroundColorDark?: string;
  animated?: boolean;
}

export function CircularProgress({ 
  progress, 
  size = 300, 
  strokeWidth = 8, 
  color = '#6366f1', 
  backgroundColor = '#e5e7eb',
  backgroundColorDark = '#374151',
  animated = true 
}: CircularProgressProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const prevProgressRef = useRef(progress);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  useEffect(() => {
    if (pathRef.current && animated) {
      const from = prevProgressRef.current * circumference;
      const to = progress * circumference;

      animate(pathRef.current, {
        strokeDashoffset: [circumference - from, circumference - to],
        duration: 800,
        ease: 'out-cubic',
      });

      prevProgressRef.current = progress;
    }
  }, [progress, circumference, animated]);

  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
          className="dark:hidden"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={backgroundColorDark}
          strokeWidth={strokeWidth}
          fill="none"
          className="hidden dark:block"
        />
        
        {/* Progress circle */}
        <path
          ref={pathRef}
          d={`M ${center} ${strokeWidth / 2}
             A ${radius} ${radius} 0 1 1 ${center - 0.01} ${strokeWidth / 2}`}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animated ? circumference - (prevProgressRef.current * circumference) : circumference - (progress * circumference)}
        />
      </svg>
    </div>
  );
}