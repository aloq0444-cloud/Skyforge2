import React, { useState } from 'react';
import { Sliders, Copy, Check, Sparkles, Camera, Shield, SunMedium, Layers } from 'lucide-react';

interface PromptPreset {
  weapon: string;
  era: string;
  bladeDetails: string;
  guardDetails: string;
}

const WEAPON_PRESETS: Record<string, PromptPreset> = {
  rapier: {
    weapon: 'Swept-Hilt Rapier',
    era: '16th to early 17th Century Renaissance Italian',
    bladeDetails: 'slender diamond-cross-section tempered steel blade with central fuller, razor-honed edges',
    guardDetails: 'complex swept-hilt steel wire cage with loop guards, recurved quillons, spiral silver wire grip, and chiseled urn pommel',
  },
  zweihander: {
    weapon: 'German Zweihänder Greatsword',
    era: '16th Century Renaissance Landsknecht',
    bladeDetails: 'massive flammard flame-undulated double-edged blade with pronounced parrying hooks (Parierhaken) and long leather-wrapped ricasso',
    guardDetails: 'extended side-ring crossguard quillons, two-handed hardwood grip, heavy counterbalancing pear pommel',
  },
  smallsword: {
    weapon: 'Gilded Colichemarde Smallsword',
    era: '18th Century Baroque / Enlightenment Court',
    bladeDetails: 'triangular hollow-ground colichemarde steel blade stepping from wide rigid forte to needle thrust foible, with blued and gold-etched cipher',
    guardDetails: 'pierced silver-gilt boat shell guard, knuckle-bow, faceted urn pommel, wrapped in alternating silver wire',
  },
  bastard: {
    weapon: 'Renaissance Bastard Sword / Hand-and-a-Half',
    era: '16th Century Renaissance Transition Era',
    bladeDetails: 'tapering double-edged carbon steel blade with deep central fuller and reinforced thrust point',
    guardDetails: 'S-curved quillons with forged protective side-ring, waisted leather-over-cord grip, faceted scent-stopper pommel',
  },
  sabre: {
    weapon: 'Napoleonic Heavy Cavalry Sabre',
    era: '19th Century (c. 1810–1820)',
    bladeDetails: 'gently curved single-edged pipe-back tempered carbon steel blade with mirror polish and combat fuller',
    guardDetails: 'polished three-bar brass basket guard, leather grip bound with twisted brass wire, stepped brass pommel cap',
  },
  baskethilt: {
    weapon: 'Highland Basket-Hilt Broadsword',
    era: '17th to 18th Century Scottish',
    bladeDetails: 'broad double-edged Toledo-style tempered steel blade with twin fullers',
    guardDetails: 'elaborate pierced steel cage basket with heart cutouts, lined in crimson velvet, sharkskin grip bound with silver wire',
  },
};

