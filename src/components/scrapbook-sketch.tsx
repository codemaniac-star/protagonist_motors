'use client';
import { useEffect, useRef, useState } from 'react';
type Kind = 'circle' | 'underline' | 'arrow' | 'scribble';
export function ScrapbookSketch({ kind = 'underline', className = '' }: { kind?: Kind; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setDrawn(true); observer.disconnect(); } }, { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const shapes: Record<Kind, string> = {
    circle: 'M8 25 C8 10 35 5 61 9 C86 13 91 41 72 49 C50 58 13 49 8 33 C5 25 8 17 16 12 M69 48 C75 53 77 58 77 64',
    underline: 'M4 15 C22 8 40 18 58 12 C75 7 91 14 116 9 M24 18 C52 20 84 17 107 15',
    arrow: 'M4 33 C30 32 55 25 81 17 C94 13 103 11 114 8 M99 4 L115 8 L107 20',
    scribble: 'M4 24 C22 8 27 39 46 20 S69 35 84 18 S103 26 116 10 M12 31 C37 18 62 38 92 23',
  };
  return <svg ref={ref} aria-hidden="true" className={`sketch sketch-${kind} ${drawn ? 'ink-drawn' : ''} ${className}`} viewBox="0 0 120 68" preserveAspectRatio="none"><path d={shapes[kind]}/></svg>;
}
