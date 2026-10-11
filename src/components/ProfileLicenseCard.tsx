import React, { useState } from 'react';
import { RotateCw, Award, Briefcase, Building2, GraduationCap, Globe, TrendingUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export const ProfileLicenseCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="profile" className="py-12 pb-16 sm:pb-20 scroll-mt-20">
      {/* 1. 좌측 상단에 'Profile'이라고 제목을 적어줘. 강조하기 위해 파란색 글씨로 적어줘. */}
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
          Profile
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          우측 하단을 눌러 자격 및 경력을 확인하세요.
        </p>
      </div>

      {/* 2. 면허증 카드 레이아웃 (Card Container with 3D Flip) - 하단 여백 및 공간적 여유 확보 */}
      <div className="w-full max-w-3xl mx-auto py-3 mb-8 sm:mb-12">
        <div
          className={`w-full perspective-1000 select-none cursor-pointer group transition-all duration-500 ease-out ${
            isFlipped ? 'min-h-[520px] sm:min-h-[460px]' : 'min-h-[300px] sm:min-h-[285px]'
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className={`relative w-full h-full duration-700 transform-style-3d transition-all ease-out ${
              isFlipped ? 'rotate-y-180 min-h-[520px] sm:min-h-[460px]' : 'min-h-[300px] sm:min-h-[285px]'
            }`}
          >
            {/* ===================== FRONT FACE ===================== */}
            <div
              className="absolute inset-0 w-full h-full rounded-2xl backface-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/40 border border-slate-300 shadow-xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between"
              style={{
                boxShadow: '0 16px 36px -12px rgba(37, 99, 235, 0.14), 0 0 0 1px rgba(226, 232, 240, 0.8)',
              }}
            >
              {/* Security Holographic Micro-pattern Background */}
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#1e40af 1px, transparent 1px), radial-gradient(#1e40af 1px, #ffffff 1px)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px',
                }}
              />

              {/* Card Body: Information (Left) & Photo Space (Right) */}
              <div className="relative z-10 w-full my-auto flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-5 sm:gap-6 py-2 sm:py-3">
                {/* Left: Text Information */}
                <div className="flex-1 min-w-0 space-y-3">
                  <div>
                    <div className="text-[10px] font-semibold text-blue-700 tracking-wide uppercase">
                      성명 / NAME
                    </div>
                    <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {PROFILE_INFO.name}
                      </span>
                      <span className="text-xs font-semibold text-slate-600">
                        ({PROFILE_INFO.nameHanja})
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {PROFILE_INFO.nameEn}
                      </span>
                    </div>
                  </div>

                  {/* Motto & Education Details */}
                  <div className="space-y-2 pt-2.5 border-t border-slate-200/80">
                    <div>
                      <p className="text-sm sm:text-base font-extrabold text-blue-600 leading-snug">
                        기초가 단단한 땅 위에, 가장 견고한 금융의 미래를 짓는다.
                      </p>
                      <p className="text-xs font-medium text-slate-700 leading-relaxed mt-1">
                        부동산의 본질이 탄탄한 기초에 있듯, 탄탄한 지식과 데이터 분석력으로 금융 전문성을 발휘하겠습니다.
                      </p>
                    </div>

                    <div className="space-y-1 text-xs text-slate-700 pt-1">
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="font-medium">이화금란고등학교 (졸업)</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-slate-800">
                        <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">단국대학교 죽전캠퍼스</span>
                          <span className="text-slate-600 ml-1.5">
                            도시계획·부동산학부 부동산학과 (27.02 졸업 예정)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Photo Space (image.png) */}
                <div className="shrink-0 flex flex-col items-center justify-center self-center sm:self-center">
                  <div className="relative w-28 sm:w-32 md:w-36 h-36 sm:h-40 md:h-44 rounded-xl overflow-hidden bg-slate-100 border-2 border-slate-200 shadow-md flex items-center justify-center">
                    <img
                      src="/image.png"
                      alt="신채원 프로필 사진"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.endsWith('/image.svg')) {
                          target.src = '/image.svg';
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Card Footer: 면허증 우측 하단 뒤집기 버튼 */}
              <div className="relative z-10 pt-2.5 border-t border-slate-200/80 flex items-center justify-end">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs shadow-blue-500/25 transition-all duration-200 hover:scale-105 active:scale-95 group-hover:ring-2 ring-blue-400/50"
                  title="자격증과 경력을 보려면 클릭하세요"
                >
                  <RotateCw className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  <span>뒷면 뒤집기 (자격/경력)</span>
                </button>
              </div>
            </div>

            {/* ===================== BACK FACE ===================== */}
            <div
              className="absolute inset-0 w-full h-full rounded-2xl backface-hidden rotate-y-180 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white border border-slate-700 shadow-xl overflow-hidden p-6 sm:p-7 pb-8 sm:pb-9 flex flex-col justify-between"
              style={{
                boxShadow: '0 16px 36px -12px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(71, 85, 105, 0.6)',
              }}
            >
              {/* Magnetic Strip across top */}
              <div className="absolute top-0 inset-x-0 h-9 bg-black/90 border-b border-slate-700 flex items-center px-6">
                <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-300 tracking-wider">
                  <span>MAGNETIC ENCRYPTED STRIPE · 2026-DKU-SCW</span>
                  <span className="hidden sm:inline">AUTHENTICATED PROFILE</span>
                </div>
              </div>

              {/* Security Signature & Header */}
              <div className="relative z-10 pt-6 sm:pt-7 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-blue-400 uppercase">
                    자격 및 주요 경력 인증서
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                    공인 자격 및 실무 활동 기록
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-300 border border-slate-700 px-2 py-0.5 rounded bg-slate-800/80">
                    서명: 신채원 (인)
                  </span>
                </div>
              </div>

              {/* 6. 공인 자격 및 실무 활동 기록: 1) 토익 945점, 2) OPIc AL 등급, 3) 투자자산운용사 자격증 보유, 4) KB 인턴활동 */}
              <div className="relative z-10 my-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 py-3 sm:py-4">
                {/* 1) 토익 945점 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/90 border border-blue-500/40 shadow-inner flex items-start gap-3 hover:border-blue-400 transition-colors">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-600/30 border border-blue-400/50 flex items-center justify-center text-blue-300 shrink-0 mt-0.5">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider">
                        어학 공인성적
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">YBM</span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 tracking-tight flex items-baseline gap-1.5">
                      <span>토익 (TOEIC)</span>
                      <span className="text-blue-400 text-base sm:text-lg font-black">945점</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-tight">
                      LC 480 / RC 465 · 글로벌 비즈니스 실무 영어 능통
                    </p>
                  </div>
                </div>

                {/* 2) OPIc AL 등급 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/90 border border-emerald-500/40 shadow-inner flex items-start gap-3 hover:border-emerald-400 transition-colors">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-600/30 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider">
                        영어 말하기 평가
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">ACTFL</span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 tracking-tight flex items-baseline gap-1.5">
                      <span>OPIc</span>
                      <span className="text-emerald-400 text-base sm:text-lg font-black">AL 등급</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-tight">
                      Advanced Low · 원어민 수준의 유창한 회화 역량
                    </p>
                  </div>
                </div>

                {/* 3) 투자자산운용사 자격증 보유 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/90 border border-purple-500/40 shadow-inner flex items-start gap-3 hover:border-purple-400 transition-colors">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-purple-600/30 border border-purple-400/50 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-purple-300 uppercase tracking-wider">
                        금융 전문 자격
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">금융투자협회</span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 tracking-tight flex items-baseline gap-1.5 flex-wrap">
                      <span>투자자산운용사</span>
                      <span className="text-purple-300 text-[11px] font-bold bg-purple-900/60 px-2 py-0.5 rounded border border-purple-400/40">
                        자격증 보유
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-tight">
                      부동산·펀드 자산운용 및 투자분석 전문 역량
                    </p>
                  </div>
                </div>

                {/* 4) KB 인턴활동 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/90 border border-amber-500/40 shadow-inner flex items-start gap-3 hover:border-amber-400 transition-colors">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider">
                        금융권 실무 경력
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">KB국민은행</span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 tracking-tight flex items-baseline gap-1.5">
                      <span>KB 인턴활동</span>
                      <span className="text-amber-400 text-[11px] font-bold bg-amber-950/70 px-2 py-0.5 rounded border border-amber-500/30">
                        수료
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-tight">
                      부동산금융부문 인턴십 수료 · 기업여신 담보평가 실무
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Back Footer with Flip Back Trigger */}
              <div className="relative z-10 pt-4 pb-2.5 sm:pb-3 border-t border-slate-700/80 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono">
                  ISSUED FOR SHIN CHAEWEON · PORTFOLIO USE ONLY
                </span>

                {/* Flip Back to Front button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(false);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                  title="앞면으로 돌아가기"
                >
                  <RotateCw className="w-3.5 h-3.5 rotate-180" />
                  <span>앞면 돌아가기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide text */}
      <div className="text-center mt-5 sm:mt-6 mb-4">
        <span className="text-xs text-slate-500">
          💡 우측 하단 버튼 또는 카드 전체를 클릭하면 앞·뒷면을 3D 애니메이션으로 뒤집어 볼 수 있습니다.
        </span>
      </div>
    </section>
  );
};
