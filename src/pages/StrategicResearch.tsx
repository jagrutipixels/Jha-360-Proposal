import React from 'react';
import { Target, Users, LayoutDashboard, Award } from 'lucide-react';

export default function StrategicResearch() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider rounded-full uppercase border border-amber-500/20">
          Module 1
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white">Strategic Research Report</h2>
        <p className="text-slate-400 text-lg">Business Model Analysis and Meta Ad Action Plan</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-100 flex items-center gap-3 mb-6">
            <Award className="text-amber-500 w-6 h-6" /> Leadership Profile: Piyush N Jha
          </h3>
          <p className="text-slate-300 mb-4">
            Seasoned entrepreneur and digital transformation leader with a specialized focus on immersive technology.
          </p>
          <ul className="space-y-3 text-slate-400">
            <li><strong className="text-white">Professional Background:</strong> Over 15 years of experience in business strategy, sales, and EdTech.</li>
            <li><strong className="text-white">Current Roles:</strong> Co-Founder & Managing Partner of New Bharat Skills and the creator of JHA360.</li>
            <li><strong className="text-white">Credentials:</strong> Accredited Mentor with AIC-BIMTECH (Atal Innovation Mission, NITI Aayog).</li>
            <li><strong className="text-white">Core Expertise:</strong> Digital walkthroughs, business visibility, sales strategy, and leadership development.</li>
            <li><strong className="text-white">Recent Track Record:</strong> Successfully completed 27 projects in recent months across various categories including real estate, gyms, resorts, and corporate offices.</li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-100 flex items-center gap-3 mb-6">
            <LayoutDashboard className="text-blue-500 w-6 h-6" /> JHA360 Business Model Analysis
          </h3>
          <p className="text-slate-300 mb-4">
            JHA360 operates as a specialized B2B "Digital Walkthrough" service provider.
          </p>
          <ul className="space-y-3 text-slate-400 mb-6">
            <li><strong className="text-white">Core Value Proposition:</strong> Increasing business visibility and credibility through immersive 360 Degree virtual tours on Google Maps and other digital platforms.</li>
            <li><strong className="text-white">The Problem It Solves:</strong> Helps businesses stand out in a "digital-first" economy where traditional photos are no longer enough to build instant trust.</li>
          </ul>
          
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <h4 className="text-white font-semibold mb-4">Target Verticals:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3"><span className="text-blue-500">→</span> <div><strong className="text-white">Real Estate:</strong> High-end residential and commercial walkthroughs.</div></div>
              <div className="flex gap-3"><span className="text-blue-500">→</span> <div><strong className="text-white">Hospitality:</strong> Detailed tours for resorts, restaurants, and banquet halls.</div></div>
              <div className="flex gap-3"><span className="text-blue-500">→</span> <div><strong className="text-white">Retail & Fitness:</strong> Showcasing gyms, supermarkets, and specialty shops.</div></div>
              <div className="flex gap-3"><span className="text-blue-500">→</span> <div><strong className="text-white">Corporate:</strong> Playzones and professional office spaces.</div></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-100 flex items-center gap-3 mb-6">
            <Target className="text-emerald-500 w-6 h-6" /> Strategic Implementation Roadmap
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="text-xs uppercase bg-slate-950 text-slate-300 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-bold border-r border-slate-800">Phase</th>
                  <th className="px-6 py-4 font-bold border-r border-slate-800">Activity</th>
                  <th className="px-6 py-4 font-bold">Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800 hover:bg-slate-950/50">
                  <td className="px-6 py-4 font-medium text-white border-r border-slate-800">Phase 1: Production</td>
                  <td className="px-6 py-4 border-r border-slate-800">Capture "Behind the Scenes" footage of Piyush on-site with 360 gear.</td>
                  <td className="px-6 py-4">Build Founder Authority.</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-950/50">
                  <td className="px-6 py-4 font-medium text-white border-r border-slate-800">Phase 2: Launch</td>
                  <td className="px-6 py-4 border-r border-slate-800">Deploy "Niche-Specific" ads targeting Real Estate and Hospitality.</td>
                  <td className="px-6 py-4">High-quality lead generation.</td>
                </tr>
                <tr className="hover:bg-slate-950/50">
                  <td className="px-6 py-4 font-medium text-white border-r border-slate-800">Phase 3: Scaling</td>
                  <td className="px-6 py-4 border-r border-slate-800">Use the "Official Google Street View Trusted" badge as a primary hook.</td>
                  <td className="px-6 py-4">Differentiate from amateur photographers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900/40 to-transparent border border-indigo-500/20 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-400 flex items-center gap-3 mb-6">
            <Users className="text-indigo-400 w-6 h-6" /> Final Recommendations
          </h3>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3"><span className="text-indigo-500 font-bold mt-0.5">•</span> <div><strong className="text-white">Leverage LinkedIn Credibility:</strong> Sync Meta Ad content with Piyush’s professional LinkedIn presence to maintain a consistent brand voice as a "Business Consultant," not just a service provider.</div></li>
            <li className="flex gap-3"><span className="text-indigo-500 font-bold mt-0.5">•</span> <div><strong className="text-white">Focus on 'Verification':</strong> Given Piyush's 7+ year background in Background Verification, frame the 360-degree tours as a tool for "Verified Trust"—an essential asset for modern businesses.</div></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
