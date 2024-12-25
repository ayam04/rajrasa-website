import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

interface ParallaxOptions {
  target: RefObject<HTMLElement>;
  offset?: [string, string];
  scaleRange?: [number, number];
  opacityRange?: [number, number];
}

export function useParallax({
  target,
  offset = ["start end", "end start"],
  scaleRange = [0.8, 1],
  opacityRange = [0, 1]
}: ParallaxOptions) {
  const { scrollYProgress } = useScroll({
    target,
    offset
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.3], opacityRange);

  return { scale, opacity, scrollYProgress };
}