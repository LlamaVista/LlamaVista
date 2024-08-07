import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useHighLight = (
  highLightColor: string,
  initialColor: string,
  isMount?: boolean
) => {
  const linkRef = useRef<HTMLAnchorElement[] | null[]>([]);
  const { pathname: currentUrl } = useLocation();

  useEffect(() => {
    let highLightElement: HTMLAnchorElement;

    const handleMouseEnter = (event: MouseEvent) => {
      const element = event.target as HTMLAnchorElement;
      element.style.color = highLightColor;
      highLightElement.style.color = initialColor;
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const element = event.target as HTMLAnchorElement;
      element.style.color = initialColor;
      highLightElement.style.color = highLightColor;
    };

    if (isMount) {
      linkRef?.current.forEach((element) => {
        element = element as HTMLAnchorElement;

        const fullUrl = element.href;
        const linkElementPathName = fullUrl.substring(
          fullUrl.lastIndexOf('3000') + 4
        );

        console.log(`current: ${currentUrl}, ${linkElementPathName}`);

        if (linkElementPathName === currentUrl) {
          highLightElement = element;
          highLightElement.style.color = highLightColor;
        } else {
          element?.addEventListener('mouseenter', (e) => handleMouseEnter(e));
          element?.addEventListener('mouseleave', (e) => handleMouseLeave(e));
        }
      });
    }

    return () => {
      linkRef?.current.forEach((element) => {
        element = element as HTMLAnchorElement;

        element?.removeEventListener('mouseenter', handleMouseEnter);
        element?.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMount, currentUrl]);

  return linkRef;
};
