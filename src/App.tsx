import React, { useState } from 'react';
import {
  Sparkles,
  Camera,
  Layers,
  Sliders,
  HelpCircle,
  Eye,
  Flame,
  SunMedium,
  Maximize2,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';
import { SWORD_ASSETS, SwordAsset } from './data/swordsData';
import { ComparisonSlider } from './components/ComparisonSlider';
import { ImageModal } from './components/ImageModal';
import { WebsiteMockupView } from './components/WebsiteMockupView';
import { PromptArchitect } from './components/PromptArchitect';
import { ArtDirectionQuestions } from './components/ArtDirectionQuestions';

export default function App() {
  const [activeTab, setActiveTab] = useState<'showcase' | 'website_mockup' | 'prompt_architect' | 'questions'>('showcase');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeAsset, setActiveAsset] = useState<SwordAsset | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filtered Assets
  const filteredAssets = SWORD_ASSETS.filter(asset => {
    if (selectedCategory === 'all') return true;
    return asset.category === selectedCategory;
  });

  const featuredPappenheimer = SWORD_ASSETS.find(a => a.id === 'pappenheimer-main-gauche')!;
  const featuredRapier = SWORD_ASSETS.find(a => a.id === 'rapier-swept-hilt')!;
  const featuredZweihander = SWORD_ASSETS.find(a => a.id === 'zweihander-flammard')!;
  const featuredSmallsword = SWORD_ASSETS.find(a => a.id === 'smallsword-colichemarde')!;

  const handleCopyPrompt = (asset: SwordAsset, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(asset.prompts.photoPrompt);
    setCopiedId(asset.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-[#e0e2ec] flex flex-col selection:bg-amber-600/30 selection:text-amber-200">
      {/* Studio Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#07080b]/90 backdrop-blur-md border-b border-neutral-800/80 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-950/50 border border-amber-400/40">
              <Flame className="w-5 h-5 text-neutral-950 fill-neutral-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-lg md:text-xl font-bold tracking-[0.2em] text-neutral-100">
                  SKYFORGE
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/50 text-amber-300">
                  Visual Concept Studio
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-mono">
                Historical Sword Product Imagery (16th–19th C.) · 2200K Deep Forge Lighting
              </p>
            </div>
          </div>

          {/* Primary View Switcher */}
          <div className="flex items-center gap-1 bg-neutral-950/90 p-1 rounded-xl border border-neutral-800 overflow-x-auto">
            <button
              onClick={() => setActiveTab('showcase')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === 'showcase'
                  ? 'bg-neutral-800 text-amber-300 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Asset Showcase ({SWORD_ASSETS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('website_mockup')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === 'website_mockup'
                  ? 'bg-neutral-800 text-amber-300 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Live Website Context (Option A)</span>
            </button>
            <button
              onClick={() => setActiveTab('prompt_architect')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === 'prompt_architect'
                  ? 'bg-neutral-800 text-amber-300 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Prompt Architect</span>
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === 'questions'
                  ? 'bg-neutral-800 text-amber-300 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Art Directives &amp; Feedback</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-8 space-y-12">
        {activeTab === 'showcase' && (
          <div className="space-y-12">
            {/* Concept Hero Header & Introduction */}
            <div className="relative rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-neutral-800 p-6 md:p-8 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-400">
                  <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                    DIRECTIVES ACTIVE: OPTION A + 2200K FORGE RIM
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>16TH–19TH CENTURY AUTHENTIC</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-neutral-100 leading-tight">
                  Skyforge Visual Concept Asset Suite
                </h1>

                <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                  Presenting the updated batch: newly generated <strong className="text-amber-300 font-semibold">17th C. Pappenheimer Rapier &amp; Main Gauche Paired Set</strong>, 18th C. Smallsword concept artwork, 16th C. Bastard Sword illustration, and wide noble dueling salon background. Unified under <strong className="text-amber-400">Deep Forge Hearth 2200K warm rim-lighting</strong>.
                </p>

                {/* Key Metrics / Attributes */}
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-sky-400" />
                    <span>Realistic Photography Renders</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Stylized Concept Artwork</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1.5">
                    <SunMedium className="w-4 h-4 text-amber-500" />
                    <span>2200K Forge Rim Lighting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Split Comparison Showcase: Photography vs. Illustration */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-neutral-800 pb-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Dual-Style Comparative Review (Slide to Inspect)</span>
                  </div>
                  <h2 className="text-2xl font-cinzel font-bold text-neutral-100 mt-1">
                    Photography vs. Stylized Illustration
                  </h2>
                </div>
                <p className="text-xs text-neutral-400 max-w-md">
                  Per Option A, compare physical steel texture and painterly art to choose per web placement.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 1. NEW: Pappenheimer Rapier & Main Gauche Set */}
                {featuredPappenheimer && (
                  <div className="rounded-2xl bg-neutral-900 border border-amber-500/40 p-5 space-y-4 shadow-xl shadow-amber-950/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Newly Added
                          </span>
                          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                            {featuredPappenheimer.era}
                          </span>
                        </div>
                        <h3 className="font-cinzel text-lg font-bold text-neutral-100 mt-1">
                          {featuredPappenheimer.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => setActiveAsset(featuredPappenheimer)}
                        className="text-xs font-mono text-neutral-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Full Dossier</span>
                      </button>
                    </div>

                    <ComparisonSlider
                      photoSrc={featuredPappenheimer.photoSrc}
                      illustrationSrc={featuredPappenheimer.illustrationSrc!}
                      name={featuredPappenheimer.name}
                    />

                    <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-300 space-y-1">
                      <span className="font-semibold text-neutral-200">Historical Scope:</span>
                      <p className="text-neutral-400 leading-relaxed">
                        Early 17th century perforated shell plate guard paired with serrated parrying dagger. 2200K forge rim highlights on both blades.
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. Swept-Hilt Rapier */}
                <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                        {featuredRapier.era}
                      </span>
                      <h3 className="font-cinzel text-lg font-bold text-neutral-100">
                        {featuredRapier.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveAsset(featuredRapier)}
                      className="text-xs font-mono text-neutral-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Full Dossier</span>
                    </button>
                  </div>

                  <ComparisonSlider
                    photoSrc={featuredRapier.photoSrc}
                    illustrationSrc={featuredRapier.illustrationSrc!}
                    name={featuredRapier.name}
                  />

                  <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-300 space-y-1">
                    <span className="font-semibold text-neutral-200">Historical Scope:</span>
                    <p className="text-neutral-400 leading-relaxed">
                      Italian swept-hilt (c. 1590) with wire cage, pas d&rsquo;âne, and slender diamond cross-section thrusting blade.
                    </p>
                  </div>
                </div>

                {/* 3. Zweihander Comparison */}
                <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                        {featuredZweihander.era}
                      </span>
                      <h3 className="font-cinzel text-lg font-bold text-neutral-100">
                        {featuredZweihander.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveAsset(featuredZweihander)}
                      className="text-xs font-mono text-neutral-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Full Dossier</span>
                    </button>
                  </div>

                  <ComparisonSlider
                    photoSrc={featuredZweihander.photoSrc}
                    illustrationSrc={featuredZweihander.illustrationSrc!}
                    name={featuredZweihander.name}
                  />

                  <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-300 space-y-1">
                    <span className="font-semibold text-neutral-200">Historical Scope:</span>
                    <p className="text-neutral-400 leading-relaxed">
                      German 16th century Landsknecht two-handed sword with flammard wave blade, parrying hooks, and ring quillons.
                    </p>
                  </div>
                </div>

                {/* 4. Smallsword Comparison */}
                {featuredSmallsword && featuredSmallsword.illustrationSrc && (
                  <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950/60 text-sky-300 border border-sky-800/60">
                            Updated Art
                          </span>
                          <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                            {featuredSmallsword.era}
                          </span>
                        </div>
                        <h3 className="font-cinzel text-lg font-bold text-neutral-100 mt-1">
                          {featuredSmallsword.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => setActiveAsset(featuredSmallsword)}
                        className="text-xs font-mono text-neutral-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Full Dossier</span>
                      </button>
                    </div>

                    <ComparisonSlider
                      photoSrc={featuredSmallsword.photoSrc}
                      illustrationSrc={featuredSmallsword.illustrationSrc}
                      name={featuredSmallsword.name}
                    />

                    <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-300 space-y-1">
                      <span className="font-semibold text-neutral-200">Historical Scope:</span>
                      <p className="text-neutral-400 leading-relaxed">
                        18th century French colichemarde court sword with pierced gilded boat shell guard and triangular hollow blade.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Category Filter Bar */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-3">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
                    Product Imagery Suite
                  </span>
                  <h2 className="text-2xl font-cinzel font-bold text-neutral-100">
                    All Generated Assets &amp; Categories
                  </h2>
                </div>

                {/* Filter buttons */}
                <div className="flex items-center gap-1 overflow-x-auto p-1 bg-neutral-950 rounded-xl border border-neutral-800">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-neutral-800 text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    All ({SWORD_ASSETS.length})
                  </button>
                  <button
                    onClick={() => setSelectedCategory('pappenheimer')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === 'pappenheimer'
                        ? 'bg-neutral-800 text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Paired Sets
                  </button>
                  <button
                    onClick={() => setSelectedCategory('rapier')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === 'rapier'
                        ? 'bg-neutral-800 text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Rapiers
                  </button>
                  <button
                    onClick={() => setSelectedCategory('greatsword')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === 'greatsword'
                        ? 'bg-neutral-800 text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Greatswords
                  </button>
                  <button
                    onClick={() => setSelectedCategory('smallsword')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === 'smallsword'
                        ? 'bg-neutral-800 text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Smallswords
                  </button>
                  <button
                    onClick={() => setSelectedCategory('bastard_sword')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === 'bastard_sword'
                        ? 'bg-neutral-800 text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Bastard Swords
                  </button>
                  <button
                    onClick={() => setSelectedCategory('armory_wide')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === 'armory_wide'
                        ? 'bg-neutral-800 text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Armory Atmosphere
                  </button>
                  <button
                    onClick={() => setSelectedCategory('detail_macro')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === 'detail_macro'
                        ? 'bg-neutral-800 text-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Macro Etchings
                  </button>
                </div>
              </div>

              {/* Assets Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAssets.map(asset => (
                  <div
                    key={asset.id}
                    onClick={() => setActiveAsset(asset)}
                    className="group rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col cursor-pointer"
                  >
                    {/* Image Viewport */}
                    <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden">
                      <img
                        src={asset.photoSrc}
                        alt={asset.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur text-[10px] font-mono text-amber-300 border border-neutral-700">
                          {asset.era.split(' ')[0]}
                        </span>
                        <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur text-[10px] font-mono text-neutral-300 border border-neutral-700">
                          {asset.aspectRatio}
                        </span>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 rounded-lg bg-neutral-900/90 text-xs font-mono text-amber-200 border border-amber-500/40 shadow-2xl flex items-center gap-1.5 backdrop-blur-md">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Inspect High-Res &amp; Dossier</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                          <span>{asset.category.replace('_', ' ').toUpperCase()}</span>
                          <span className="text-amber-400/90">{asset.recommendedUse.split('/')[0]}</span>
                        </div>
                        <h3 className="font-cinzel text-lg font-bold text-neutral-100 group-hover:text-amber-300 transition-colors leading-snug">
                          {asset.name}
                        </h3>
                        <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                          {asset.subTitle}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                        <button
                          onClick={(e) => handleCopyPrompt(asset, e)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-xs font-mono text-neutral-300 border border-neutral-800 transition-colors"
                        >
                          {copiedId === asset.id ? (
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

                        <span className="text-xs text-neutral-400 font-mono flex items-center gap-1 group-hover:text-amber-300 transition-colors">
                          <span>View Specs</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Live Website Context Simulator */}
        {activeTab === 'website_mockup' && (
          <WebsiteMockupView onSelectAsset={(asset) => setActiveAsset(asset)} />
        )}

        {/* Tab 3: Interactive Prompt Architect */}
        {activeTab === 'prompt_architect' && (
          <PromptArchitect />
        )}

        {/* Tab 4: Art Direction Directives & Collaboration */}
        {activeTab === 'questions' && (
          <ArtDirectionQuestions />
        )}
      </main>

      {/* High-Resolution Inspection & Dossier Modal */}
      <ImageModal
        asset={activeAsset}
        onClose={() => setActiveAsset(null)}
      />

      {/* Brand Footer */}
      <footer className="mt-16 border-t border-neutral-800/80 bg-neutral-950 py-8 px-4 lg:px-8 text-neutral-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-neutral-200 font-bold tracking-widest">SKYFORGE</span>
            <span>·</span>
            <span>Authentic Historical Blade Visual Concept Art</span>
          </div>
          <div>
            <span>Directives: Option A (Hybrid) · Deep Forge Hearth 2200K · 16th–19th C. Historical Strict</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
