import React from 'react';
import { FolderOpen, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface PortfolioSectionProps {
  onOpenModal: (projectId?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="portfolio" className="py-12 scroll-mt-20 border-t border-slate-200/80">
      {/* 1. 좌측 상단에 'Portfolio'이라고 제목을 적어줘. 강조하기 위해 파란색 글씨로 적어줘. */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
          Portfolio
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          서류철 아이콘을 클릭하여 상세 프로젝트 내용 및 실무 성과를 열람하세요.
        </p>
      </div>

      {/* 2. 서류철 모양의 아이콘 3개 (3 Interactive Project Dossier Folders) */}
      <div className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.slice(0, 3).map((project, idx) => {
            const folderNumbers = ['01', '02', '03'];
            const folderTags = ['개발기획·타당성', '자산관리(PM)', '프롭테크·주거금융'];
            const docPreviews = [
              'VFX 허브 복합개발 사업타당성 (IRR 검증)',
              'SPC스퀘어 현금흐름 개선 및 오버리지 렌트',
              '집테크 역방향 탐색 및 주거비(TCO) 최적화'
            ];

            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => onOpenModal(project.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenModal(project.id);
                  }
                }}
                className="group relative cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-blue-400 rounded-3xl pt-5 pb-2 transition-all duration-300"
                aria-label={`${project.title} 서류철 열기`}
              >
                {/* Subtle Ambient Back-glow on hover */}
                <div className="absolute inset-0 bg-blue-100/40 rounded-3xl blur-xl group-hover:bg-blue-200/50 transition-all duration-300 -z-10" />

                {/* Tactile Dossier Folder Graphic */}
                <div className="relative w-full h-80 transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
                  {/* Folder Backing Paper */}
                  <div className="absolute inset-0 rounded-2xl bg-sky-100/70 border border-sky-200 shadow-md" />

                  {/* Peeking Inner Documents */}
                  <div className="absolute -top-3 inset-x-4 h-16 rounded-t-xl bg-white border border-slate-200 shadow-xs transition-transform duration-300 group-hover:-translate-y-2.5 px-3.5 py-1.5 flex flex-col justify-start">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span className="truncate pr-1">{docPreviews[idx]}</span>
                      <span className="text-blue-600 font-bold shrink-0">{project.period.slice(0, 4)}</span>
                    </div>
                    <div className="w-3/4 h-1 bg-slate-200 rounded mt-1.5" />
                  </div>

                  {/* Folder Front Cover with Tab - 옅은 하늘색 (Light Sky Blue) */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-50 via-white to-sky-50/60 border-2 border-sky-300 shadow-lg flex flex-col justify-between p-5 overflow-hidden">
                    {/* Folder Tab on Top */}
                    <div className="absolute top-0 left-5 -translate-y-full h-5 px-3 rounded-t-lg bg-sky-100 border-t-2 border-x-2 border-sky-300 text-[10px] font-bold text-sky-900 flex items-center gap-1.5">
                      <span>DOSSIER #{folderNumbers[idx]}</span>
                      <span className="font-mono text-[9px] text-sky-700">· {folderTags[idx]}</span>
                    </div>

                    {/* Metallic Binder Clip on Top Right */}
                    <div className="absolute top-2.5 right-3.5 w-6 h-8 rounded-xs bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 border border-slate-400 shadow-2xs flex items-center justify-center">
                      <div className="w-3 h-5 border border-slate-600 rounded-xs" />
                    </div>

                    {/* Folder Header & Icon */}
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
                          <FolderOpen className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-mono font-bold text-blue-600 uppercase block truncate">
                            PROJECT {folderNumbers[idx]}
                          </span>
                        </div>
                      </div>

                      {/* Project Title & Description inside folder */}
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Folder Bottom Controls */}
                    <div className="pt-3 border-t border-sky-200/80 flex items-center justify-end">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-xs group-hover:bg-blue-700 transition-colors">
                        <span>서류철 열기</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
