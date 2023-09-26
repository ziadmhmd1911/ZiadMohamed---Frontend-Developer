import { useEffect, useState } from 'react';

export type WindowDimension = {
  innerWidth: number | null;
  innerHeight: number | null;
};

export const WINDOW_TYPE = {
  isMobile: (width: number) => width < 640,
  isTablet: (width: number) => width >= 640 && width < 768,
  isLaptop: (width: number) => width >= 768 && width < 1024,
  isDesktop: (width: number) => width >= 1024,
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowDimension>({
    innerHeight: window?.innerHeight ?? null,
    innerWidth: window?.innerWidth ?? null,
  });

  useEffect(() => {
    const eventListener = (event: Event) => {
      const { innerWidth, innerHeight } = event.target as Window;
      setWindowSize({ innerHeight, innerWidth });
    };
    window.addEventListener("resize", eventListener);
    return () => window.removeEventListener("resize", eventListener);
  }, []);

  const { isLaptop, isMobile, isTablet } = WINDOW_TYPE;

  return {
    isMobile: isMobile(windowSize.innerWidth || 0),
    isTablet: isTablet(windowSize.innerWidth || 0),
    isLaptop: isLaptop(windowSize.innerWidth || 0),
  };
};
