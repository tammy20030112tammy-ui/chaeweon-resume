export interface Project {
  id: string;
  title: string;
  category: '부동산금융' | '도시계획' | '인턴십/실무' | '데이터분석' | '프롭테크';
  subtitle: string;
  period: string;
  role: string;
  organization: string;
  summary: string;
  keyAchievements: string[];
  skills: string[];
  deliverables: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProfileData {
  name: string;
  nameHanja?: string;
  nameEn: string;
  university: string;
  campus: string;
  college: string;
  major: string;
  studentId: string;
  issueDate: string;
  email: string;
  phone: string;
  location: string;
  toeicScore: number;
  opicGrade?: string;
  certifications?: string[];
  internship: string;
  internshipDetail: string;
}
