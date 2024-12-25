import { type RefObject, useEffect } from 'react';

import { useLatest } from './useLatest';

export const useOutsideClick = (
  elementRef: RefObject<HTMLElement | null>,
  handler: () => void,
  attached = true,
) => {
  const latestHandler = useLatest(handler);

  useEffect(() => {
    if (!attached) return;

    const handleClick = (e: MouseEvent) => {
      if (!elementRef || !elementRef.current) return;

      if (e.target instanceof Node && !elementRef.current.contains(e.target)) {
        latestHandler.current();
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [attached, elementRef, latestHandler]);
};
