import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Camera, Sliders, Eye } from 'lucide-react';

interface ComparisonSliderProps {
  photoSrc: string;
  illustrationSrc: string;
  name: string;
  aspectRatio?: string;
  className?: string;
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  photoSrc,
  illustrationSrc,
  name,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className={`relative flex flex-col gap-2 ${className}`}>
      {/* Slider Viewport */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800 shadow-2xl cursor-ew-resize select-none group"
      >
        {/* Underneath: Stylized Illustration */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={illustrationSrc}
            alt={`${name} - Stylized Illustration`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* Label Right: Stylized Illustration */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700/60 text-xs font-medium text-amber-200 shadow-lg pointer-events-none">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Stylized Illustration</span>
          </div>
        </div>

        {/* Clipped Top Layer: Realistic Photography */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="w-full h-full relative"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          >
            <img
              src={photoSrc}
              alt={`${name} - Realistic Photography`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Label Left: Realistic Photography */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700/60 text-xs font-medium text-slate-200 shadow-lg pointer-events-none">
              <Camera className="w-3.5 h-3.5 text-sky-400" />
              <span>Realistic Photography</span>
            </div>
          </div>
        </div>

        {/* Vertical Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 shadow-[0_0_12px_rgba(251,191,36,0.6)] cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-900 border-2 border-amber-400 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <Sliders className="w-4 h-4 text-amber-300" />
          </div>
        </div>

        {/* Ambient Warm Rim-Light Gradient Glow Overlay at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent pointer-events-none flex items-end justify-between px-4 pb-3">
          <span className="text-xs text-neutral-400 tracking-wider font-mono">
            {name}
          </span>
          <span className="text-xs text-amber-400/90 font-mono">
            {Math.round(sliderPosition)}% Photo · {100 - Math.round(sliderPosition)}% Art
          </span>
        </div>
      </div>

      {/* Quick Switch Buttons */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSliderPosition(100)}
            className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
              sliderPosition === 100
                ? 'bg-neutral-800 text-sky-300 border border-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            100% Photo
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
              sliderPosition === 50
                ? 'bg-neutral-800 text-amber-300 border border-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            50/50 Split
          </button>
          <button
            onClick={() => setSliderPosition(0)}
            className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
              sliderPosition === 0
                ? 'bg-neutral-800 text-amber-400 border border-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            100% Art
          </button>
        </div>
        <span className="text-[11px] text-neutral-500 flex items-center gap-1">
          <Eye className="w-3 h-3" /> Drag slider to compare steel texture
        </span>
      </div>
    </div>
  );
};
