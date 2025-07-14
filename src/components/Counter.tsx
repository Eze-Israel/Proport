// components/Counter.tsx
'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration?: number;
  label?: string;
  prefix?: string;
  suffix?: string;
}

export default function Counter({
  end,
  duration = 2,
  label,
  prefix = '',
  suffix = '',
}: CounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="flex flex-col items-center space-y-1">
      {inView && (
        <CountUp
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          className="md:text-4xl font-bold text-green-600 text-center"
        />
      )}
      {label && <span className="text-sm text-gray-600">{label}</span>}
    </div>
  );
}