export const PromptArchitect: React.FC = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<string>('rapier');
  const [styleMode, setStyleMode] = useState<'photo' | 'art'>('photo');
  const [lightingPreset, setLightingPreset] = useState<'forge' | 'moonlit' | 'chiaroscuro'>('chiaroscuro');
  const [aspectRatio, setAspectRatio] = useState<'4:3' | '16:9' | '1:1' | '3:4'>('4:3');
  const [surface, setSurface] = useState<'slate' | 'leather' | 'armory_rack' | 'velvet'>('slate');
  const [copied, setCopied] = useState(false);

  const preset = WEAPON_PRESETS[selectedWeapon];

  // Dynamic Prompt Builder
  const buildPrompt = () => {
    const surfaceDesc = {
      slate: 'resting angled on a weathered dark slate flagstone block',
      leather: 'displayed on distressed dark oiled bridle leather and weathered oak workbench',
      armory_rack: 'mounted securely on dark walnut armory tool rack alongside master smithing calipers',
      velvet: 'cradled upon deep black velvet cloth in a private noble weapon vault',
    }[surface];

    const lightingDesc = {
      forge: 'dramatic moody dark armory studio lighting, intense warm 2200K amber rim light grazing the steel edge from forge hearth embers, deep chiaroscuro shadows',
      moonlit: 'subtle cold 4200K rim light glinting along the razor steel blade spine, paired with warm candlelight reflections on the bronze and wire hilt, pitch black shadow falloff',
      chiaroscuro: 'striking chiaroscuro directional studio lighting, warm golden rim light accentuating blade bevels and complex guard geometry, dark moody shadow gradation, zero flat ambient wash',
    }[lightingPreset];

    if (styleMode === 'photo') {
      return `Studio product photograph of an authentic ${preset.era} ${preset.weapon}, featuring a ${preset.bladeDetails}, and ${preset.guardDetails}, ${surfaceDesc}, ${lightingDesc}, authentic 16th-19th century historical accuracy, no fantasy tropes, museum quality, ultra-detailed micro-scratches on polished tempered steel, 8k resolution`;
    } else {
      return `Stylized concept art illustration of an authentic ${preset.era} ${preset.weapon}, showcasing ${preset.bladeDetails}, and ${preset.guardDetails}, ${surfaceDesc}, ${lightingDesc}, dark atmospheric painterly digital concept art, rich brushwork texture, dramatic rim-light glow, authentic historical proportions, cinematic key art`;
    }
  };

  const currentPrompt = buildPrompt();
  const negativePrompt = 'medieval, early medieval, 11th century viking sword, cartoonish fantasy proportions, glowing magical runes, bright flat lighting, white background, low resolution, 3d plastic textures, anime swords';

  const copyPrompt = () => {
    navigator.clipboard.writeText(currentPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Prompt & Lighting Architect</span>
          </div>
          <h2 className="text-xl md:text-2xl font-cinzel font-bold text-neutral-100 mt-1">
            Custom Historical Blade Prompt Generator
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Configure custom historical categories, lighting temperatures, and render modes matching Skyforge’s brand guidelines.
          </p>
        </div>

        <button
          onClick={copyPrompt}
          className="self-start md:self-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-neutral-950 font-semibold text-xs font-mono transition-colors shadow-lg"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-neutral-950" />
              <span>Prompt Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-neutral-950" />
              <span>Copy Ready Prompt</span>
            </>
          )}
        </button>
      </div>

      {/* Control Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Weapon Category */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            Historical Category (16th–19th C.)
          </label>
          <select
            value={selectedWeapon}
            onChange={(e) => setSelectedWeapon(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 focus:outline-none focus:border-amber-500"
          >
            <option value="rapier">Swept-Hilt Rapier (16th–17th C.)</option>
            <option value="zweihander">Zweihänder Greatsword (16th C.)</option>
            <option value="smallsword">Colichemarde Smallsword (18th C.)</option>
            <option value="bastard">Bastard / Hand-and-a-Half (16th C.)</option>
            <option value="baskethilt">Highland Basket-Hilt (17th–18th C.)</option>
            <option value="sabre">Napoleonic Cavalry Sabre (19th C.)</option>
          </select>
        </div>

        {/* 2. Visual Render Style */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
            {styleMode === 'photo' ? (
              <Camera className="w-3.5 h-3.5 text-sky-400" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            )}
            Render Style
          </label>
          <div className="grid grid-cols-2 gap-1 p-1 bg-neutral-950 rounded-lg border border-neutral-800">
            <button
              onClick={() => setStyleMode('photo')}
              className={`px-2 py-1.5 rounded text-xs font-medium transition-colors ${
                styleMode === 'photo'
                  ? 'bg-neutral-800 text-sky-300 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Photography
            </button>
            <button
              onClick={() => setStyleMode('art')}
              className={`px-2 py-1.5 rounded text-xs font-medium transition-colors ${
                styleMode === 'art'
                  ? 'bg-neutral-800 text-amber-300 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Illustration
            </button>
          </div>
        </div>

        {/* 3. Lighting Profile */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
            <SunMedium className="w-3.5 h-3.5 text-amber-400" />
            Armory Lighting Mood
          </label>
          <select
            value={lightingPreset}
            onChange={(e) => setLightingPreset(e.target.value as any)}
            className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 focus:outline-none focus:border-amber-500"
          >
            <option value="chiaroscuro">Chiaroscuro (Dual Tone 2200K Rim)</option>
            <option value="forge">Forge Hearth (Intense Warm Amber)</option>
            <option value="moonlit">Moonlit Armory (Cool Steel & Candle)</option>
          </select>
        </div>

        {/* 4. Placement Surface & Aspect Ratio */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            Surface & Aspect Ratio
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select
              value={surface}
              onChange={(e) => setSurface(e.target.value as any)}
              className="px-2 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 focus:outline-none focus:border-amber-500"
            >
              <option value="slate">Dark Slate</option>
              <option value="leather">Oiled Leather</option>
              <option value="armory_rack">Walnut Rack</option>
              <option value="velvet">Black Velvet</option>
            </select>
            <select
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value as any)}
              className="px-2 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 focus:outline-none focus:border-amber-500"
            >
              <option value="4:3">4:3 (Card)</option>
              <option value="16:9">16:9 (Hero)</option>
              <option value="1:1">1:1 (Macro)</option>
              <option value="3:4">3:4 (Portrait)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Generated Output Preview */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>Engineered Prompt String ({currentPrompt.length} characters)</span>
          <span className="text-amber-400">Target Aspect Ratio: {aspectRatio}</span>
        </div>
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 font-mono text-xs text-neutral-200 leading-relaxed select-all">
          {currentPrompt}
        </div>
      </div>

      {/* Negative Prompt & Guardrail Guidelines */}
      <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="space-y-0.5">
          <span className="font-mono text-rose-300 block font-semibold">Enforced Negative Prompt Guardrail:</span>
          <p className="text-neutral-400 font-mono text-[11px]">{negativePrompt}</p>
        </div>
        <span className="text-[11px] text-emerald-400 font-mono shrink-0 px-2 py-1 rounded bg-emerald-950/30 border border-emerald-800/40">
          Strict 16th–19th C. Historical Filter Active
        </span>
      </div>
    </div>
  );
};
