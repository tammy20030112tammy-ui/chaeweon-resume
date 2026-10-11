import { Project, ProfileData } from '../types';

export const PROFILE_INFO: ProfileData = {
  name: '신채원',
  nameHanja: '申採沅',
  nameEn: 'SHIN CHAEWEON',
  university: '단국대학교',
  campus: '죽전캠퍼스',
  college: '도시계획·부동산학부',
  major: '부동산학과',
  studentId: '3221****',
  issueDate: '2024. 03. 02',
  email: 'tammy20030112tammy@gmail.com',
  phone: '010-82**-****',
  location: '서울시 마포구 백범로 230',
  toeicScore: 945,
  opicGrade: 'AL 등급',
  certifications: ['투자자산운용사 자격증 보유'],
  internship: 'KB 인턴활동',
  internshipDetail: 'KB국민은행 부동산금융부문 인턴십 (기업금융 및 상업용 부동산 담보가치 평가 보조)',
};

export const PROJECTS: Project[] = [
  {
    id: 'vfx-production-hub',
    title: 'VFX프로덕션허브 개발 기획안',
    category: '부동산금융',
    subtitle: '경기도 고양시 일산동구 장항동 1871 일대 VFX 프로덕션 허브 부동산 기획안',
    period: '2026.09 - 2026.12',
    role: '개발 기획 및 재무 타당성(IRR) 분석 총괄',
    organization: '단국대학교 부동산학과 캡스톤 프로젝트',
    summary: '경기도 고양시 일산동구 장항동 1871 일대에 킨텍스 및 고양 방송영상밸리 조성이라는 입지적 호재를 분석하여 테크·방송 기업을 유치할 수 있는 VFX 프로덕션 허브 복합 개발 사업을 기획했습니다. 미디어월 카페·VFX 기술 체험관과 버츄얼 스튜디오·스타트업 오피스를 연계하고 직접 공사비 산출 및 재무 모델링을 통해 사업 타당성(IRR)을 검증했습니다.',
    keyAchievements: [
      '킨텍스 및 고양 방송영상밸리 배후 수요와 입지 연계 복합 공간 개발 콘셉트 수립',
      '하층부 시민 개방형 미디어월 카페·기술 체험관 및 상층부 버츄얼 스튜디오 오피스 믹스 기획',
      '직접 공사비 및 특수 설비비 정밀 산출을 통한 현실적 투자비(CapEx) 모델링',
      '현금흐름 추정 및 할인율 기반 내부수익률(IRR) 도출로 재무적 타당성 검증'
    ],
    skills: ['부동산 개발기획', '재무타당성(IRR) 분석', '수지분석 모델링', '공간 MD 기획'],
    deliverables: [
      '장항동 VFX 프로덕션 허브 개발사업 기획서 및 사업계획 보고서',
      '직접 공사비 및 수익성 추정 재무 시뮬레이션 모델 (Excel)'
    ],
    metrics: [
      { label: '사업 대상지', value: '고양시 장항동 1871' },
      { label: '핵심 기획', value: 'VFX 허브 복합공간' },
      { label: '타당성 지표', value: 'IRR 수익성 검증' }
    ]
  },
  {
    id: 'spc-square-gangnam',
    title: 'SPC 스퀘어 강남 현금흐름 개선 프로젝트',
    category: '부동산금융',
    subtitle: '강남대로 상업용 부동산 SPC 스퀘어 강남의 자산 가치를 극대화하기 위한 PM(자산관리) 기획안',
    period: '2026.03 - 2026.06',
    role: '자산관리(PM) 기획 및 현금흐름 모델링 총괄',
    organization: '단국대학교 부동산학과 자산관리 스튜디오',
    summary: '강남역 핵심 상권의 상업용 부동산 SPC 스퀘어 자산의 기존 마스터 리스 구조가 안고 있는 잠재적 리스크를 진단하고, 자산 가치를 극대화하기 위해 오버리지 렌트(수익 합산형) 도입과 신규 F&B 브랜드 입점 대안을 도출했습니다. 손익분기점(BEP), CapEx 추정 및 내부수익률(IRR) 비교 분석을 통해 임대인과 임차인이 상생하는 최적 수익 개선안을 제시했습니다.',
    keyAchievements: [
      '기존 마스터 리스(Master Lease) 구조의 고정 임대료 한계 및 잠재 리스크 정밀 진단',
      '오버리지 렌트(Overage Rent, 매출 연동형) 도입 및 공실 활용 신규 F&B 테넌트 유치 전략 수립',
      '대안별 예상 매출, 손익분기점(BEP), 초기 투자비(CapEx) 정밀 추정',
      '10개년 현금흐름표 구축 및 대안별 내부수익률(IRR) 비교 분석으로 최적안 도출'
    ],
    skills: ['자산관리(PM)', '현금흐름 모델링', '오버리지 렌트 설계', 'CapEx & BEP 분석'],
    deliverables: [
      'SPC 스퀘어 강남 자산가치 극대화 PM 제안서 및 리포트',
      '대안별 10개년 현금흐름 및 IRR 민감도 분석 모델 (Excel)'
    ],
    metrics: [
      { label: '대상 자산', value: '강남역 SPC 스퀘어' },
      { label: '핵심 전략', value: '오버리지 렌트 도입' },
      { label: '분석 기법', value: '대안별 IRR 비교' }
    ]
  },
  {
    id: 'ziptech-proptech',
    title: '집테크: 2030세대를 위한 역방향 주거 탐색 및 시공간 재무 최적화 솔루션',
    category: '프롭테크',
    subtitle: '실질 체감 주거비(TCO) 방어와 합리적인 전월세 선택을 돕는 재무 설계형 프롭테크 서비스 개발',
    period: '2026.03 - 진행중',
    role: '서비스 기획 및 재무 모델 설계 (TCO 알고리즘 및 UI/UX 기획)',
    organization: '프롭테크 & 금융 데이터 융합 프로젝트',
    summary: '단순 보증금/월세 비교를 넘어 통근 기회비용, 대출 이자, 관리비 등 총 주거소유비용(TCO)을 통합 분석하여 2030 청년 세대의 실질 가처분소득을 방어하는 역방향 주거 탐색 솔루션을 기획했습니다.',
    keyAchievements: [
      '교통비 및 이동시간의 경제적 가치를 환산한 시공간 TCO(총 주거비) 산출 알고리즘 구축',
      '전세대출 금리 및 기회비용을 반영한 전세 vs 월세 실질 주거비 역방향 비교 모델링',
      '소득 및 직장 위치 기반 맞춤형 주거지 추천 인터랙티브 시뮬레이션 서비스 설계'
    ],
    skills: ['프롭테크(PropTech)', 'TCO 재무 모델링', '주거비 시뮬레이션', '데이터 분석'],
    deliverables: [
      '집테크(ZipTech) 서비스 기획서 및 TCO 산출 로직 정의서',
      '2030 맞춤형 주거 재무 최적화 인터랙티브 시뮬레이터'
    ],
    metrics: [
      { label: '핵심 타깃', value: '2030 청년세대' },
      { label: '분석 프레임', value: '시공간 TCO 최적화' },
      { label: '서비스 형태', value: '재무설계형 프롭테크' }
    ]
  },
  {
    id: 'qgis-spatial-analytics',
    title: '공간 빅데이터와 머신러닝을 활용한 수도권 상권 공실률 예측',
    category: '데이터분석',
    subtitle: '소상공인시장진흥공단 및 카드매출 데이터를 결합한 공간회귀모형 연구',
    period: '2024.03 - 2024.08',
    role: '데이터 분석가 (GIS 데이터 전처리 및 회귀분석 모델링)',
    organization: '부동산빅데이터 학술동아리',
    summary: '지하철 역세권 500m 버퍼 내의 유동인구, 배후 주거인구, 업종 다양성, 임대료 데이터를 QGIS와 Python으로 융합 분석하여 상권 쇠퇴 징후를 조기에 감지하는 예측 지표를 개발했습니다.',
    keyAchievements: [
      '수도권 84개 주요 상권의 5개년 시계열 공실률 추이 데이터셋 정제',
      '지리적 가중 회귀(GWR) 모형을 통해 역세권 거리와 업종 집중도의 탄력성 규명',
      '학부생 학술논문 발표회 포스터 세션 장려상 수상'
    ],
    skills: ['QGIS', 'Python (Pandas, GeoPandas)', '공간계량경제학', '통계분석'],
    deliverables: [
      'QGIS 공간 히트맵 및 상관분석 시각화 대시보드',
      '수도권 상권 쇠퇴 조기경보 지표 산출 연구보고서'
    ],
    metrics: [
      { label: '분석 상권 수', value: '84개소' },
      { label: '모델 예측력 R²', value: '0.81' },
      { label: '데이터 레코드', value: '15만 건+' }
    ]
  }
];

