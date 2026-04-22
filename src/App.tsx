import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Search, 
  Video, 
  LineChart, 
  ClipboardList,
  ChevronRight,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

import StrategicResearch from './pages/StrategicResearch';
import CompetitorAnalysis from './pages/CompetitorAnalysis';
import PaidAdsPlan from './pages/PaidAdsPlan';
import SEOAudit from './pages/SEOAudit';
import ClientDiscovery from './pages/ClientDiscovery';

const StrategyPages = [
  {
    id: 1,
    title: 'Strategic Research',
    icon: Building2,
    component: StrategicResearch,
  },
  {
    id: 2,
    title: 'Competitor Analysis',
    icon: Search,
    component: CompetitorAnalysis,
  },
  {
    id: 3,
    title: 'Paid Ads Growth',
    icon: Video,
    component: PaidAdsPlan,
  },
  {
    id: 4,
    title: 'Website SEO Audit',
    icon: LineChart,
    component: SEOAudit,
  },
  {
    id: 5,
    title: 'Client Discovery',
    icon: ClipboardList,
    component: ClientDiscovery,
  },
];

export default function App() {
  const [activePage, setActivePage] = useState(1);

  const ActiveComponent = StrategyPages.find((p) => p.id === activePage)?.component || StrategicResearch;

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col pt-8 pb-4 px-4 z-20 shadow-2xl relative">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe2 className="w-8 h-8 text-amber-500" />
            <h1 className="text-2xl font-bold tracking-tight text-white">JHA<span className="text-amber-500">360</span></h1>
          </div>
          <p className="text-xs text-slate-400 font-medium tracking-wide border-b border-slate-800 pb-4 leading-relaxed">
            STRATEGIC RESEARCH & <br/> GROWTH PLAN
          </p>
        </div>

        <nav className="flex-1 space-y-2">
          {StrategyPages.map((page) => {
            const Icon = page.icon;
            const isActive = activePage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => setActivePage(page.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  isActive 
                    ? 'bg-amber-500/10 text-amber-400 font-semibold' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-amber-500' : 'text-slate-500'}`} />
                <span className="text-sm">M-{page.id}:</span>
                <span className="text-sm truncate leading-tight">{page.title}</span>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto text-amber-500" />}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto px-4 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300">Piyush N Jha</p>
              <p className="text-[10px] text-slate-500">NITI Aayog Mentor</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto p-12 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
