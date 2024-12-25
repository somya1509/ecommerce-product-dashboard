import { useEffect, useRef, MutableRefObject } from 'react';

const useInfiniteScroll = (callback: () => void): { ref: MutableRefObject<HTMLDivElement | null> } => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callback();
      },
      { threshold: 1.0 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [callback]);

  return { ref };
};

export default useInfiniteScroll;
