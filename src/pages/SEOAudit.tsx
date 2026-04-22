import React from 'react';
import { LineChart, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';

export default function SEOAudit({ navigate, previousPage }: { navigate: (id: number) => void, previousPage?: number | null }) {
  // If they came from Paid Ads Growth (id: 3), the button goes text to WhatsApp. Otherwise, Book Your Audit.
  const isFromPaidAds = previousPage === 3;

  return (
    <div className="space-y-10">
      <header className="space-y-4 border-b border-slate-200 pb-8 sm:pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold tracking-wider rounded-full uppercase border border-orange-200">
          Module 4
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-950 leading-tight">Website & SEO Audit</h2>
        <p className="text-slate-500 text-base sm:text-lg font-medium max-w-2xl leading-relaxed">
          Critical gap analysis of JHA360.com to ensure organic traffic capture matches paid ad momentum.
        </p>
      </header>

      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-rose-900 flex items-center gap-2 mb-4">
          <AlertTriangle className="text-rose-600" /> Current State Assessment (Critical Bottleneck)
        </h3>
        <p className="text-rose-800 leading-relaxed font-medium text-base sm:text-lg">
          The current JHA360 website acts strictly as a static digital brochure rather than a dynamic lead capturing engine. It lacks the structural depth, top-of-funnel content pillars, and localized keyword optimization required to organically capture businesses actively searching for <em className="italic mix-blend-multiply">"increase google maps footfall"</em> or <em className="italic mix-blend-multiply">"360 virtual tours in Mumbai."</em> This creates a dangerous reliance solely on paid ad spend.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xl shadow-inner">
              1
            </div>
            <h3 className="text-lg font-bold text-blue-950">Architecture & Service Depth</h3>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold text-rose-600 uppercase tracking-widest border-b border-rose-100 pb-1">The Problem</p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">A flat site structure explicitly prevents Google from recognizing thematic authority. High-value, diverse services are dumped onto a single page rather than possessing dedicated, highly-optimized landing zones.</p>
            
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest border-b border-emerald-100 pb-1 mt-6">The Solution (URL Restructure)</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm font-mono text-slate-700 shadow-inner overflow-x-auto whitespace-nowrap">
              /services/google-street-view-trusted<br/>
              /services/real-estate-walkthroughs<br/>
              /services/retail-store-360-tours
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xl shadow-inner">
              2
            </div>
            <h3 className="text-lg font-bold text-blue-950">Localized Landing Page Engine</h3>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold text-rose-600 uppercase tracking-widest border-b border-rose-100 pb-1">The Problem</p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">JHA360 operates heavily and aggressively in specific infrastructure corridors (Mumbai, Navi Mumbai, Pune), yet surface-level audits reveal a total absence of location-specific geo-targeting queries.</p>
            
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest border-b border-emerald-100 pb-1 mt-6">The Solution (Geo-Silos)</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm font-mono text-slate-700 shadow-inner overflow-x-auto whitespace-nowrap">
              /locations/virtual-tours-navi-mumbai<br/>
              /locations/360-photography-pune
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xl shadow-inner">
              3
            </div>
            <h3 className="text-xl font-bold text-blue-950">Top-of-Funnel (ToFu) Content Strategy</h3>
          </div>
          <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">Business owners rarely wake up and explicitly search for "360 photographers". They search for their underlying business problem: <em className="text-slate-800 font-semibold bg-orange-50 px-1">"Why isn't my business showing up on Google Maps?"</em> We must intercept those queries.</p>
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-inner">
            <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
              <p className="text-[10px] font-extrabold text-blue-800 uppercase tracking-widest mb-2 bg-blue-100 px-2 py-1 rounded inline-block">TOFU: Awareness Pipeline</p>
              <h4 className="font-bold text-blue-950 text-lg mb-2">Educational Blog Pillar</h4>
              <ul className="mt-2 text-sm text-slate-600 space-y-1.5 list-disc pl-5">
                <li>"How to Optimize Google Business Profile in 2026 for Restaurants"</li>
                <li>"The Exact ROI of Google Street View for Mumbai Retailers"</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
              <p className="text-[10px] font-extrabold text-orange-800 uppercase tracking-widest mb-2 bg-orange-100 px-2 py-1 rounded inline-block">MOFU/BOFU: Proof Integration</p>
              <h4 className="font-bold text-blue-950 text-lg mb-2">Case Study Proof Engine</h4>
              <ul className="mt-2 text-sm text-slate-600 space-y-1.5 list-disc pl-5">
                <li>Deep-dive qualitative breakdowns of the 27 successful past projects.</li>
                <li>Dashboard screenshots highlighting specific metric jumps (e.g., +28% visibility).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-800 text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 mb-3">
            <RefreshCw className="text-orange-400 w-7 h-7 shrink-0" /> Seamless Funnel Integration
          </h3>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">Once high-quality organic traffic lands on these newly optimized architecture pages, they must be aggressively driven directly into the high-intent lead capture workflow mapped out in the Meta Ads Strategy.</p>
        </div>
        <button 
          onClick={() => {
            const message = encodeURIComponent(isFromPaidAds 
              ? "Hello Piyush! I am continuing from the Paid Ads module and want to discuss next steps for scaling JHA360." 
              : "Hello Piyush! I reviewed the Strategy Pipeline and would like to book a free Website & SEO Audit for my business.");
            window.open(`https://wa.me/917400310443?text=${message}`, '_blank', 'noopener,noreferrer');
          }} 
          className="shrink-0 relative z-10 w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold transition-transform active:scale-95 shadow-lg shadow-orange-500/20 text-center"
        >
          {isFromPaidAds ? 'Connect on WhatsApp' : 'Book Free Strategy Audit'}
        </button>
      </div>
    </div>
  );
}
