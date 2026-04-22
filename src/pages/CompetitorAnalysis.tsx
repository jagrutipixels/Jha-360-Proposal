import React from 'react';
import { Target, Search, CheckCircle, BarChart3, ChevronRight } from 'lucide-react';

export default function CompetitorAnalysis() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider rounded-full uppercase border border-amber-500/20">
          Module 2
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white">Competitor Analysis</h2>
        <p className="text-slate-400 text-lg">360° Virtual Market Positioning for JHA360</p>
      </header>

      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2 mb-4">
          <Search className="text-amber-500" /> Executive Summary
        </h3>
        <p className="text-slate-300 leading-relaxed text-base">
          The virtual walkthrough market is evolving from simple photography to a critical "digital twin" requirement for local businesses. JHA360 differentiates itself by positioning these tours as high-conversion business assets rather than creative media. With a specialized track record of 27 projects across diverse sectors like real estate, hospitality, and retail, JHA360 competes by offering "Business-First" immersive technology.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-6">Direct Competitors</h3>
          <ul className="space-y-6">
            <li>
              <div className="font-semibold text-blue-400 mb-1">High-End Industrial Agencies</div>
              <p className="text-sm text-slate-400">Focus on large-scale manufacturing and educational campuses. They offer extreme detail but at price points often inaccessible to local retail or fitness centers.</p>
            </li>
            <div className="h-px bg-slate-800 w-full"></div>
            <li>
              <div className="font-semibold text-blue-400 mb-1">SEO-Driven Agencies</div>
              <p className="text-sm text-slate-400">These firms offer 360° tours as a "technical add-on" to SEO packages. Their focus is on the Google algorithm rather than visual storytelling or UX.</p>
            </li>
            <div className="h-px bg-slate-800 w-full"></div>
            <li>
              <div className="font-semibold text-blue-400 mb-1">Local High-Volume Providers</div>
              <p className="text-sm text-slate-400">Focus on speed and low cost (e.g., ₹12,000–₹15,000 packages). They often lack the official "Google Street View Trusted" certification.</p>
            </li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-6">Indirect Competitors</h3>
          <ul className="space-y-6">
            <li>
              <div className="font-semibold text-purple-400 mb-1">Static Architectural Photographers</div>
              <p className="text-sm text-slate-400">Provide high-quality visuals, but cannot offer the interactive "walk-through" experience or the Google Maps visibility benefits inherent to JHA360.</p>
            </li>
            <div className="h-px bg-slate-800 w-full"></div>
            <li>
              <div className="font-semibold text-purple-400 mb-1">Matterport Specialists</div>
              <p className="text-sm text-slate-400">Use proprietary software for high-end real estate. While visually superior, these tours often live behind links and are not natively integrated into Google Maps as effectively.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-100 flex items-center gap-3 mb-6">
          <BarChart3 className="text-pink-500 w-6 h-6" /> Pricing & Value Benchmarking
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="text-xs uppercase bg-slate-950 text-slate-300 border-b border-slate-800">
              <tr>
                <th className="px-6 py-4 font-bold border-r border-slate-800">Segment</th>
                <th className="px-6 py-4 font-bold border-r border-slate-800">Market Price Range</th>
                <th className="px-6 py-4 font-bold border-r border-slate-800">Standard Deliverables</th>
                <th className="px-6 py-4 font-bold">JHA360 Value-Add</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800 hover:bg-slate-950/50">
                <td className="px-6 py-4 font-medium text-white border-r border-slate-800">Boutique / Retail</td>
                <td className="px-6 py-4 border-r border-slate-800">₹15k – ₹25k</td>
                <td className="px-6 py-4 border-r border-slate-800">5–10 Viewpoints</td>
                <td className="px-6 py-4 font-semibold text-amber-500">Google Maps SEO Optimization</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-950/50">
                <td className="px-6 py-4 font-medium text-white border-r border-slate-800">Fitness / Leisure</td>
                <td className="px-6 py-4 border-r border-slate-800">₹25k – ₹45k</td>
                <td className="px-6 py-4 border-r border-slate-800">15–25 Viewpoints</td>
                <td className="px-6 py-4 font-semibold text-amber-500">Enhanced Customer Conversion</td>
              </tr>
              <tr className="hover:bg-slate-950/50">
                <td className="px-6 py-4 font-medium text-white border-r border-slate-800">Real Estate / Resort</td>
                <td className="px-6 py-4 border-r border-slate-800">₹60k – ₹1.5L+</td>
                <td className="px-6 py-4 border-r border-slate-800">40+ Viewpoints</td>
                <td className="px-6 py-4 font-semibold text-amber-500">Strategic Lead Gen Advisory</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2 mb-6">
            <CheckCircle className="text-emerald-500 w-6 h-6" /> Unique Competitive Edge
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300"><strong className="text-white">Strategic Leadership:</strong> Led by a Co-Founder with 15+ years of strategy and sales experience. Sold as a tool to "increase visibility," not just as a visual asset.</p>
            </li>
            <li className="flex gap-3">
              <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300"><strong className="text-white">Multisector Specialization:</strong> Proven capability in 27 projects spanning Real Estate, Gyms, Resorts, Restaurants. Allows for sector-specific "Success Blueprints."</p>
            </li>
            <li className="flex gap-3">
              <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300"><strong className="text-white">Institutional Credibility:</strong> Founder’s status as an Accredited Mentor (NITI Aayog) provides institutional trust that freelancers cannot match.</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg flex flex-col">
          <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2 mb-6">
            <Target className="text-rose-500 w-6 h-6" /> SWOT Analysis
          </h3>
          <div className="grid grid-cols-1 gap-4 flex-1">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <h4 className="text-emerald-400 font-bold text-sm mb-2 uppercase">Strengths</h4>
              <ul className="list-disc pl-4 text-xs text-slate-300 space-y-1">
                <li>Direct integration with Google Maps.</li>
                <li>High-speed execution (27 projects in months).</li>
                <li>Founder background in Background Verification ("Digital Truth").</li>
              </ul>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
              <h4 className="text-rose-400 font-bold text-sm mb-2 uppercase">Weaknesses</h4>
              <ul className="list-disc pl-4 text-xs text-slate-300 space-y-1">
                <li>Brand identity is in the scaling phase (Launched May 2025).</li>
                <li>Niche-specific marketing still being refined.</li>
              </ul>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <h4 className="text-blue-400 font-bold text-sm mb-2 uppercase">Opportunities</h4>
              <ul className="list-disc pl-4 text-xs text-slate-300 space-y-1">
                <li>Targeting Navi Mumbai developers for "Digital Open Houses."</li>
                <li>Leveraging New Bharat Skills connection for high-tech STEM labs.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
