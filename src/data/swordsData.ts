import armoryBg from '@/src/assets/images/skyforge_armory_bg_1790315777193.jpg';
import heroDuelingBanner from '@/src/assets/images/hero_dueling_banner_1790316364914.jpg';
import rapierPhoto from '@/src/assets/images/rapier_photo_1790315791598.jpg';
import rapierArt from '@/src/assets/images/rapier_illustration_1790315803801.jpg';
import zweihanderPhoto from '@/src/assets/images/zweihander_photo_1790315816203.jpg';
import zweihanderArt from '@/src/assets/images/zweihander_art_1790315829088.jpg';
import detailMacro from '@/src/assets/images/detail_hilt_macro_1790315840050.jpg';
import smallswordPhoto from '@/src/assets/images/smallsword_photo_1790315857348.jpg';
import smallswordArt from '@/src/assets/images/smallsword_art_1790316334527.jpg';
import longswordPhoto from '@/src/assets/images/longsword_photo_1790315867990.jpg';
import longswordArt from '@/src/assets/images/bastard_art_1790316348116.jpg';
import pappenheimerPhoto from '@/src/assets/images/pappenheimer_photo_1790316300167.jpg';
import pappenheimerArt from '@/src/assets/images/pappenheimer_art_1790316314751.jpg';

export interface SwordAsset {
  id: string;
  name: string;
  subTitle: string;
  category: 'rapier' | 'pappenheimer' | 'greatsword' | 'smallsword' | 'bastard_sword' | 'armory_wide' | 'detail_macro';
  era: string;
  historicalPeriod: string;
  recommendedUse: string;
  aspectRatio: '16:9' | '4:3' | '1:1' | '3:4';
  
  // Images
  photoSrc: string;
  illustrationSrc?: string;
  hasComparison: boolean;
  
  // Historical Authenticity
  historicalCriteria: {
    bladeType: string;
    guardHiltDesign: string;
    periodContext: string;
    notableFeatures: string[];
    antiMedievalCheck: string;
  };

  // Lighting & Mood (Consistent Deep Forge 2200K Warm Rim Tone)
  lightingProfile: {
    keyLight: string;
    rimLight: string;
    shadowTone: string;
    moodNotes: string;
  };

  // Prompts & Technical specs
  prompts: {
    photoPrompt: string;
    artPrompt?: string;
    negativePrompt: string;
    cameraSetup: string;
  };
}

