import React from 'react';
import { sizes } from '../styles/media-queries';

const checkMobileSize = ({ width } = {}) => width <= sizes.small.max;

const useScreen = () => {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { size, isMobile: checkMobileSize(size) };
};

export { useScreen };