export const CERTIFICATIONS_AND_EXPERIENCE = [
  {
    title: '토익 (TOEIC)',
    detail: '945점 (LC 480 / RC 465)',
    date: '2024. 11',
    agency: 'YBM 한국TOEIC위원회',
    tag: '어학 역량',
    highlight: true,
  },
  {
    title: 'KB 인턴활동',
    detail: 'KB국민은행 부동산금융부문 인턴십 수료',
    date: '2025. 07 - 2025. 08',
    agency: 'KB국민은행 여신그룹',
    tag: '금융권 실무',
    highlight: true,
  },
  {
    title: '투자자산운용사 (Certified Investment Manager)',
    detail: '부동산 펀드 및 특별자산 운용 자격',
    date: '2025. 03',
    agency: '금융투자협회',
    tag: '금융 전문자격',
    highlight: false,
  },
  {
    title: '공인중개사 1차 시험 합격',
    detail: '부동산학개론, 민법 및 민사특별법 합격',
    date: '2024. 10',
    agency: '한국산업인력공단',
    tag: '부동산 법률',
    highlight: false,
  },
  {
    title: 'QGIS 공간정보전문가 교육과정',
    detail: '공간 빅데이터 분석 및 지리정보시스템 실무 수료',
    date: '2024. 08',
    agency: '국토연구원 공간정보아카데미',
    tag: '데이터 분석',
    highlight: false,
  }
];