export const SWORD_ASSETS: SwordAsset[] = [
  {
    id: 'pappenheimer-main-gauche',
    name: 'Pappenheimer Rapier & Main Gauche Set',
    subTitle: 'Early 17th Century Perforated-Plate Paired Duelist Arms (c. 1615–1635)',
    category: 'pappenheimer',
    era: '17th Century (Thirty Years War c. 1620)',
    historicalPeriod: 'Early Baroque & Thirty Years War Military/Civilian',
    recommendedUse: 'Featured Collector Paired Set / Boutique Frontpiece',
    aspectRatio: '4:3',
    photoSrc: pappenheimerPhoto,
    illustrationSrc: pappenheimerArt,
    hasComparison: true,
    historicalCriteria: {
      bladeType: 'Double-edged stiff diamond-section rapier blade (106 cm) with parrying dagger (38 cm) featuring notched blade catcher',
      guardHiltDesign: 'Perforated plate shells with pierced acanthus scrolls, sweeping counter-guards, straight quillons, and twisted wire grip',
      periodContext: 'Named after Gottfried Heinrich Graf zu Pappenheim; engineered for unyielding hand protection in both cavalry skirmishes and civilian duels.',
      notableFeatures: [
        'Dual perforated shell plates deflecting thrusts away from fingers',
        'Matching main gauche parrying dagger with thumb ring and blade-catching quillons',
        'Hand-twisted steel and brass wire-wound grip with fluted urn pommel',
        'Deep central fuller stamped with master armorer marks'
      ],
      antiMedievalCheck: 'Plate shell guards and companion main gauche parrying daggers did not exist prior to the 17th century; completely distinct from early cruciform weapons.'
    },
    lightingProfile: {
      keyLight: 'Directional 3000K lantern spill focused on the pierced shell perforations',
      rimLight: 'Intense 2200K forge hearth embers grazing both blade spines and dagger serrations',
      shadowTone: 'Deep charcoal chiaroscuro falloff into distressed dark oiled oak',
      moodNotes: 'Deep Forge Hearth (2200K) tone applied per brand directives; rich molten copper and amber edge reflections.'
    },
    prompts: {
      photoPrompt: 'Studio product photograph of an authentic early 17th century Pappenheimer rapier paired with a matching pierced-plate main gauche parrying dagger, resting angled together on weathered dark oiled oak armory table, perforated shell plate guards with pierced scrollwork, straight quillons with ring side guards, twisted steel wire grips, dramatic moody armory chiaroscuro lighting, intense warm 2200K forge hearth rim light grazing the tempered diamond-cross-section steel blade and dagger serrated blade spine, deep shadows, museum quality, photorealistic macro details',
      artPrompt: 'Stylized concept art illustration of an authentic 17th century Pappenheimer rapier and matching main gauche parrying dagger paired set, painterly digital art style, perforated pierced steel shell guards, warm 2200K forge amber rim lighting, dark moody atmospheric chiaroscuro background with subtle silhouette of anvil and weapon racks, rich brushwork, accurate historical renaissance fencing geometry, key visual concept art for sword boutique catalog',
      negativePrompt: 'medieval knight sword, viking broadsword, fantasy glowing magic runes, bright flat lighting, white background, modern tactical items, plastic',
      cameraSetup: '85mm f/4 Medium Format Tilt-Shift, 1/125s, ISO 100, directional forge warm gel.'
    }
  },
  {
    id: 'rapier-swept-hilt',
    name: 'Swept-Hilt Renaissance Rapier',
    subTitle: 'Late 16th – Early 17th Century Italian Duelling Blade',
    category: 'rapier',
    era: '16th–17th Century (c. 1580–1620)',
    historicalPeriod: 'High Renaissance & Early Baroque',
    recommendedUse: 'Hero Product Feature / Category Showcase',
    aspectRatio: '4:3',
    photoSrc: rapierPhoto,
    illustrationSrc: rapierArt,
    hasComparison: true,
    historicalCriteria: {
      bladeType: 'Slender diamond-cross-section thrusting blade (104 cm) with shallow fuller',
      guardHiltDesign: 'Complex swept-hilt cage, pas d’âne, recurved quillons, spiral silver wire grip',
      periodContext: 'Civilian self-defense and duel of honor popularized by masters like Camillo Agrippa & Ridolfo Capoferro.',
      notableFeatures: [
        'Swept wire cage protecting the unarmored hand',
        'Balanced 7.5 cm from the guard for agile tip control',
        'Authentic 16th century quillons and pas d’âne',
        'Tempered spring-steel with hand-polished mirror bevels'
      ],
      antiMedievalCheck: 'Distinct from medieval cruciform arming swords: complex loop cage, finger rings over ricasso, extreme thrust taper.'
    },
    lightingProfile: {
      keyLight: 'Soft overhead lantern at 3200K angled 45° to catch full length fuller',
      rimLight: 'Intense 2200K amber rim grazing the bottom cutting edge and wire-wound grip',
      shadowTone: 'Deep charcoal chiaroscuro falloff into oiled leather and weathered slate',
      moodNotes: 'Deep Forge Hearth (2200K) tone: rich copper edge-glow with razor-sharp steel reflections.'
    },
    prompts: {
      photoPrompt: 'Studio product photograph of an authentic 16th to 17th century Italian swept-hilt rapier, resting angled on a weathered dark slate block and distressed dark leather, dramatic moody armory lighting, intense warm amber rim light catching the razor-sharp diamond-cross-section steel blade and intricate spiral steel wire grip, dark shadows, museum quality, photorealistic, pristine steel reflection',
      artPrompt: 'Stylized concept art illustration of a 16th century Renaissance rapier with complex swept hilt guard, dark moody chiaroscuro lighting, painterly digital art style, rim lighting in warm candlelight gold, dramatic dark background with subtle armory architectural silhouette, elegant weapon portrait, rich brushwork, authentic historical proportions',
      negativePrompt: 'medieval, knight broadsword, glowing magical effects, flat lighting, white background, low poly, modern tactical parts, cartoonish fantasy proportions',
      cameraSetup: '85mm f/4 Medium Format Tilt-Shift, 1/125s, ISO 100, directional raking beam.'
    }
  },
  {
    id: 'zweihander-flammard',
    name: 'Renaissance Zweihänder / Spadone',
    subTitle: '16th Century Landsknecht Two-Handed Greatsword',
    category: 'greatsword',
    era: '16th Century (c. 1520–1570)',
    historicalPeriod: 'Late Renaissance Warfare',
    recommendedUse: 'Category Banner / Prestige Collector Display',
    aspectRatio: '4:3',
    photoSrc: zweihanderPhoto,
    illustrationSrc: zweihanderArt,
    hasComparison: true,
    historicalCriteria: {
      bladeType: 'Flame-undulated (Flammard) tempered carbon steel blade (165 cm overall)',
      guardHiltDesign: 'Extended side-ring crossguard, parrying lugs (Parierhaken), leather-wrapped ricasso',
      periodContext: 'Carried by veteran Doppelsöldner shock troops in Renaissance battle formations to breach pike blocks.',
      notableFeatures: [
        'Functional parrying hooks protecting second grip hand',
        'Full two-handed hilt accommodating wide levering techniques',
        'Side-rings on quillons for deflection of thrusts',
        'Flammard wave pattern engineered to create disruptive blade vibration'
      ],
      antiMedievalCheck: 'Strictly 16th century post-medieval infantry weapon; features complex renaissance ricasso and side rings not seen in 14th century.'
    },
    lightingProfile: {
      keyLight: 'Low-angle side wash from armory hearth simulating glowing embers',
      rimLight: 'Sharp 2200K golden edge-light traversing all 36 blade waves continuously',
      shadowTone: 'Heavy slate black with dark warm undertones',
      moodNotes: 'Deep Forge Hearth (2200K) tone: emphasizes the massive forged steel mass and lethal precision.'
    },
    prompts: {
      photoPrompt: 'Product photograph of a 16th century German Zweihänder greatsword with flamberge wavy blade, parrying hooks, long leather-wrapped two-handed grip, side rings on quillons, dark moody armory studio setting, dramatic low-key lighting with warm amber rim light grazing the forged steel edge, dark rich background, authentic historical renaissance weaponry, photorealistic macro depth',
      artPrompt: 'Stylized illustration of a massive Renaissance two-handed greatsword spadone montante, painterly visual development art, dark dramatic armory backdrop, warm forge glow rim light highlighting the intricate steel quillons and long ricasso, fine painterly brushstrokes, moody composition for concept art showcase',
      negativePrompt: 'anime sword, oversized fantasy buster, medieval crusader sword, glowing rune magic, flat studio flash, plastic textures',
      cameraSetup: '50mm f/5.6 on GFX 100 II, raking forge spill light, deep depth of field.'
    }
  },
  {
    id: 'smallsword-colichemarde',
    name: 'Gilded Colichemarde Smallsword',
    subTitle: '18th Century Court & Dueling Dress Sword',
    category: 'smallsword',
    era: '18th Century (c. 1720–1780)',
    historicalPeriod: 'Age of Enlightenment / Baroque & Rococo Court',
    recommendedUse: 'Product Detail Card / Luxury Gentleman Series',
    aspectRatio: '4:3',
    photoSrc: smallswordPhoto,
    illustrationSrc: smallswordArt,
    hasComparison: true,
    historicalCriteria: {
      bladeType: 'Hollow-ground triangular colichemarde blade stepping down from wide forte to needle-fine foible',
      guardHiltDesign: 'Pierced silver-gilt boat shell guard, urn-shaped faceted pommel, knuckle-bow, silver wrap',
      periodContext: 'The indispensable sidearm and dress accessory of the European gentleman and officer in the 1700s.',
      notableFeatures: [
        'Dramatic colichemarde blade geometry for devastating parrying strength',
        'Pierced and fire-gilded shell guard with relief foliage',
        'Ultra-light 480-gram total assembly for lightning point-play',
        'Blued steel forte with gold-inlaid French cipher'
      ],
      antiMedievalCheck: 'Pure 18th century civilian court aesthetic — zero armor penetration purpose, hollow triangular cross-section.'
    },
    lightingProfile: {
      keyLight: 'Pinpoint 3000K spot on the pierced shell guard bringing out gold-leaf luster',
      rimLight: 'Warm 2200K amber rim grazing the triangular hollow spine',
      shadowTone: 'Midnight velvet absorption with zero flare blowout',
      moodNotes: 'Deep Forge Hearth (2200K) tone: rich amber glow meeting fire-gilt gold accents.'
    },
    prompts: {
      photoPrompt: 'Museum photograph of an authentic 18th century European smallsword court sword, featuring a triangular colichemarde hollow-ground steel blade, ornate pierced silver and gilded boat shell guard, urn pommel, wrapped in silver wire, laying on black velvet in a moody private armory, dramatic golden rim-lighting catching the razor edge and blued blade engravings, dark luxury atmosphere',
      artPrompt: 'Stylized concept art illustration of an authentic 18th century French colichemarde smallsword court sword, pierced gilded boat shell guard, urn pommel, dark moody chiaroscuro armory backdrop, warm 2200K forge amber and gold candlelight rim glow grazing the hollow-ground triangular steel blade, elegant painterly digital art, historical Enlightenment fencing aesthetic, concept art render',
      negativePrompt: 'medieval sword, rapier cage, rough iron, rusty, fantasy weapon, bright flat lighting',
      cameraSetup: '100mm f/8 Macro, continuous LED snoot with warm gel, multi-layer exposure.'
    }
  },
  {
    id: 'renaissance-bastard-sword',
    name: 'Renaissance Hand-and-a-Half Sword',
    subTitle: '16th Century Side-Ring Bastard Sword',
    category: 'bastard_sword',
    era: '16th Century (c. 1510–1550)',
    historicalPeriod: 'Transition Era Renaissance Armory',
    recommendedUse: 'Core Brand Catalog / Master Bladesmith Line',
    aspectRatio: '4:3',
    photoSrc: longswordPhoto,
    illustrationSrc: longswordArt,
    hasComparison: true,
    historicalCriteria: {
      bladeType: 'Tapering double-edged carbon steel blade (98 cm) with central fuller and reinforced point',
      guardHiltDesign: 'S-curved quillons with forged protective side-ring, waisted hardwood and wire grip, pear pommel',
      periodContext: 'The pinnacle of the cut-and-thrust versatile longsword, adapted with defensive rings for unarmored combat.',
      notableFeatures: [
        'Protective side ring guarding the index finger over the quillon',
        'Extended grip allowing agile single-hand thrust or two-handed cut',
        'Hand-forged carbon spring steel with satin longitudinal polish',
        'Complex faceted pommel calibrated for dynamic point harmonic pivot'
      ],
      antiMedievalCheck: 'Includes Renaissance side-rings and S-quillons typical of 16th century manuals (e.g., Achille Marozzo).'
    },
    lightingProfile: {
      keyLight: 'Directional 3000K key from overhead armory skylight simulator',
      rimLight: 'High-contrast warm 2200K forge edge-light along the double bevels',
      shadowTone: 'Deep charcoal workshop backdrop with iron anvil reflections',
      moodNotes: 'Deep Forge Hearth (2200K) tone: authentic workbench patina meets razor mirror edge.'
    },
    prompts: {
      photoPrompt: 'Studio photograph of a 16th century Renaissance bastard sword hand-and-a-half longsword, featuring side-ring crossguard quillons, wire grip, tapering double-edged tempered steel blade with deep fuller, set against weathered dark armory wood and forged iron anvil, dramatic moody chiaroscuro lighting, warm amber rim light glistening along the steel edge',
      artPrompt: 'Stylized concept art illustration of an authentic 16th century Renaissance bastard sword hand-and-a-half longsword with S-curved quillons and protective side ring, resting on dark weathered stone block, dark moody armory chiaroscuro lighting, intense warm 2200K forge hearth embers rim light highlighting the tapering steel blade and fuller, painterly digital art, authentic renaissance fencing master weapon concept art',
      negativePrompt: 'viking sword, 11th century knight sword, barbarian sword, fantasy glowing blade, flat flash',
      cameraSetup: '90mm f/3.5 Cine Prime, dual scrim lighting setup with amber rim strip.'
    }
  },
  {
    id: 'hero-dueling-wide',
    name: 'Noble Dueling Salon & Master Forge',
    subTitle: '17th Century Atmospheric Wide Landing-Page Background',
    category: 'armory_wide',
    era: '17th Century (c. 1640)',
    historicalPeriod: 'Baroque Master Armory & Fencing Academy',
    recommendedUse: 'Alternative Homepage Hero / Brand Storytelling Portal',
    aspectRatio: '16:9',
    photoSrc: heroDuelingBanner,
    hasComparison: false,
    historicalCriteria: {
      bladeType: 'Multiple authentic 17th century rapiers, smallswords, and parrying daggers displayed on oak paneling',
      guardHiltDesign: 'Period fencing manuals with copperplate engravings, chalk dueling circles, hearth coals',
      periodContext: 'The elite dueling salon where European gentlemen trained under royal masters of arms.',
      notableFeatures: [
        'Smoldering 2200K forge hearth casting dramatic ambient warmth across the salon',
        'Authentic historical wall racks showcasing cup-hilt and swept-hilt rapiers',
        'Deep atmospheric chiaroscuro with volumetric dust and shadow',
        'Designed specifically for widescreen web hero banners with text overlays'
      ],
      antiMedievalCheck: 'Authentic 17th century baroque interior with period fencing treatises and rapiers; no medieval castle tropes.'
    },
    lightingProfile: {
      keyLight: 'Warm hearth fire glow from the left foreground',
      rimLight: 'Continuous 2200K golden rim on all wall-mounted blades',
      shadowTone: 'Midnight walnut shadow with soft volumetric haze',
      moodNotes: 'Deep Forge Hearth (2200K) tone: rich, moody, luxurious, and deeply atmospheric.'
    },
    prompts: {
      photoPrompt: 'Cinematic wide banner concept art of a 17th century noble dueling salon and master swordsmith workshop at midnight, dramatic moody chiaroscuro lighting, warm 2200K forge and hearth embers glowing warmly on left casting rich amber rim-light across multiple mounted rapiers and smallswords on dark oak paneled walls, fencing chalk diagrams and fencing manual folios on heavy table, deep rich shadows, authentic renaissance and baroque historical setting, ultra-atmospheric 8k concept art',
      negativePrompt: 'modern lighting, medieval dungeon, fantasy magic runes, bright daylight, clutter, plastic',
      cameraSetup: '21mm f/2.8 Ultra-Wide Cinema Prime, anamorphic aspect ratio, soft volumetric diffusion.'
    }
  },
  {
    id: 'armory-workshop-wide',
    name: 'The Master Armory & Forge Sanctuary',
    subTitle: '17th Century Guild Workshop Environment',
    category: 'armory_wide',
    era: '17th Century Setting',
    historicalPeriod: 'Early Modern Master Bladesmith Workshop',
    recommendedUse: 'Website Hero Section / Full-Width Background Atmosphere',
    aspectRatio: '16:9',
    photoSrc: armoryBg,
    hasComparison: false,
    historicalCriteria: {
      bladeType: 'Multiple authentic 16th–17th century blades resting on dark walnut wall racks',
      guardHiltDesign: 'Historical toolsets, leather-strapped bellows, swage blocks, horn anvils',
      periodContext: 'The physical sanctum where Skyforge master pieces are born from raw steel billets.',
      notableFeatures: [
        'Smoldering charcoal forge embers casting warm amber ambient glow',
        'Heavy oak workbench with period calipers, oilstones, and files',
        'Mounted swept-hilt rapiers and longswords on dark timber walls',
        'Volumetric dust motes and subtle forge smoke in dramatic spotlight beams'
      ],
      antiMedievalCheck: 'Early modern workshop layout featuring 17th century grinding wheel, precision measuring gauges, and renaissance racks.'
    },
    lightingProfile: {
      keyLight: 'Directional warm amber forge glow from deep rear-left hearth',
      rimLight: 'Grazing highlights on all steel blades and metallic workshop tools',
      shadowTone: 'Rich chiaroscuro pitch-dark corners with atmospheric falloff',
      moodNotes: 'Deep Forge Hearth (2200K) tone: inviting yet mysterious; smells of beeswax, clove oil, and hot iron.'
    },
    prompts: {
      photoPrompt: 'Cinematic wide shot of a high-end 17th century master armory and swordmaker workshop at dusk, dramatic dark moody atmosphere, chiaroscuro lighting, deep shadows with warm golden rim light reflecting off polished steel blades mounted on dark walnut walls, anvil and charcoal forge embers glowing warmly in background, oiled leather and grinding wheel on wooden workbench, no fantasy tropes, authentic historical renaissance armory, ultra-detailed textures, photorealistic 8k render',
      negativePrompt: 'futuristic tools, plastic, medieval fantasy dungeon, cartoon, bright fluorescent lighting, clutter, modern power tools',
      cameraSetup: '24mm f/2.8 Anamorphic Cine Lens, horizontal atmospheric flare, 16:9 widescreen composition.'
    }
  },
  {
    id: 'detail-etching-macro',
    name: 'Fire-Gilded Acanthus & Blued Ricasso Macro',
    subTitle: 'Extreme Detail Texture & Craftsmanship Showcase',
    category: 'detail_macro',
    era: '17th Century (c. 1630)',
    historicalPeriod: 'Baroque Court Armory Guild',
    recommendedUse: 'Texture Layer / PDP Craftsmanship Zoom / Brand Watermark',
    aspectRatio: '1:1',
    photoSrc: detailMacro,
    hasComparison: false,
    historicalCriteria: {
      bladeType: 'Deep blued fire-tempered steel ricasso with Latin script and acid etching',
      guardHiltDesign: 'Chiseled steel quillon block with fire-gilded accents, triple-twisted silver wire grip',
      periodContext: 'Exemplifies the bespoke court swords commissioned for nobility and military commanders.',
      notableFeatures: [
        'Intricate acanthus leaf arabesque acid etching in relief',
        'Authentic micro-honing marks and microscopic metal grain',
        '24-karat gold mercury amalgam inlay in relief recesses',
        'Twisted silver and brass wire ferrule Turks-head knot work'
      ],
      antiMedievalCheck: 'Acid etching and blued steel ornamentation was perfected in the late 16th and 17th centuries; uncharacteristic of rough earlier medieval armaments.'
    },
    lightingProfile: {
      keyLight: 'Micro-fiber optic spot directly into the gold leaf etchings',
      rimLight: 'Sharp warm 2200K glancing beam revealing depth of blade fuller and wire twists',
      shadowTone: 'Obsidian black with subtle oil sheen specular highlights',
      moodNotes: 'Sublime macro tactile richness; reveals the human hand in historical luxury smithing.'
    },
    prompts: {
      photoPrompt: 'Extreme close-up macro studio photography of an intricate 17th-century sword hilt and ricasso, showing blued steel with fire-gilded acanthus leaf acid etching, braided silver wire wrapped grip, dramatic raking light highlighting metal engravings and micro-scratches on polished tempered steel, dark moody armory atmosphere with warm golden rim reflection',
      negativePrompt: 'blurry, noise, low resolution, plastic gold, fake CGI, flat light',
      cameraSetup: '105mm f/11 Micro-Nikkor, focus stacked 18 shots, 1:1 macro reproduction ratio.'
    }
  }
];

