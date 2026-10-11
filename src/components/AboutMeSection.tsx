import React, { useState } from 'react';
import { Mail, Check, MapPin, GraduationCap, Send, MessageSquare } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface InterviewQA {
  qNumber: string;
  aNumber: string;
  question: string;
  answer: string;
}

const INTERVIEW_ARCHIVE: InterviewQA[] = [
  {
    qNumber: 'Q1',
    aNumber: 'A1',
    question: '부동산 프로젝트 파이낸싱(PF) 및 투자 업무에 관심을 가지게 된 계기와 본인만의 강점은 무엇인가요?',
    answer:
      '단국대학교 부동산학과에서 학업을 이어나가며 부동산 시장의 흐름과 공간 기획, 그리고 재무적 타당성의 중요성을 깊이 있게 고민해 왔습니다. 특히 학부 과정 중 경험한 KB PF팀에서의 인턴십은 저에게 뚜렷한 목표를 심어주었습니다. 실무 현장에서 PF 구조화와 리스크 관리 업무를 직접 보조하며, 단순한 이론을 넘어 복잡한 금융의 흐름이 실제 물리적 공간의 개발로 이어지는 과정에 매력을 느꼈습니다. 학부생으로서 쌓아온 탄탄한 이론적 배경과 PF 실무 경험의 결합이 저만의 가장 큰 강점입니다.'
  },
  {
    qNumber: 'Q2',
    aNumber: 'A2',
    question: '학업이나 프로젝트 중 재무적 분석을 통해 자산의 가치를 창출하거나 개선해 본 경험이 있나요?',
    answer:
      "강남역 SPC 스퀘어 자산의 현금흐름 개선 프로젝트를 기획한 경험이 있습니다. 기존 마스터 리스 구조가 안고 있는 잠재적 리스크를 진단하고, 자산 가치를 극대화하기 위해 '오버리지 렌트(수익 합산형)' 도입과 '공실을 활용한 신규 F&B 브랜드 입점'이라는 두 가지 대안을 도출했습니다. 각 대안의 예상 매출과 손익분기점(BEP), 초기 투자비(CapEx) 등을 세밀하게 추정하여 내부수익률(IRR)을 비교 분석했으며, 이를 통해 임대인과 임차인 모두 윈윈할 수 있는 최적의 수익 구조 개선안을 제시할 수 있었습니다."
  },
  {
    qNumber: 'Q3',
    aNumber: 'A3',
    question: '주도적으로 부동산 개발을 기획해 본 경험이 있다면, 어떤 전략을 사용했는지 설명해 주세요.',
    answer:
      "경기도 고양시 장항동 일대에 'VFX 프로덕션 허브' 개발 사업을 기획한 프로젝트가 있습니다. 인근 킨텍스 및 고양 방송영상밸리 조성이라는 입지적 호재를 분석하여, 방송 및 테크 기업을 유치할 수 있는 인프라로 기획했습니다. 단순히 오피스 공간만 제공하는 것을 넘어, 하층부에는 시민들이 즐길 수 있는 미디어월 카페와 VFX 기술 체험관을 배치하고, 상층부에는 버츄얼 스튜디오와 스타트업 오피스를 연계하는 복합 공간 구성을 제안했습니다. 또한 직접 공사비와 특수 설비 비용을 산출하고 수익 모델을 추정하여 재무적 타당성(IRR)까지 검증해 냈습니다."
  },
  {
    qNumber: 'Q4',
    aNumber: 'A4',
    question: '금융/부동산 업계에서 글로벌 역량이 점차 중요해지고 있습니다. 본인은 어떤 준비가 되어 있나요?',
    answer:
      '꾸준한 어학 학습을 통해 토익 945점을 취득하며, 글로벌 금융 트렌드 파악과 해외 시장 리서치에 필요한 기본적인 어학 역량을 갖추었습니다. 외국계 자본의 유입과 크로스보더 딜(Cross-border Deal)이 잦은 부동산 금융 시장에서, 영문 계약서 검토나 해외 우수 개발 사례를 분석하는 데 있어 빠르고 정확하게 업무를 수행할 수 있는 든든한 기반이 될 것입니다.'
  },
  {
    qNumber: 'Q5',
    aNumber: 'A5',
    question: '입사 후 어떤 전문가로 성장하고 싶은지 포부를 말씀해 주세요.',
    answer:
      '단국대학교 부동산학과 재학생으로서 학문적 기초를 다지는 것에 만족하지 않고, KB PF팀 인턴십과 다양한 가치 평가·개발 기획 프로젝트를 통해 실무 감각을 선제적으로 익혀왔습니다. 아직 졸업을 앞둔 학부생이지만, 그동안 배운 분석력과 기획력을 현업에 빠르게 접목할 준비가 되어 있습니다. 입사 후에도 시장을 읽는 통찰력과 정교한 재무 모델링 역량을 바탕으로, 복잡한 딜(Deal) 속에서 숨겨진 자산 가치를 짚어내는 부동산 금융 전문가로 성장하겠습니다.'
  }
];

