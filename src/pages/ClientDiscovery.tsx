import React from 'react';
import { ClipboardList, Target, Compass, MessageSquare } from 'lucide-react';

export default function ClientDiscovery() {
  return (
    <div className="space-y-10 pb-20">
      <header className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider rounded-full uppercase border border-amber-500/20">
          Module 5
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white">Client Discovery & Alignment</h2>
        <p className="text-slate-400 text-lg">Social Media & Meta Ads Strategy for JHA360 (Prepared by Savoir Studio)</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
            <Compass className="text-amber-500" /> Research Foundation
          </h3>
          <ul className="space-y-5">
            <li>
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-1">Brand Identity</h4>
              <p className="text-slate-300 text-sm leading-relaxed">JHA360 is positioned as an official Google Street View Trusted Agency.</p>
            </li>
            <li>
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-1">Core Value Proposition</h4>
              <p className="text-slate-300 text-sm leading-relaxed">Increasing visibility by 28% and direction requests by 5x through immersive virtual walkthroughs.</p>
            </li>
            <li>
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-1">The Leadership Edge</h4>
              <p className="text-slate-300 text-sm leading-relaxed">Leveraging Piyush’s 15+ years of strategy and his role as an Accredited Mentor with NITI Aayog to move beyond "photography" and into "Business Growth Consulting".</p>
            </li>
          </ul>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
            <Target className="text-blue-500" /> Known Strategic Pillars
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">•</span>
              <p className="text-slate-300 text-sm"><strong className="text-white">Priority Verticals:</strong> Real Estate, Hospitality (Resorts/Banquets), Fitness (Gyms), Retail, and Corporate Offices.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">•</span>
              <p className="text-slate-300 text-sm"><strong className="text-white">Platform Focus:</strong> Google Maps integration as the primary engine, supported by Meta (Instagram/Facebook) for discovery.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">•</span>
              <p className="text-slate-300 text-sm"><strong className="text-white">The "Trust" Factor:</strong> Using the "Verified" aspect of 360-degree tours to solve the "Digital Truth" problem for businesses.</p>
            </li>
          </ul>
        </section>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
            <ClipboardList className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Client Requirement Questionnaire</h3>
            <p className="text-slate-400">To move from research to a Plan of Action (POA) for Meta Ads, please review and provide details below.</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Section A */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <h4 className="text-lg font-bold text-white mb-4 text-emerald-400 border-b border-slate-800 pb-2">A. Business & Growth Goals</h4>
            <div className="space-y-6">
              <div>
                <p className="text-slate-200 font-medium mb-2"><span className="text-emerald-500 mr-2">1.</span> Primary Objective</p>
                <p className="text-slate-400 text-sm mb-3">Is the immediate goal Brand Awareness (getting seen), Lead Generation (enquiries for tours), or direct sales for a specific niche?</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-500 italic text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4"/> Waiting for client input...
                </div>
              </div>
              
              <div>
                <p className="text-slate-200 font-medium mb-2"><span className="text-emerald-500 mr-2">2.</span> The "Hero" Niche</p>
                <p className="text-slate-400 text-sm mb-3">Out of the 27 successfully completed projects, which industry (e.g., Real Estate or Resorts) do you want to prioritize for the first month of Meta Ads?</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-500 italic text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4"/> Waiting for client input...
                </div>
              </div>

              <div>
                <p className="text-slate-200 font-medium mb-2"><span className="text-emerald-500 mr-2">3.</span> Revenue Target</p>
                <p className="text-slate-400 text-sm mb-3">What is the average ticket size for a standard JHA360 walkthrough, and what is the target ROI for this campaign?</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-500 italic text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4"/> Waiting for client input...
                </div>
              </div>
            </div>
          </div>

          {/* Section B */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <h4 className="text-lg font-bold text-white mb-4 text-blue-400 border-b border-slate-800 pb-2">B. Audience & Targeting</h4>
            <div className="space-y-6">
              <div>
                <p className="text-slate-200 font-medium mb-2"><span className="text-blue-500 mr-2">1.</span> Geographic Focus</p>
                <p className="text-slate-400 text-sm mb-3">Should we focus strictly on the Mumbai/Pune corridor, or are we targeting pan-India/NRI investors for the Real Estate vertical?</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-500 italic text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4"/> Waiting for client input...
                </div>
              </div>
              
              <div>
                <p className="text-slate-200 font-medium mb-2"><span className="text-blue-500 mr-2">2.</span> Customer Persona</p>
                <p className="text-slate-400 text-sm mb-3">Are we targeting business owners directly, or Marketing Heads of large hospitality and real estate firms?</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-500 italic text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4"/> Waiting for client input...
                </div>
              </div>
            </div>
          </div>

          {/* Section C */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <h4 className="text-lg font-bold text-white mb-4 text-purple-400 border-b border-slate-800 pb-2">C. Content & Creative Assets</h4>
            <div className="space-y-6">
              <div>
                <p className="text-slate-200 font-medium mb-2"><span className="text-purple-500 mr-2">1.</span> Raw Footage</p>
                <p className="text-slate-400 text-sm mb-3">Do you have high-quality raw 360-degree files or behind-the-scenes (BTS) footage of the team on-site that our studio can repurpose for ads?</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-500 italic text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4"/> Waiting for client input...
                </div>
              </div>
              
              <div>
                <p className="text-slate-200 font-medium mb-2"><span className="text-purple-500 mr-2">2.</span> Testimonials</p>
                <p className="text-slate-400 text-sm mb-3">Do we have video or text testimonials from the 27 completed projects to use as "Social Proof" in the Meta Ads funnel?</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-500 italic text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4"/> Waiting for client input...
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
