import { useState, useEffect } from 'react';

export const useSticky = () => {
  const [fixed, setFixed] = useState<boolean>(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 42) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return {
    fixed,
  };
};
