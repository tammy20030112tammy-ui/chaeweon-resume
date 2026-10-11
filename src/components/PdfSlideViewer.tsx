import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  List,
  Sparkles,
} from 'lucide-react';
import { VFX_SLIDES, SlideItem } from '../data/vfxPdfSlides';
import { SPC_SLIDES } from '../data/spcPdfSlides';

interface PdfSlideViewerProps {
  className?: string;
  projectId?: 'vfx-production-hub' | 'spc-square-gangnam';
}

export const PdfSlideViewer: React.FC<PdfSlideViewerProps> = ({
  className = '',
  projectId = 'vfx-production-hub',
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  const isSpc = projectId === 'spc-square-gangnam';
  const slides: SlideItem[] = isSpc ? SPC_SLIDES : VFX_SLIDES;
  const totalPages = slides.length;
  const currentSlide: SlideItem = slides[currentPage - 1] || slides[0];

  // Reset page when projectId changes
  useEffect(() => {
    setCurrentPage(1);
  }, [projectId]);

  const goToPrev = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);

  // Key quick chapter jumps
  const vfxChapterJumps = [
    { label: '표지', page: 1 },
    { label: '목차', page: 2 },
    { label: '대상지', page: 3 },
    { label: '입지분석', page: 13 },
    { label: '건축계획', page: 17 },
    { label: '층별공간', page: 19 },
    { label: 'IRR·재무', page: 29 },
    { label: 'CapEx', page: 38 },
    { label: '10개년CF', page: 41 },
    { label: 'PFV구조', page: 42 },
    { label: '리스크', page: 49 },
    { label: '출처', page: 52 },
  ];

  const spcChapterJumps = [
    { label: '표지', page: 1 },
    { label: '목차', page: 2 },
    { label: '1.자산소개', page: 3 },
    { label: '자산개요', page: 4 },
    { label: '임대현황', page: 7 },
    { label: '2.개선전CF', page: 8 },
    { label: '임대료역산', page: 9 },
    { label: '주차수익', page: 15 },
    { label: '개선전IRR', page: 20 },
    { label: '3.수익개선안', page: 21 },
    { label: '개선안A(오버리지)', page: 24 },
    { label: 'BEP추정', page: 28 },
    { label: '개선안B(푸에르코)', page: 30 },
    { label: 'A/B비교', page: 33 },
    { label: '4.최종선정', page: 38 },
    { label: '종합비교', page: 40 },
    { label: 'Q&A·출처', page: 41 },
  ];

  const chapterJumps = isSpc ? spcChapterJumps : vfxChapterJumps;

  return (
    <div
      ref={viewerRef}
      className={`w-full rounded-2xl bg-white border border-slate-300 shadow-md overflow-hidden transition-all flex flex-col ${
        isFullscreen ? 'fixed inset-4 z-50 p-2 sm:p-4 bg-white/98 backdrop-blur-xl border-slate-400' : className
      }`}
    >
      {/* Top Bar Controls - 밝은 화이트/슬레이트 톤 */}
      <div className="px-4 sm:px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2 text-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-2xs">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900 tracking-tight">
                {isSpc
                  ? 'SPC 스퀘어 강남 현금흐름 개선안 (PDF 슬라이드)'
                  : 'VFX 프로덕션 허브 부동산 개발 보고서 (PDF 슬라이드)'}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                {totalPages} Slides
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
              {isSpc
                ? '2026-1 부동산자산관리 1분반 1조 · 역삼동 831-23 PM 기획안'
                : '단국대학교 도시계획·부동산학부 · 장항동 1871 기획안'}
            </span>
          </div>
        </div>

        {/* Quick controls: Page Counter & Fullscreen */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-700 shadow-2xs">
            <span className="text-blue-600 font-bold">{currentPage}</span>
            <span className="text-slate-400">/</span>
            <span>{totalPages}</span>
          </div>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 rounded-lg transition-colors"
            title={isFullscreen ? '축소' : '전체화면'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Chapter Jump Quick Tabs - 밝은 테마 */}
      <div className="px-4 sm:px-6 py-2.5 bg-slate-50/70 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
        <span className="text-[11px] text-slate-500 font-semibold mr-1 shrink-0 flex items-center gap-1">
          <List className="w-3 h-3" /> 목차 바로가기:
        </span>
        {chapterJumps.map((jump) => {
          const isActive = currentPage === jump.page;

          return (
            <button
              key={jump.label}
              onClick={() => setCurrentPage(jump.page)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium shrink-0 transition-all ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold shadow-xs border border-blue-600'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600 border border-slate-200 shadow-2xs'
              }`}
            >
              {jump.label}
            </button>
          );
        })}
      </div>

      {/* Main Slide Deck Container (16:9 Aspect Ratio) - 밝은 배경 */}
      <div className="relative flex-1 min-h-[420px] sm:min-h-[480px] md:min-h-[520px] bg-slate-100/70 border-b border-slate-200 flex items-center justify-center p-3 sm:p-6 select-none">
        {/* Slide Canvas */}
        <div className="w-full max-w-4xl aspect-[16/9] min-h-[380px] bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 text-slate-900 transition-all relative">
          {/* Slide Header */}
          <div className="flex items-start justify-between border-b border-slate-200 pb-3">
            <div>
              <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider block">
                {currentSlide.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                {currentSlide.title}
              </h3>
              {currentSlide.subtitle && (
                <p className="text-xs text-slate-500 mt-0.5">{currentSlide.subtitle}</p>
              )}
            </div>

            {/* Top Right Emblem */}
            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 shrink-0">
              <span className="text-slate-400">❖</span>
              <span>{isSpc ? '부동산 자산관리' : '부동산 개발'}</span>
            </div>
          </div>

          {/* Slide Body Content */}
          <div className="my-auto py-3 overflow-y-auto max-h-[300px]">
            {/* TYPE: COVER */}
            {currentSlide.type === 'cover' && (
              <div className="text-center py-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  {currentSlide.content.badge || '부동산 실무 프로젝트'}
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-black text-slate-950 tracking-tight break-keep whitespace-nowrap">
                  {currentSlide.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                  {currentSlide.subtitle}
                </p>
                {currentSlide.content.description && (
                  <p className="text-xs text-slate-500 font-medium">
                    {currentSlide.content.description}
                  </p>
                )}
                {currentSlide.content.metadata && (
                  <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
                    {currentSlide.content.metadata.map((m, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs">
                        <span className="text-slate-400 text-[10px] block">{m.label}</span>
                        <span className="font-bold text-slate-800">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TYPE: TOC */}
            {currentSlide.type === 'toc' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentSlide.content.cards?.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const pageMatch = item.tag?.match(/P\.?(\d+)/i);
                      const pageNum = pageMatch ? parseInt(pageMatch[1], 10) : (idx === 0 ? 3 : idx === 1 ? 8 : idx === 2 ? 21 : 38);
                      if (pageNum) setCurrentPage(pageNum);
                    }}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 text-left transition-colors flex flex-col justify-between group shadow-2xs"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {item.tag}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* TYPE: TABLE */}
            {currentSlide.type === 'table' && currentSlide.content.table && (
              <div className="space-y-2">
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-left text-xs">
                    {currentSlide.content.table.headers && (
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          {currentSlide.content.table.headers.map((h, i) => (
                            <th key={i} className="p-2.5">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                    )}
                    <tbody className="divide-y divide-slate-100">
                      {currentSlide.content.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-2.5 ${
                                cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-700'
                              } ${typeof cell === 'string' && (cell.includes('원') || cell.includes('%')) ? 'font-mono' : ''}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {currentSlide.content.table.note && (
                  <p className="text-[11px] text-slate-500 font-medium">
                    {currentSlide.content.table.note}
                  </p>
                )}
                {currentSlide.content.cards && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    {currentSlide.content.cards.map((c, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-blue-50/60 border border-blue-100 text-xs">
                        <span className="font-bold text-blue-900 block">{c.title}</span>
                        {c.desc && <span className="text-[11px] text-slate-600">{c.desc}</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TYPE: CARDS */}
            {currentSlide.type === 'cards' && (
              <div className="space-y-3">
                {currentSlide.content.highlight && (
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{currentSlide.content.highlight}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSlide.content.cards?.map((card, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                            {card.title}
                          </h4>
                          {card.highlight && (
                            <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">
                              {card.highlight}
                            </span>
                          )}
                        </div>
                        {card.desc && (
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                            {card.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {currentSlide.content.quote && (
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium">
                    <span className="font-bold text-emerald-800">[{currentSlide.content.quote.author}] </span>
                    <span>{currentSlide.content.quote.text}</span>
                  </div>
                )}
              </div>
            )}

            {/* TYPE: FINANCIAL */}
            {currentSlide.type === 'financial' && (
              <div className="space-y-3">
                {currentSlide.content.metadata && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {currentSlide.content.metadata.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-blue-50/80 border border-blue-100 text-center"
                      >
                        <span className="text-[10px] text-blue-700 block font-medium">
                          {m.label}
                        </span>
                        <span className="text-xs font-black text-blue-950 font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}
                {currentSlide.content.table && (
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-left text-[11px]">
                      <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                        <tr>
                          {currentSlide.content.table.headers?.map((h, i) => (
                            <th key={i} className="p-2">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {currentSlide.content.table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={
                              rIdx === currentSlide.content.table!.rows.length - 1
                                ? 'bg-blue-50/70 font-bold text-blue-900'
                                : rIdx % 2 === 0
                                ? 'bg-white'
                                : 'bg-slate-50/50'
                            }
                          >
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-2 font-mono">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {currentSlide.content.table?.note && (
                  <p className="text-[11px] text-slate-500 font-medium">
                    {currentSlide.content.table.note}
                  </p>
                )}
                {currentSlide.content.cards && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {currentSlide.content.cards.map((c, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                        <span className="font-bold text-slate-900 block">{c.title}</span>
                        {c.desc && <span className="text-[11px] text-slate-600 mt-1 block">{c.desc}</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TYPE: DIAGRAM / BULLETS */}
            {currentSlide.type === 'diagram' && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                {currentSlide.content.highlight && (
                  <div className="text-xs font-bold text-blue-700 pb-2 border-b border-slate-200">
                    {currentSlide.content.highlight}
                  </div>
                )}
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentSlide.content.bullets?.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* TYPE: STEPS */}
            {currentSlide.type === 'steps' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentSlide.content.steps?.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-50 border border-blue-200/70 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                        {step.step}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-2">{step.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TYPE: QUOTE */}
            {currentSlide.type === 'quote' && currentSlide.content.quote && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-blue-50/80 border-l-4 border-blue-600 text-slate-800">
                  <span className="text-xs font-bold text-blue-800 block mb-1">
                    [{currentSlide.content.quote.author}]
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed italic">
                    &ldquo;{currentSlide.content.quote.text}&rdquo;
                  </p>
                </div>
                {currentSlide.content.bullets && (
                  <ul className="space-y-1.5 text-xs text-slate-700 p-2">
                    {currentSlide.content.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* TYPE: CLOSING */}
            {currentSlide.type === 'closing' && (
              <div className="text-center py-1 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 px-1">
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    감사합니다 · 자료 출처
                  </h2>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    전체 참고 문헌 및 통계 출처 ({currentSlide.content.bullets?.length || 7}건)
                  </span>
                </div>

                <div className="text-left bg-slate-50/90 p-3 sm:p-3.5 rounded-xl border border-slate-200 overflow-y-auto max-h-[230px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5 text-[9.5px] sm:text-[10px] leading-snug text-slate-600">
                    {currentSlide.content.bullets?.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 hover:text-slate-900 transition-colors">
                        <span className="text-blue-500 font-bold shrink-0">·</span>
                        <span className="break-all">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Slide Footer */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-2.5 text-[11px] text-slate-400">
            <span className="truncate max-w-xs sm:max-w-md">
              {currentSlide.chapter} · {currentSlide.title}
            </span>
            <span className="font-mono font-bold text-slate-600 text-xs">
              {currentSlide.page} / {totalPages}
            </span>
          </div>
        </div>

        {/* Floating Prev Button (Left) */}
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          aria-label="이전 슬라이드"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-blue-600 text-slate-700 hover:text-white disabled:opacity-30 disabled:pointer-events-none shadow-md border border-slate-300 hover:border-blue-600 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Floating Next Button (Right) */}
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          aria-label="다음 슬라이드"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-blue-600 text-slate-700 hover:text-white disabled:opacity-30 disabled:pointer-events-none shadow-md border border-slate-300 hover:border-blue-600 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Slider & Navigation Bar - 밝은 테마 */}
      <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4 text-xs text-slate-700">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-2xs font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">이전 슬라이드</span>
        </button>

        {/* Slider bar for quick scrub */}
        <div className="flex-1 flex items-center gap-3 max-w-xl mx-auto">
          <input
            type="range"
            min={1}
            max={totalPages}
            value={currentPage}
            onChange={(e) => setCurrentPage(parseInt(e.target.value, 10))}
            className="w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
          />
          <span className="font-mono text-slate-500 font-semibold shrink-0 text-[11px]">
            {currentPage} / {totalPages}
          </span>
        </div>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs font-medium"
        >
          <span className="hidden sm:inline">다음 슬라이드</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