export interface BrandQuestion {
  id: string;
  category: string;
  title: string;
  context: string;
  options: {
    label: string;
    description: string;
    impact: string;
  }[];
  currentRecommendation: string;
}

export const BRAND_QUESTIONS: BrandQuestion[] = [
  {
    id: 'style-split',
    category: 'Style Hierarchy',
    title: 'Photography vs. Illustration Allocation Across Website',
    context: 'Directive Confirmed: Option A (Hybrid Strategy) — Realistic photography for PDP specs & checkout; Stylized illustration for hero lore and category headers.',
    options: [
      {
        label: 'Hybrid Strategy (Confirmed Active)',
        description: 'Realistic Photography for Product Detail Pages, Specifications, and Checkout; Stylized Illustration for Hero Lore, Category Splash Headers, and Historical Storytelling.',
        impact: 'Builds buyer trust in physical steel quality while retaining mythical artisan aura.'
      },
      {
        label: 'Photography-First Commercial Look',
        description: '100% Realistic Studio Photography across all pages, using illustration only as subtle etched line accents in backgrounds.',
        impact: 'Maximum commercial realism, feels like a bespoke high-end auction house.'
      },
      {
        label: 'Stylized Artbook Brand Identity',
        description: 'Stylized Illustrations as the primary visual language for banners and cards.',
        impact: 'Strongest artistic signature and mood, feels like an elite bespoke design atelier.'
      }
    ],
    currentRecommendation: 'Active Directive: Hybrid Strategy (Option A) fully deployed.'
  },
  {
    id: 'lighting-temp',
    category: 'Lighting Architecture',
    title: 'Warm Rim-Light Intensity & Ambient Forge Embers',
    context: 'Directive Confirmed: First Option (Deep Forge Hearth 2000K–2200K) — Warm copper, amber, and molten bronze highlights on the steel edge.',
    options: [
      {
        label: 'Deep Forge Hearth (2000K – 2200K) [Active]',
        description: 'Warm copper, amber, and molten bronze highlights on the steel edge. Emphasizes the heat of the forge and hand-crafting pedigree.',
        impact: 'Rich, luxurious, and cozy historical atmosphere.'
      },
      {
        label: 'Moonlit Armory Cold Rim (3800K – 4500K)',
        description: 'Neutral steel-silver rim light with subtle warm candle accents only on hilts and leather grips.',
        impact: 'Colder, more clinical blade edge definition; emphasizes lethal hardness of tempered steel.'
      },
      {
        label: 'Chiaroscuro Dual Tone (2200K Forge + 6000K Blade Spine)',
        description: 'Warm rim on one side (hearth reflection) and razor cold white grazing light along the spine.',
        impact: 'Maximum three-dimensional pop and depth separation on high-density OLED screens.'
      }
    ],
    currentRecommendation: 'Active Directive: Deep Forge Hearth 2200K warm rim light unified across all renders.'
  },
  {
    id: 'era-expansion',
    category: 'Historical Scope',
    title: 'Category Expansion Priority (16th–19th C.)',
    context: 'Directive Confirmed: Third Option (16th–17th C. Pappenheimer Rapier & Matching Main Gauche paired set).',
    options: [
      {
        label: '16th–17th C. Pappenheimer Rapier & Main Gauche [Generated & Live]',
        description: 'Perforated plate shells on rapier guard paired with a matching serrated parrying dagger.',
        impact: 'Perfect for paired weapon collector sets and fencing history enthusiasts.'
      },
      {
        label: '17th C. Scottish Highland Basket-Hilt Broadsword',
        description: 'Ornate pierced steel basket hilt lined with crimson cloth, double-edged broadsword blade.',
        impact: 'Striking silhouette, rich color contrast with crimson velvet liner and blued steel bars.'
      },
      {
        label: '18th–19th C. French & British Cavalry Sabres',
        description: 'Curved pipe-back blades, brass three-bar hilts, Napoleonic era polish, leather scabbards.',
        impact: 'Adds dynamic sweeping curves and high military polish to complement straight rapiers.'
      }
    ],
    currentRecommendation: 'Active Directive: Pappenheimer & Main Gauche set generated in both photo & art styles.'
  }
];
