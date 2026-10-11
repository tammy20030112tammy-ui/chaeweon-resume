/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProfileLicenseCard } from './components/ProfileLicenseCard';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutMeSection } from './components/AboutMeSection';
import { PortfolioModal } from './components/PortfolioModal';
import { PROFILE_INFO } from './data/portfolioData';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(undefined);

  const handleOpenPortfolioModal = (projectId?: string) => {
    setSelectedProjectId(projectId);
    setIsPortfolioModalOpen(true);
  };

  const handleClosePortfolioModal = () => {
    setIsPortfolioModalOpen(false);
    setSelectedProjectId(undefined);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation Bar */}
      <Navbar onOpenPortfolioModal={() => handleOpenPortfolioModal()} />

      {/* Main Page Content - Clean White Tone Layout */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        {/* 2. 가장 상단: <프로필> 영역 */}
        <ProfileLicenseCard />

        {/* 3. 중앙: <포트폴리오> 영역 */}
        <PortfolioSection onOpenModal={handleOpenPortfolioModal} />

        {/* 4. 하단: <자기소개> 영역 */}
        <AboutMeSection />
      </main>

      {/* Translucent Popup Modal for Portfolio Dossier */}
      <PortfolioModal
        isOpen={isPortfolioModalOpen}
        onClose={handleClosePortfolioModal}
        selectedProjectId={selectedProjectId}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-16 text-center text-xs text-slate-600">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">{PROFILE_INFO.name} 포트폴리오</span>
            <span>·</span>
            <span>{PROFILE_INFO.university} {PROFILE_INFO.college} {PROFILE_INFO.major}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${PROFILE_INFO.email}`} className="hover:text-blue-600 transition-colors">
              {PROFILE_INFO.email}
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors inline-flex items-center gap-1"
              title="맨 위로 이동"
            >
              <span>맨 위로</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