export const AboutMeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setContactMessage('');
      setSenderName('');
      setSenderEmail('');
    }, 4000);
  };

  return (
    <section id="about-me" className="py-12 scroll-mt-20 border-t border-slate-200/80">
      {/* 1. 좌측 상단에 'About Me'이라고 제목을 적어줘. 강조하기 위해 파란색 글씨로 적어줘. */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
          About Me
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          현업의 시각으로 고민하고 준비한, 저만의 금융·투자 면접 답변 아카이브입니다.
        </p>
      </div>

      <div className="space-y-10">
        {/* Q&A Interview Pairs - Grouped into 5 Individual Topic Boxes */}
        <div className="space-y-6">
          {INTERVIEW_ARCHIVE.map((item) => (
            <div
              key={item.qNumber}
              className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4 hover:border-blue-300 transition-colors"
            >
              {/* Box Header Badge: Topic / Question Number */}
              <div className="pb-3 border-b border-slate-100 text-xs font-semibold">
                <span className="text-blue-600 font-mono tracking-wider font-bold">
                  INTERVIEW SESSION · {item.qNumber} &amp; {item.aNumber}
                </span>
              </div>

              {/* 오른쪽 말풍선: 면접 질문 */}
              <div className="flex justify-end">
                <div className="max-w-2xl w-full sm:w-auto flex flex-col items-end">
                  <span className="text-[11px] font-mono font-bold text-blue-600 mb-1 flex items-center gap-1">
                    <span>{item.qNumber}</span>
                    <span className="text-slate-400">·</span>
                    <span className="font-sans font-medium text-slate-500">면접관 질문</span>
                  </span>
                  <div className="w-full bg-blue-600 text-white px-5 py-3.5 rounded-2xl rounded-tr-xs shadow-xs text-sm sm:text-base leading-relaxed font-semibold">
                    {item.question}
                  </div>
                </div>
              </div>

              {/* 왼쪽 말풍선: 신채원 답변 */}
              <div className="flex justify-start pt-1">
                <div className="max-w-3xl w-full flex flex-col items-start">
                  <span className="text-[11px] font-mono font-bold text-slate-500 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>{item.aNumber}</span>
                    <span className="text-slate-400">·</span>
                    <span className="font-sans font-medium text-slate-600">신채원 지원자 답변</span>
                  </span>
                  <div className="w-full bg-slate-50 border border-slate-200/80 shadow-2xs text-slate-800 px-5 sm:px-6 py-4 sm:py-5 rounded-2xl rounded-tl-xs text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Message Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-xl">
          {/* Left Contact Info */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                GET IN TOUCH
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
                당신과 함께할 기회를 기다립니다
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                부동산 금융, 개발 기획, 도시계획 프로젝트, 신입 채용 및 실무 인터뷰 문의 등 어떤 제안이든 환영합니다.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center gap-3 text-slate-200">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono text-slate-100">{PROFILE_INFO.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-blue-300 border border-slate-700 transition-colors"
                >
                  {copied ? '복사됨 ✓' : '이메일 복사'}
                </button>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{PROFILE_INFO.university} ({PROFILE_INFO.campus}) {PROFILE_INFO.college} {PROFILE_INFO.major}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{PROFILE_INFO.location}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/25"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>메일 보내기</span>
              </a>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                이력서 인쇄 / PDF
              </button>
            </div>
          </div>

          {/* Right Direct Message Form */}
          <div className="md:col-span-6 bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 shadow-inner">
            <h5 className="text-xs font-bold text-slate-200 flex items-center gap-2 mb-3">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span>간편 메시지 남기기</span>
            </h5>

            {messageSent ? (
              <div className="p-6 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-sm font-bold text-white">메시지가 성공적으로 전송되었습니다!</p>
                <p className="text-xs text-slate-300">확인 후 남겨주신 이메일로 신속히 회신드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="성함 / 담당자명"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="회신받을 이메일"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <textarea
                  required
                  rows={3}
                  placeholder="신채원 지원자에게 남기실 말씀이나 채용 관련 문의를 작성해주세요."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>메시지 전송</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
