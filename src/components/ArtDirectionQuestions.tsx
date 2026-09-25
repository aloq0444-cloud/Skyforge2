import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, MessageSquare, Lightbulb, Compass, Palette, SlidersHorizontal, Sparkles } from 'lucide-react';
import { BRAND_QUESTIONS, BrandQuestion } from '../data/swordsData';

export const ArtDirectionQuestions: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({
    'style-split': 0, // Default recommended
    'lighting-temp': 2, // Chiaroscuro Dual Tone
    'era-expansion': 0, // Highland + Main Gauche
  });

  const [customNote, setCustomNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  const handleSelect = (questionId: string, optionIdx: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleSaveNote = () => {
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/30 via-neutral-900 to-neutral-900 border border-amber-900/40 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Visual Concept Artist Collaboration Brief</span>
        </div>
        <h2 className="text-xl md:text-2xl font-cinzel font-bold text-neutral-100">
          Art Direction Alignment & Refinement Questions
        </h2>
        <p className="text-sm text-neutral-300 max-w-3xl leading-relaxed">
          As requested in your brief, here are the key creative and technical questions regarding the style split, lighting reference, and historical scope. Select your preferences below to fine-tune the Skyforge art pipeline for subsequent generation batches.
        </p>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {BRAND_QUESTIONS.map((q: BrandQuestion, qIdx: number) => {
          const activeOptionIdx = selectedAnswers[q.id] ?? 0;
          const activeOption = q.options[activeOptionIdx];

          return (
            <div
              key={q.id}
              className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-5"
            >
              {/* Question Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs flex items-center justify-center font-bold">
                    {qIdx + 1}
                  </span>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 block">
                      {q.category}
                    </span>
                    <h3 className="text-base font-cinzel font-bold text-neutral-100">
                      {q.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs text-neutral-400 font-mono">
                  Current Selection: <strong className="text-amber-300">{activeOption.label.split('(')[0]}</strong>
                </div>
              </div>

              {/* Context */}
              <p className="text-xs text-neutral-300 leading-relaxed">
                {q.context}
              </p>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {q.options.map((option, optIdx) => {
                  const isSelected = activeOptionIdx === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between space-y-3 ${
                        isSelected
                          ? 'bg-amber-950/20 border-amber-500/60 shadow-lg shadow-amber-950/30'
                          : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className={`text-xs font-semibold ${isSelected ? 'text-amber-300' : 'text-neutral-200'}`}>
                            {option.label}
                          </h4>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] text-neutral-400 leading-relaxed">
                          {option.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-neutral-800/60 text-[10px] font-mono text-neutral-400">
                        <strong className="text-neutral-300">Brand Impact:</strong> {option.impact}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Artist Recommendation Callout */}
              <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800/80 flex items-start gap-2.5 text-xs">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-300 font-mono text-[11px]">Concept Artist Note: </span>
                  <span className="text-neutral-400">{q.currentRecommendation}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Art Director Feedback & Regeneration Request Notes */}
      <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Iterative Regeneration & Adjustment Notes</span>
        </div>
        <h3 className="text-lg font-cinzel font-bold text-neutral-100">
          Specify Adjustments for the Next Batch
        </h3>
        <p className="text-xs text-neutral-400">
          You noted that nothing here is final and you expect to regenerate or adjust individual images. Type specific notes (e.g. &ldquo;increase blade edge specular flare&rdquo;, &ldquo;render a Pappenheimer rapier in 3:4 portrait&rdquo;, &ldquo;soften smoke motes in armory background&rdquo;).
        </p>

        <textarea
          rows={3}
          value={customNote}
          onChange={(e) => setCustomNote(e.target.value)}
          placeholder="E.g., For the Zweihänder photography render, bring the rim-light higher onto the parrying hooks; for the Smallsword, add a darker blue velvet presentation case..."
          className="w-full p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-500 font-sans"
        />

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-neutral-500 font-mono">
            {noteSaved ? '✓ Note saved to brand art session' : 'Live feedback saved to session state'}
          </span>
          <button
            onClick={handleSaveNote}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-neutral-950 font-semibold text-xs transition-colors"
          >
            {noteSaved ? 'Saved!' : 'Log Revision Request'}
          </button>
        </div>
      </div>
    </div>
  );
};
