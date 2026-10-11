import React, { useEffect } from 'react';
import { X, Folder } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { PdfSlideViewer } from './PdfSlideViewer';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProjectId?: string;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  selectedProjectId,
}) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentProject: Project =
    PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];
  const projectIndex = PROJECTS.findIndex((p) => p.id === currentProject.id);
  const projectNumber = String(projectIndex >= 0 ? projectIndex + 1 : 1).padStart(2, '0');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Translucent / Clean Popup Window */}
      <div
        className="relative w-full max-w-5xl flex flex-col bg-slate-100 border border-slate-300 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 animate-in zoom-in-95"
        style={{
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Window Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 shadow-xs">
              <Folder className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider block">
                {`PROJECT ${projectNumber}`}
              </span>
              <h3 id="portfolio-modal-title" className="text-lg font-bold text-slate-900 tracking-tight">
                {currentProject.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gray Background Body (그레이색 바탕에 프로젝트 기획안 상세 내용 배치) */}
        <div className="w-full max-h-[75vh] overflow-y-auto bg-slate-100 p-4 sm:p-6 md:p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 md:p-9 space-y-6">
            {currentProject.id === 'spc-square-gangnam' ? (
              <>
                {/* 단락 1: 프로젝트 개요 및 자산 진단 */}
                <div className="space-y-2.5">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    01. 프로젝트 개요 및 자산 리스크 진단
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                    본 프로젝트는 대한민국 대표 핵심 상권인 강남대로변 상업용 부동산 &apos;SPC 스퀘어 강남&apos; 자산의 현금흐름 구조를 개선하고 자산 가치를 극대화하기 위한 자산관리(PM) 기획안입니다. 기존 단일 임차인 대상 고정 마스터 리스(Master Lease) 계약이 안고 있는 상권 인플레이션 미반영, 경기 변동 시 임대료 재협상 리스크, 그리고 공실 전환 시의 잠재적 현금흐름 충격을 면밀히 진단하여 자산 가치 재평가의 필요성을 도출했습니다.
                  </p>
                </div>

                {/* 단락 2: 수익 구조 개선 대안 도출 */}
                <div className="space-y-2.5 pt-5 border-t border-slate-100">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    02. 수익 구조 개선 대안 수립 (MD 개편 및 오버리지 렌트)
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                    자산 가치 극대화를 위해 두 가지 핵심 대안을 수립했습니다. 첫째, 기존 고정 임대료 방식에서 벗어나 기본 임대료에 매출액 일정 비율을 가산하는 &apos;오버리지 렌트(Overage Rent, 수익 합산형)&apos; 계약 구조를 도입했습니다. 둘째, 유휴 공간 및 층별 저효율 면적을 재배치하여 트렌디한 신규 F&B 브랜드를 입점시키는 테넌트 믹스(MD) 개편안을 마련했습니다. 이를 통해 강남역 유동인구의 집객력을 끌어올리고 임대인과 임차인 모두가 매출 성장을 공유하는 윈윈(Win-Win) 구조를 완성했습니다.
                  </p>
                </div>

                {/* 단락 3: 재무적 타당성 및 IRR 비교 분석 */}
                <div className="space-y-2.5 pt-5 border-t border-slate-100">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    03. 정량적 재무 분석 (BEP 및 내부수익률 IRR 비교)
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                    각 대안별 예상 매출액과 손익분기점(BEP), 리노베이션 및 인테리어 초기 투자비(CapEx)를 세밀하게 추정했습니다. 10개년 현금흐름 할인법(DCF) 모델을 직접 구축하여 기존 유지안과 개선 대안 간의 내부수익률(IRR) 및 순현재가치(NPV)를 비교 분석했습니다. 분석 결과, 오버리지 렌트 도입과 신규 MD 입점이 결합된 대안이 다운사이드 리스크를 방어하면서도 자산 매각 시점(Exit)의 환원율(Cap Rate)을 낮춰 자산 가치(Cap Value)를 최대화할 수 있음을 정량적으로 검증했습니다.
                  </p>
                </div>

                {/* 단락 4: 직무 핵심 역량 및 PM 성과 */}
                <div className="space-y-2.5 pt-5 border-t border-slate-100">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    04. 실무 역량 증명 및 PM 시사점
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                    이 프로젝트는 프라임급 상업용 부동산 자산의 실무 임대차 계약 구조 분석부터 상권 리서치, CapEx 투자 타당성 평가, 정교한 재무 모델링(DCF/IRR)까지 상업용 부동산 자산관리(PM) 및 투자운용 직무에 필요한 핵심 실무 역량을 종합적으로 발휘한 성과입니다. 고정관념에 머물지 않고 현금흐름의 본질을 분석하여 임차인의 영업 동기와 임대인의 수익성을 일치시킨 최적의 구조화 역량을 입증했습니다.
                  </p>
                </div>

                {/* 단락 5: 발표 보고서 슬라이드 (PDF 프리젠테이션 뷰어) */}
                <div className="space-y-3 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                        프로젝트 보고서
                      </span>
                      <p className="text-xs text-slate-500 mt-1">
                        아래 좌우 버튼이나 키보드 방향키(←, →)를 눌러 41장의 기획 보고서 슬라이드를 넘겨보실 수 있습니다.
                      </p>
                    </div>
                  </div>
                  <PdfSlideViewer projectId="spc-square-gangnam" />
                </div>
              </>
            ) : currentProject.id === 'ziptech-proptech' || currentProject.id === 'urban-renewal-plan' ? (
              <div className="py-24 sm:py-32 flex flex-col items-center justify-center text-center">
                <p className="text-lg sm:text-xl font-bold text-slate-400 tracking-wider">
                  진행 중
                </p>
              </div>
            ) : (
              <>
                {/* 단락 1: 프로젝트 개요 및 입지 타당성 */}
                <div className="space-y-2.5">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    01. 프로젝트 개요 및 입지 타당성 분석
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                    본 프로젝트는 경기도 고양시 일산동구 장항동 1871 일대(15,253.1㎡)에 &apos;VFX 프로덕션 허브&apos;를 조성하는 종합 부동산 개발 기획안입니다. 대상지가 관광문화단지도시개발구역 및 벤처기업육성촉진지구로 지정되어 있다는 점에 착안해 취득세와 재산세 감면 등 구체적인 세제 혜택을 분석하여 개발의 첫 단추를 뀄습니다. 이어 고양시의 방송업계 규제 완화 기조와 고양 방송영상밸리 조성 계획, 그리고 GTX-A 노선 개통 및 킨텍스 인근의 풍부한 인프라를 종합적으로 분석하여 해당 부지가 영상 산업 클러스터로서 최적화된 입지임을 타당성 있게 도출해 냈습니다.
                  </p>
                </div>

                {/* 단락 2: 건축 및 공간 계획 */}
                <div className="space-y-2.5 pt-5 border-t border-slate-100">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    02. 건축 및 공간 계획 (하이브리드 복합 공간 워크플로우)
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                    건축 및 공간 계획에 있어서는 단순한 업무용 오피스를 넘어, B2B 업무 시설과 B2C 문화 체험 공간이 결합된 하이브리드 복합 공간을 기획했습니다. 지하 3층에서 지상 10층(건축면적 9,662.02㎡) 규모의 건물을 구상하며 건물 내에서 기획부터 촬영, 제작까지 원스톱으로 이루어지는 워크플로우를 구축한 것이 핵심입니다. 1~2층은 대형 LED 미디어 월과 팝업스토어를 갖춘 시민 개방형 오픈스페이스로 조성하여 부가 수익과 집객 효과를 노렸으며, 3층은 고가의 장비 대여실, 4~5층은 실제 촬영이 진행되는 버츄얼 프로덕션 LED Wall 스튜디오로 배치했습니다. 또한 6~7층은 입주사 간 지식 공유가 가능한 공용 크리에이티브 라운지, 8~10층은 스타트업 오피스로 구성하여 독보적인 VFX 생태계를 완성했습니다.
                  </p>
                </div>

                {/* 단락 3: 재무적 타당성 검증 */}
                <div className="space-y-2.5 pt-5 border-t border-slate-100">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    03. 재무적 타당성 검증 (IRR 현금흐름 모델링)
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                    특히 이 프로젝트에서 가장 심혈을 기울인 부분은 정량적 데이터를 바탕으로 재무적 타당성을 검증한 IRR(내부수익률) 모델링입니다. 토지 비용과 건물 내외부의 특수 설비(LED 월, 인터랙티브 센서 등) 구축 비용을 상세히 합산하여 총 투자비(CapEx)를 약 3,541억 원으로 산출했습니다. 이에 더해 카페 위탁 운영 수수료, 관리 인건비, 유틸리티 비용 등을 꼼꼼히 반영해 영업경비(OpEx)를 약 24.4억 원으로 추정하고, 오피스 임대 및 팝업 대관 등을 통한 1년 차 잠재총소득(PGI)을 약 85.2억 원으로 예측했습니다. 이를 바탕으로 임대료 상승률(3%)과 공실률(3%)을 변수로 적용한 10개년 현금흐름표를 직접 구축함으로써, 목표 수익률 7% 하에서 최종 IRR 3%라는 현실적인 투자 지표를 도출했습니다.
                  </p>
                </div>

                {/* 단락 4: 직무 핵심 역량 및 실무 증명 */}
                <div className="space-y-2.5 pt-5 border-t border-slate-100">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    04. 직무 핵심 역량 및 실무 증명
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                    이러한 일련의 프로젝트 수행 과정은 부동산 금융 및 외국계 부동산 서비스 기업의 리서치, 데이터 분석, 자산 관리(PM) 등 백오피스 직무에 필요한 핵심 역량을 실무적으로 완벽히 증명합니다. 거시적인 지자체 정책과 124.5억 달러 규모로 성장 중인 콘텐츠 시장의 수출 통계 데이터를 활용해 개발 명분을 논리적으로 입증한 점은 심도 있는 시장 리서치 역량을 대변합니다. 무엇보다 복잡한 변수를 통제하며 직접 CapEx와 OpEx를 산출해 현금흐름 모델링을 수행한 데이터 분석력, 그리고 발생 가능한 7가지 운영 리스크를 선제적으로 식별하고 경기주택도시공사(GH)와 민간 시행사가 결합한 &apos;민관합동 PFV&apos; 사업 구조를 기획해 낸 고도화된 구조화 역량은, 숫자와 데이터에 기반하여 리스크를 엄격히 제어해야 하는 금융 실무에 즉시 투입될 수 있는 인재임을 보여주는 강력한 증거입니다.
                  </p>
                </div>

                {/* 단락 5: 발표 보고서 슬라이드 (PDF 프리젠테이션 뷰어) */}
                <div className="space-y-3 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                        프로젝트 보고서
                      </span>
                      <p className="text-xs text-slate-500 mt-1">
                        아래 좌우 버튼이나 키보드 방향키(←, →)를 눌러 52장의 기획 보고서 슬라이드를 넘겨보실 수 있습니다.
                      </p>
                    </div>
                  </div>
                  <PdfSlideViewer projectId="vfx-production-hub" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
