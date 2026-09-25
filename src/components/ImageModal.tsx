import React, { useState } from 'react';
import { X, Copy, Check, ShieldCheck, SunMedium, Camera, Sparkles, SlidersHorizontal, Info } from 'lucide-react';
import { SwordAsset } from '../data/swordsData';
import { ComparisonSlider } from './ComparisonSlider';

interface ImageModalProps {
  asset: SwordAsset | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ asset, onClose }) => {
  const [activeTab, setActiveTab] = useState<'view' | 'specs' | 'lighting' | 'prompts'>('view');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!asset) return null;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-500 font-mono tracking-wider uppercase">
              <span>{asset.era}</span>
              <span aria-hidden="true">·</span>
              <span>{asset.historicalPeriod}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-cinzel font-bold text-neutral-100 mt-0.5">
              {asset.name}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-800/60 hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 py-2.5 bg-neutral-950/40 border-b border-neutral-800/50 overflow-x-auto">
          <button
            onClick={() => setActiveTab('view')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'view'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Visual Render & Comparison</span>
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'specs'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Historical Authenticity (16th–19th C.)</span>
          </button>
          <button
            onClick={() => setActiveTab('lighting')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'lighting'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <SunMedium className="w-3.5 h-3.5" />
            <span>Armory Lighting Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('prompts')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'prompts'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Prompt Engineering Dossier</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'view' && (
            <div className="space-y-4">
              {asset.illustrationSrc ? (
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                      Interactive Split-View (Slide to compare Photography vs Art)
                    </span>
                    <span className="text-neutral-500 font-mono">Aspect Ratio: {asset.aspectRatio}</span>
                  </div>
                  <ComparisonSlider
                    photoSrc={asset.photoSrc}
                    illustrationSrc={asset.illustrationSrc}
                    name={asset.name}
                  />
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                  <img
                    src={asset.photoSrc}
                    alt={asset.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded bg-neutral-950/80 backdrop-blur border border-neutral-800 text-xs text-neutral-300">
                    Recommended Web Placement: <strong className="text-amber-300">{asset.recommendedUse}</strong>
                  </div>
                </div>
              )}

              {/* Quick Specs Footnote */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs">
                <div>
                  <span className="text-neutral-500 block mb-0.5">Historical Classification</span>
                  <span className="text-neutral-200 font-medium">{asset.era}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-0.5">Recommended Web Slot</span>
                  <span className="text-amber-400 font-medium">{asset.recommendedUse}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-0.5">Lighting Mood Tone</span>
                  <span className="text-neutral-300 font-medium">Chiaroscuro 2200K Rim</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs text-emerald-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-emerald-200 text-sm mb-1">
                    Strict Historical Scope Compliance (16th–19th Century)
                  </h4>
                  <p className="leading-relaxed">
                    {asset.historicalCriteria.antiMedievalCheck}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2">
                  <h4 className="text-xs uppercase font-mono text-amber-400 tracking-wider">Blade Architecture</h4>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    {asset.historicalCriteria.bladeType}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2">
                  <h4 className="text-xs uppercase font-mono text-amber-400 tracking-wider">Hilt & Guard Engineering</h4>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    {asset.historicalCriteria.guardHiltDesign}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2">
                <h4 className="text-xs uppercase font-mono text-amber-400 tracking-wider">Period Cultural Context</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {asset.historicalCriteria.periodContext}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-3">
                <h4 className="text-xs uppercase font-mono text-amber-400 tracking-wider">Authentic Anatomical Markers</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {asset.historicalCriteria.notableFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'lighting' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs text-amber-200 flex items-start gap-3">
                <SunMedium className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-300 text-sm mb-1">
                    Skyforge Master Armory Lighting Formula
                  </h4>
                  <p className="leading-relaxed">
                    {asset.lightingProfile.moodNotes}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="uppercase font-mono tracking-wider text-amber-400">Key Light</span>
                    <span>Directional</span>
                  </div>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    {asset.lightingProfile.keyLight}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="uppercase font-mono tracking-wider text-amber-400">Rim Light</span>
                    <span>Edge Grazing</span>
                  </div>
                  <p className="text-sm text-amber-200/90 leading-relaxed">
                    {asset.lightingProfile.rimLight}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="uppercase font-mono tracking-wider text-neutral-400">Shadow Tone</span>
                    <span>Chiaroscuro</span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {asset.lightingProfile.shadowTone}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/60 text-xs text-neutral-400 space-y-1">
                <span className="font-semibold text-neutral-300 block">Brand Consistency Rule:</span>
                <p>
                  Zero flat ambient wash. All metal surfaces rely on Fresnel reflection laws to delineate edges against dark walnut or black slate backdrops, ensuring all boutique images blend into one visual ecosystem.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'prompts' && (
            <div className="space-y-4">
              {/* Photo Prompt */}
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Realistic Photography Render Prompt</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(asset.prompts.photoPrompt, 'photo')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 transition-colors"
                  >
                    {copiedType === 'photo' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs font-mono bg-neutral-900/90 p-3 rounded-lg text-neutral-300 border border-neutral-800 leading-relaxed select-all">
                  {asset.prompts.photoPrompt}
                </p>
              </div>

              {/* Art Prompt (if present) */}
              {asset.prompts.artPrompt && (
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Stylized Concept Artwork Prompt</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(asset.prompts.artPrompt!, 'art')}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 transition-colors"
                    >
                      {copiedType === 'art' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs font-mono bg-neutral-900/90 p-3 rounded-lg text-neutral-300 border border-neutral-800 leading-relaxed select-all">
                    {asset.prompts.artPrompt}
                  </p>
                </div>
              )}

              {/* Camera & Negative Prompts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/60">
                  <span className="text-neutral-500 font-mono block mb-1">Camera & Lens Simulation</span>
                  <span className="text-neutral-200 font-mono">{asset.prompts.cameraSetup}</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/60">
                  <span className="text-neutral-500 font-mono block mb-1">Negative Anti-Slop Parameters</span>
                  <span className="text-rose-300/80 font-mono">{asset.prompts.negativePrompt}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-800/80 bg-neutral-950/70 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-amber-500" />
            <span>Skyforge Concept Asset #{asset.id}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
