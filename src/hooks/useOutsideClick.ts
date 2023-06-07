import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  elementRef: RefObject<HTMLDivElement>,
  handler: () => void,
  attached = true
) => {
  useEffect(() => {
    if (!attached) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!elementRef.current) return;
      if (!elementRef.current.contains(target)) {
        handler();
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [attached, elementRef, handler]);
};
