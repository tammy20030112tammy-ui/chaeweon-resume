import React from 'react';

interface NavbarProps {
  onOpenPortfolioModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full border-b border-slate-200/80 bg-white shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col items-center justify-center text-center gap-4">
        {/* 1 & 2 & 3. 제목: 중앙 배치, 'welcome to my' 소문자 + 줄바꿈 + 'RESUME' 대문자 및 확대 */}
        <a
          href="#profile"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('profile');
          }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-500 lowercase">
            welcome to my
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase mt-0.5">
            RESUME
          </span>
        </a>

        {/* 4. 'Profile', 'Portfolio', 'About me' 버튼을 제목 아래 중앙에 배치 */}
        <nav className="flex items-center justify-center gap-6 sm:gap-10">
          <button
            onClick={() => scrollToSection('profile')}
            className="text-sm sm:text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer py-1 px-2"
          >
            Profile
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-sm sm:text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer py-1 px-2"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('about-me')}
            className="text-sm sm:text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer py-1 px-2"
          >
            About me
          </button>
        </nav>
      </div>
    </header>
  );
};

