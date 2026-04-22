import React from 'react';
import { Target, Users, PlayCircle, Funnel, ArrowRight } from 'lucide-react';

export default function PaidAdsPlan() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider rounded-full uppercase border border-amber-500/20">
          Module 3
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white">Social Media & Paid Ads Growth Plan</h2>
        <p className="text-slate-400 text-lg">Video Strategy and Meta Ads Funnel Action Plan</p>
      </header>

      <section className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2 mb-3">
          <Target className="w-6 h-6" /> The Core Objective
        </h3>
        <p className="text-slate-300 leading-relaxed">
          Right now, JHA360 has an amazing service (Google Street View 360° tours) and a great track record with 27 completed projects. Our goal is to take that success and show it to thousands of local business owners. We want to stop them from scrolling, make them realize their current Google listing is hurting their business, and get them to contact JHA360 for a virtual tour.
        </p>
      </section>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
          <Users className="text-amber-500" /> The Target Audience
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors rounded-2xl p-8 flex flex-col gap-4 shadow-lg">
            <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors border-b border-slate-800 pb-4">
              Group 1: "Big Ticket" Clients <span className="text-slate-400 text-sm block mt-1 font-normal uppercase">High Revenue</span>
            </h4>
            <div className="space-y-4 text-sm mt-2">
              <p><strong className="text-white">Who they are:</strong> Real Estate Builders, Premium Resorts, Large Banquet Halls, and International Schools.</p>
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <p className="text-slate-300"><strong className="text-amber-500">Why they need you:</strong> They need to show off massive, expensive properties to people who might not be in the same city (like NRI buyers or out-of-town guests).</p>
              </div>
            </div>
          </div>
          <div className="group bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors rounded-2xl p-8 flex flex-col gap-4 shadow-lg">
            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors border-b border-slate-800 pb-4">
              Group 2: "Quick Win" Clients <span className="text-slate-400 text-sm block mt-1 font-normal uppercase">Fast Sales</span>
            </h4>
            <div className="space-y-4 text-sm mt-2">
              <p><strong className="text-white">Who they are:</strong> Local Gyms, Cafes, Furniture Showrooms, and Supermarkets.</p>
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <p className="text-slate-300"><strong className="text-blue-400">Why they need you:</strong> They are fighting with competitors on the same street and need to stand out on Google Maps immediately to get more foot traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3 mt-8">
          <PlayCircle className="text-emerald-500" /> The Video Content Plan
        </h3>
        <p className="text-slate-400">Standard photo ads do not work for a 360-degree product. We need to create engaging videos that show the experience.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 text-emerald-400">A. "Founder Trust" Videos</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p><strong className="text-white">The Idea:</strong> People buy from experts. We record you speaking directly to the camera, explaining your 15+ years of experience and NITI Aayog mentorship.</p>
              <p><strong className="text-white">The Message:</strong> "Don't just hire a photographer. Hire a Google Trusted Agency that knows how to increase your visibility by 28%."</p>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 text-emerald-400">B. "Show-Off" Reels</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p><strong className="text-white">The Idea:</strong> Fast-paced, cool-looking videos made for Instagram. We record a phone screen showing what it looks like to "walk through" one of your best projects.</p>
              <p><strong className="text-white">The Message:</strong> "This is what your customers could be seeing right now. Instead, they are looking at blurry photos."</p>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 text-emerald-400">C. "Happy Client" Videos</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p><strong className="text-white">The Idea:</strong> We take your best past clients and record them talking about the results they got after you mapped their business.</p>
              <p><strong className="text-white">The Message:</strong> "Since JHA360 did our tour, our phone rings 5 times more often for directions."</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
          <Funnel className="text-amber-500" /> The 3-Step Strategy (Meta Ads Funnel)
        </h3>
        
        <div className="space-y-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-amber-500 shrink-0 border border-slate-700">1</div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Get Their Attention</h4>
              <p className="text-slate-400 text-sm">We show the "Show-Off" Reels to business owners in Mumbai and Pune. The goal here is just to make them go, "Wow, I want that for my business."</p>
            </div>
          </div>
          
          <div className="ml-5 w-px h-6 bg-slate-700"></div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-amber-500 shrink-0 border border-slate-700">2</div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Build Trust</h4>
              <p className="text-slate-400 text-sm">If they watched the first video but didn't contact us, we show them a "Founder Trust" or "Happy Client" video a few days later. This proves you are a certified expert who delivers real results.</p>
            </div>
          </div>
          
          <div className="ml-5 w-px h-6 bg-slate-700"></div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center font-bold text-amber-400 shrink-0 border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">3</div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Get the Lead</h4>
              <p className="text-slate-400 text-sm">We run a final ad with a clear offer. They click a button on Instagram/Facebook that says "Get a Free Google Visibility Audit" or "Chat on WhatsApp." The lead goes straight to your phone so you can close the deal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
