import React from 'react';
import { Target, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalOverview({ navigate, previousPage }: { navigate: (id: number) => void, previousPage?: number | null }) {
  return (
    <div className="space-y-10">
      <header className="space-y-4 border-b border-slate-200 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider rounded-full uppercase border border-orange-200">
          Module 5
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-950">Executive Summary</h2>
        <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
          The comprehensive roadmap to scale JHA360's operations, lower client CAC, and dominate the digital truth market.
        </p>
      </header>

      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-blue-950 flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
          <ShieldCheck className="text-blue-500 w-6 h-6" /> The Master Plan at a Glance
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 shadow-inner">
            <h4 className="font-bold text-blue-900 mb-2">1. Authority Positioning</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pivot from "creative agency" to <strong>Corporate Risk Mitigation</strong>. We leverage Piyush's Ex-VP background and NITI Aayog credentials to justify premium enterprise retainers over amateur local competitors.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 shadow-inner">
            <h4 className="font-bold text-blue-900 mb-2">2. The 5-Level Funnel</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Deploy specific cinematic hooks (Digital Window, Blindfold, Screen Dive) matched perfectly to target corridors (Real Estate, Gyms, Banquets) to aggressively accelerate <strong>Lead Velocity</strong>.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 shadow-inner">
            <h4 className="font-bold text-blue-900 mb-2">3. Architectural SEO</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Restructure JHA360.com to capture highly profitable "bottom-of-funnel" Google traffic via strict Service and Geo-Silos, reducing reliance solely on paid media spend.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-br from-blue-950 to-[#0a1e3f] border border-blue-900 rounded-2xl p-6 sm:p-10 shadow-xl text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 flex-1 w-full">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white">
            Ready to deploy Phase 1?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
            Let's execute the <strong>"Skin in the Game" strategy</strong>. We run the Phase 1 Meta Ads to explicitly prove the Customer Acquisition Cost (CAC). No high-risk massive retainers. Just data-backed ROI execution.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm text-blue-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Executive strategy call & timeline syncing.
            </li>
            <li className="flex items-center gap-2 text-sm text-blue-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Green-lighting the Level 1 "Digital Window" ad shoot.
            </li>
            <li className="flex items-center gap-2 text-sm text-blue-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Deploying the Phase 1 budget to hit target CPA.
            </li>
          </ul>
        </div>

        <div className="relative z-10 shrink-0 w-full md:w-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 text-center w-full md:w-80 shadow-2xl">
            <h4 className="text-xl font-bold mb-2">Connect Directly</h4>
            <p className="text-blue-200 text-xs mb-6">Bypass the calendar. Hit WhatsApp directly for immediate execution.</p>
            <button 
              onClick={() => {
                const message = encodeURIComponent("Hello! I reviewed the complete Strategy Proposal for JHA360. Let's connect to discuss rolling out Phase 1.");
                window.open(`https://wa.me/917400310443?text=${message}`, '_blank', 'noopener,noreferrer');
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-6 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] flex items-center justify-center gap-2"
            >
              Start Execution <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Credits Element */}
      <footer className="mt-24 pt-8 border-t border-slate-200 text-center animate-in fade-in duration-700">
        <p className="text-slate-500 text-sm font-medium">
          Designed by <strong className="text-blue-950 text-base">Abhishek Gujar</strong>
        </p>
      </footer>
    </div>
  );
}
