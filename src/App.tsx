import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Video, 
  LineChart, 
  ChevronRight,
  ArrowRight,
  Flag
} from 'lucide-react';

import StrategicResearch from './pages/StrategicResearch';
import CompetitorAnalysis from './pages/CompetitorAnalysis';
import PaidAdsPlan from './pages/PaidAdsPlan';
import SEOAudit from './pages/SEOAudit';
import FinalOverview from './pages/FinalOverview';

const StrategyPages = [
  { id: 1, title: 'Strategic Research', icon: BookOpen, component: StrategicResearch },
  { id: 2, title: 'Competitor Analysis', icon: Search, component: CompetitorAnalysis },
  { id: 3, title: 'Paid Ads Growth', icon: Video, component: PaidAdsPlan },
  { id: 4, title: 'Website SEO Audit', icon: LineChart, component: SEOAudit },
  { id: 5, title: 'Final Overview', icon: Flag, component: FinalOverview },
];

export default function App() {
  const [activePage, setActivePage] = useState(1);
  const [previousPage, setPreviousPage] = useState<number | null>(null);

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleNavigate = (newPage: number) => {
    setPreviousPage(activePage);
    setActivePage(newPage);
  };

  const ActiveComponent = StrategyPages.find((p) => p.id === activePage)?.component || StrategicResearch;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 flex flex-col">
      {/* Top Header - Proposal Style */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex flex-row justify-between items-center gap-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3 sm:gap-5">
          <img 
            src="https://raw.githubusercontent.com/jagrutipixels/Jha-360-Proposal/085dd1c95088a14e1561fc29a9dc26dde1a41cc8/02.png" 
            alt="JHA360 Logo" 
            className="h-8 sm:h-10 w-auto object-contain"
          />
          <div className="hidden sm:block h-10 w-px bg-slate-200"></div>
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Proposal Document</p>
            <p className="text-[10px] sm:text-sm font-bold text-blue-950">Scale & Growth Strategy</p>
          </div>
        </div>
        <div className="text-right w-auto">
          <p className="text-[8px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Prepared Exclusively For</p>
          <p className="text-xs sm:text-base font-extrabold text-blue-950">Piyush N Jha</p>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 sm:py-8 flex flex-col md:flex-row items-start gap-6 sm:gap-8 relative">
        {/* Table of Contents sidebar */}
        <aside className="w-full md:w-72 shrink-0 md:sticky md:top-28 bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-sm z-10 overflow-hidden">
          <div className="mb-3 px-2 flex items-center justify-between">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Table of Contents</h3>
            <span className="text-[10px] text-orange-500 font-bold">{activePage}/{StrategyPages.length}</span>
          </div>
          <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide no-scrollbar">
            {StrategyPages.map((page) => {
              const Icon = page.icon;
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleNavigate(page.id)}
                  className={`flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-xl text-left transition-all duration-300 shrink-0 whitespace-nowrap md:whitespace-normal md:w-full ${
                    isActive 
                      ? 'bg-blue-950 text-white font-medium shadow-md shadow-blue-900/20 scale-[1.02]' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-950'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                  <span className="text-[11px] sm:text-sm flex-1">{page.title}</span>
                  {isActive && <ChevronRight className="w-4 h-4 text-white/50 hidden md:block" />}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Document Content */}
        <main className="flex-1 w-full bg-white shadow-xl shadow-slate-200/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14 border border-slate-200 min-h-[60vh] sm:min-h-[75vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ActiveComponent navigate={handleNavigate} previousPage={previousPage} />
              
              {/* Proposal Page Navigation Footer */}
              <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-slate-100 flex flex-row items-center justify-between gap-4">
                {activePage > 1 ? (
                  <button onClick={() => handleNavigate(activePage - 1)} className="text-slate-500 hover:text-blue-950 text-[11px] sm:text-sm font-semibold transition-colors px-2 sm:px-4 py-2">
                    &larr; Previous Section
                  </button>
                ) : <div className="w-24 sm:w-32"></div>}
                
                {activePage < StrategyPages.length ? (
                  <button onClick={() => handleNavigate(activePage + 1)} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[11px] sm:text-sm font-bold transition-all shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto">
                    Next Section <ArrowRight className="w-4 h-4" />
                  </button>
                ) : <div className="w-24 sm:w-32"></div>}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
