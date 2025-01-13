import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useHighLight = (
  highLightColor: string,
  initialColor: string,
  isMount?: boolean
) => {
  const linkRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const { pathname: currentUrl } = useLocation();
  let highLightElement: HTMLAnchorElement;

  useEffect(() => {
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

    // 초기화: 링크가 로드되었을 때
    linkRef.current.forEach((element, index) => {
      if (element) {
        const fullUrl = element.href;
        const linkElementPathName = new URL(fullUrl).pathname;

        if (linkElementPathName === currentUrl) {
          highLightElement = element;
          element.style.color = highLightColor;
        } else {
          element.style.color = initialColor;
          element.addEventListener('mouseenter', handleMouseEnter);
          element.addEventListener('mouseleave', handleMouseLeave);
        }
      }
    });

    // 클린업: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      linkRef.current.forEach((element) => {
        if (element) {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, [currentUrl, isMount]);

  return linkRef;
};
