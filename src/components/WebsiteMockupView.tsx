import React, { useState } from 'react';
import { Camera, Sparkles, ArrowRight, ShieldCheck, Flame, Maximize2, Check, RefreshCw } from 'lucide-react';
import { SWORD_ASSETS, SwordAsset } from '../data/swordsData';

interface WebsiteMockupViewProps {
  onSelectAsset: (asset: SwordAsset) => void;
}

export const WebsiteMockupView: React.FC<WebsiteMockupViewProps> = ({ onSelectAsset }) => {
  // Option A is Hybrid: Hero/Banners = Stylized Illustration, Product Cards = Realistic Photography with toggle
  const [activeStrategy, setActiveStrategy] = useState<'hybrid' | 'all_photo' | 'all_art'>('hybrid');
  const [individualStyles, setIndividualStyles] = useState<Record<string, 'photo' | 'illustration'>>({});
  const [selectedHeroBg, setSelectedHeroBg] = useState<'workshop' | 'dueling'>('dueling');

  const armoryBgAsset = SWORD_ASSETS.find(a => a.id === 'armory-workshop-wide');
  const duelingBgAsset = SWORD_ASSETS.find(a => a.id === 'hero-dueling-wide');
  const macroAsset = SWORD_ASSETS.find(a => a.id === 'detail-etching-macro');
  const pappenheimerAsset = SWORD_ASSETS.find(a => a.id === 'pappenheimer-main-gauche');

  const productBlades = SWORD_ASSETS.filter(a => a.category !== 'armory_wide' && a.category !== 'detail_macro');

  const toggleItemStyle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const current = getItemStyle(id);
    setIndividualStyles(prev => ({
      ...prev,
      [id]: current === 'photo' ? 'illustration' : 'photo'
    }));
  };

  const getItemStyle = (id: string): 'photo' | 'illustration' => {
    if (individualStyles[id]) return individualStyles[id];
    if (activeStrategy === 'hybrid') return 'photo'; // Hybrid uses Photo on cards, Art on hero/storytelling
    if (activeStrategy === 'all_photo') return 'photo';
    return 'illustration';
  };

  const heroBackgroundImg = selectedHeroBg === 'dueling' && duelingBgAsset
    ? duelingBgAsset.photoSrc
    : armoryBgAsset?.photoSrc;

  return (
    <div className="space-y-10">
      {/* Brand Alignment Strategy Banner (Option A Activated) */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-neutral-900 to-neutral-900 border border-amber-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Live Brand Strategy: Option A (Hybrid Hierarchy)
            </span>
          </div>
          <p className="text-sm text-neutral-300">
            <strong className="text-neutral-100">Stylized Illustration</strong> powers the Hero Lore &amp; Category portals; <strong className="text-sky-300">Realistic Photography</strong> powers Product Catalog &amp; Inspection.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-neutral-400 font-mono">
            <span>• Rim Lighting: <strong className="text-amber-400">Deep Forge Hearth (2200K)</strong></span>
            <span>• Featured Release: <strong className="text-amber-400">17th C. Pappenheimer Paired Set</strong></span>
          </div>
        </div>

        {/* Strategy Preset Switcher */}
        <div className="flex items-center gap-2 bg-neutral-950/80 p-1.5 rounded-xl border border-neutral-800 self-start md:self-auto">
          <button
            onClick={() => {
              setActiveStrategy('hybrid');
              setIndividualStyles({});
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeStrategy === 'hybrid'
                ? 'bg-amber-600 text-neutral-950 font-bold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Option A (Hybrid)
          </button>
          <button
            onClick={() => {
              setActiveStrategy('all_photo');
              setIndividualStyles({});
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeStrategy === 'all_photo'
                ? 'bg-sky-950 text-sky-200 border border-sky-800'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Photo
          </button>
          <button
            onClick={() => {
              setActiveStrategy('all_art');
              setIndividualStyles({});
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeStrategy === 'all_art'
                ? 'bg-amber-950 text-amber-200 border border-amber-800'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Art
          </button>
        </div>
      </div>

      {/* Mock Storefront Container */}
      <div className="rounded-2xl border border-neutral-800 bg-[#08090d] overflow-hidden shadow-2xl">
        {/* Mock Storefront Top Bar */}
        <header className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/95 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.9)]" />
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-neutral-100">
                SKYFORGE
              </span>
            </div>
            <nav className="hidden lg:flex items-center gap-6 text-xs text-neutral-400 tracking-wider uppercase font-mono">
              <span className="text-amber-400 font-medium cursor-pointer">Collections</span>
              <span className="hover:text-neutral-200 cursor-pointer">Paired Weapons</span>
              <span className="hover:text-neutral-200 cursor-pointer">16th C. Rapiers</span>
              <span className="hover:text-neutral-200 cursor-pointer">Two-Handed Spadones</span>
              <span className="hover:text-neutral-200 cursor-pointer">Court Smallswords</span>
            </nav>
          </div>
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
            <span className="hidden sm:inline">16TH–19TH C. HISTORICAL BLADESMITHING</span>
            <span className="px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/60 text-[10px]">
              2200K FORGE PROFILE
            </span>
          </div>
        </header>

        {/* 1. HERO BANNER: Atmospheric 16:9 Wide Shot */}
        <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
          {heroBackgroundImg && (
            <img
              src={heroBackgroundImg}
              alt="Skyforge Dueling Salon & Master Armory"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.10]"
            />
          )}

          {/* Chiaroscuro Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-black/45 to-black/75 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-transparent via-black/30 to-[#08090d]/90 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Authentic European Edged Weapons · 1500–1890</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-cinzel font-bold text-neutral-100 tracking-wide leading-tight drop-shadow-2xl">
              TEMPERED STEEL.<br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                ETERNAL HARMONY.
              </span>
            </h1>

            <p className="text-sm md:text-base text-neutral-300/90 max-w-xl mx-auto leading-relaxed drop-shadow">
              Hand-forged Renaissance rapiers, Thirty Years War Pappenheimer sets, Landsknecht zweihänders, and Enlightenment court smallswords. Built strictly to period fencing treatise proportions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 text-neutral-950 font-semibold text-xs tracking-wider uppercase shadow-xl shadow-amber-950/70 hover:from-amber-500 hover:to-amber-400 transition-all flex items-center gap-2">
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              {/* Toggle Hero Image between Dueling Salon & Forge */}
              <button
                onClick={() => setSelectedHeroBg(prev => prev === 'dueling' ? 'workshop' : 'dueling')}
                className="px-4 py-3 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 font-mono text-xs border border-neutral-700 backdrop-blur-md flex items-center gap-2 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                <span>Switch Wide BG: {selectedHeroBg === 'dueling' ? 'Dueling Salon (New)' : 'Armory Forge'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2. SPOTLIGHT MODULE: Pappenheimer & Main Gauche Paired Set (Option 3 Release) */}
        {pappenheimerAsset && (
          <section className="px-6 py-12 bg-neutral-950 border-t border-neutral-800">
            <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-amber-950/20 border border-amber-500/30 p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Newly Added Category Spotlight</span>
                </div>
                <h3 className="font-cinzel text-2xl lg:text-3xl font-bold text-neutral-100 leading-tight">
                  Pappenheimer Rapier &amp; Main Gauche Set
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Engineered during the Thirty Years War (c. 1620). Features perforated plate shells with pierced scrolls, twisted steel wire grip, and a companion parrying dagger with notched blade-trap quillons.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-1">
                  <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <span className="text-neutral-500 block text-[10px]">Rapier Length</span>
                    <span className="text-neutral-200 font-semibold">106 cm Stiff Diamond</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <span className="text-neutral-500 block text-[10px]">Companion Dagger</span>
                    <span className="text-neutral-200 font-semibold">38 cm Parrying Notch</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onSelectAsset(pappenheimerAsset)}
                    className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-neutral-950 font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-2"
                  >
                    <span>Inspect Paired Set Dossier</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Image Preview with Toggle */}
              <div
                onClick={() => onSelectAsset(pappenheimerAsset)}
                className="lg:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 group cursor-pointer shadow-2xl bg-neutral-950"
              >
                <img
                  src={pappenheimerAsset.photoSrc}
                  alt={pappenheimerAsset.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur border border-neutral-700 text-xs font-mono text-amber-300">
                  {pappenheimerAsset.era}
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-neutral-950/90 border border-amber-500/40 text-xs font-mono text-amber-300 flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  <span>Click to Compare Photo vs Art</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. PRODUCT CATALOG GRID */}
        <section className="px-6 py-16 bg-[#0a0b10] border-t border-neutral-800/80">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                  Historical Armory Catalog
                </span>
                <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-neutral-100">
                  The Masterpiece Swords
                </h2>
              </div>
              <p className="text-xs text-neutral-400 max-w-md">
                Every weapon includes both a Realistic Studio Photograph and a Stylized Concept Illustration. Toggle cards individually or view full comparative sliders.
              </p>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productBlades.map(blade => {
                const currentStyle = getItemStyle(blade.id);
                const displayImg = (currentStyle === 'illustration' && blade.illustrationSrc)
                  ? blade.illustrationSrc
                  : blade.photoSrc;

                return (
                  <div
                    key={blade.id}
                    onClick={() => onSelectAsset(blade)}
                    className="group rounded-xl bg-neutral-900/90 border border-neutral-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col cursor-pointer"
                  >
                    {/* Image Viewport */}
                    <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden">
                      <img
                        src={displayImg}
                        alt={blade.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Top Bar on Image: Style Switcher & Tag */}
                      <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10">
                        <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur text-[10px] font-mono text-amber-300 border border-neutral-700/60">
                          {blade.era.split(' ')[0]}
                        </span>

                        {blade.illustrationSrc && (
                          <button
                            onClick={(e) => toggleItemStyle(blade.id, e)}
                            className="px-2.5 py-1 rounded bg-neutral-950/85 backdrop-blur border border-neutral-700 text-[10px] font-medium text-neutral-200 hover:text-amber-300 flex items-center gap-1.5 shadow transition-colors"
                            title="Toggle between Photography and Illustration"
                          >
                            {currentStyle === 'photo' ? (
                              <>
                                <Camera className="w-3 h-3 text-sky-400" />
                                <span>Photo</span>
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-3 h-3 text-amber-400" />
                                <span>Art</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-lg bg-neutral-900/90 text-xs font-mono text-amber-200 border border-amber-500/40 shadow-xl flex items-center gap-1.5">
                          <Maximize2 className="w-3 h-3" />
                          <span>Inspect Concept &amp; Specs</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                          {blade.category.replace('_', ' ')}
                        </span>
                        <h3 className="font-cinzel text-base font-bold text-neutral-100 group-hover:text-amber-300 transition-colors leading-snug">
                          {blade.name}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                          {blade.subTitle}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-400">Rim Light: 2200K Forge</span>
                        <span className="text-amber-400 font-semibold">Museum Spec</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. MACRO CRAFTSMANSHIP DETAIL MODULE */}
        {macroAsset && (
          <section className="px-6 py-16 bg-[#06070a] border-t border-neutral-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div
                onClick={() => onSelectAsset(macroAsset)}
                className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 group cursor-pointer"
              >
                <img
                  src={macroAsset.photoSrc}
                  alt={macroAsset.name}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-[28%] left-[34%] pointer-events-none flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-black relative" />
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur text-[10px] font-mono text-amber-200 border border-amber-500/40">
                    24K Mercury Fire-Gilt Inlay
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 pointer-events-none">
                  <span className="font-mono text-amber-400">1:1 Macro Texture Asset</span>
                  <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                    <Maximize2 className="w-3 h-3" /> Click to zoom
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Texture &amp; Craftsmanship Accent Asset</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-neutral-100 leading-tight">
                  Acid Etching &amp; Hand-Braided Silver Wire
                </h2>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  Every Skyforge blade undergoes traditional fire-bluing and deep nitric acid relief etching. In the 17th century, master armorers etched Latin mottoes and acanthus scrollwork into ricassos to protect against corrosion while celebrating high patronage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                    <h4 className="font-semibold text-neutral-200 mb-1">Blued Steel &amp; Gold Relief</h4>
                    <p className="text-neutral-400">
                      Heat-treated to 570°F for iridescent deep sapphire oxidation, sealed with mineral beeswax.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                    <h4 className="font-semibold text-neutral-200 mb-1">Braided Wire-Wound Grip</h4>
                    <p className="text-neutral-400">
                      Alternate strands of 0.4mm fine silver and annealed brass wire, counter-twisted for non-slip grip.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectAsset(macroAsset)}
                    className="px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono text-xs transition-colors flex items-center gap-2"
                  >
                    <span>View Macro Prompt &amp; Camera Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
