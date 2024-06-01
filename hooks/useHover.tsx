import { useCallback, useEffect, useRef, useState } from "react";

export const useHover = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState(false);

  const handleOnHoverIn = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleOnHoverOut = useCallback(() => {
    setIsHover(false);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mouseenter", handleOnHoverIn);
    element.addEventListener("mouseleave", handleOnHoverOut);

    return () => {
      element.removeEventListener("mouseenter", handleOnHoverIn);
      element.removeEventListener("mouseleave", handleOnHoverOut);
    };
  }, [ref, handleOnHoverIn, handleOnHoverOut]);

  return { ref, isHover };
};
