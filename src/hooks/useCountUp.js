// src/hooks/useCountUp.js
import { useEffect, useRef, useState } from 'react';

const useCountUp = (target, duration = 10000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const isNumeric = !isNaN(parseInt(target));
          if (!isNumeric) { setCount(target); return; }

          const end = parseInt(target);
          const startTime = performance.now();

          const easeOut = (t) => 1 - Math.pow(1 - t, 3);

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.round(easeOut(progress) * end));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { count, ref };
};

export default useCountUp;