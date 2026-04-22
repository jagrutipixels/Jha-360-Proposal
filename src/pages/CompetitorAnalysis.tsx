import React from 'react';
import { Target, Search, CheckCircle, BarChart3, ChevronRight, ArrowRight } from 'lucide-react';

export default function CompetitorAnalysis({ navigate }: { navigate: (id: number) => void }) {
  return (
    <div className="space-y-10">
      <header className="space-y-4 border-b border-slate-200 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider rounded-full uppercase border border-orange-200">
          Module 2
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-950">Competitor Analysis</h2>
        <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
          360° Virtual Market Positioning for JHA360.
        </p>
      </header>

      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-blue-950 flex items-center gap-2 mb-4">
          <Search className="text-blue-500" /> Executive Summary
        </h3>
        <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
          The virtual walkthrough market is evolving from simple photography to a critical "digital twin" requirement for local businesses. JHA360 differentiates itself by positioning these tours as high-conversion business assets rather than creative media. With a specialized track record of 27 projects across diverse sectors, JHA360 competes by offering <strong className="text-blue-950 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm mx-1">"Business-First"</strong> immersive technology that focuses fiercely on measurable ROI and Google visibility.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-blue-950 mb-6 border-b border-slate-100 pb-4">Direct Competitors</h3>
          <ul className="space-y-6">
            <li>
              <div className="font-bold text-orange-600 mb-2 text-lg">High-End Industrial Agencies</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3">Focus on large-scale manufacturing and educational campuses. They offer extreme detail but at price points often inaccessible to local retail or fitness centers.</p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 indent-0">
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">JHA360 Counter-Measure:</span>
                <span className="text-sm font-medium text-slate-700">Agility & Speed. Deliver 80% of the immersive value at a strategic price point optimized for rapid local deployments.</span>
              </div>
            </li>
            <div className="h-px bg-slate-100 w-full"></div>
            <li>
              <div className="font-bold text-orange-600 mb-2 text-lg">SEO-Driven Agencies</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3">These firms offer 360° tours as a "technical add-on" to SEO packages. Their focus is on the Google algorithm rather than visual storytelling or UX.</p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 indent-0">
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">JHA360 Counter-Measure:</span>
                <span className="text-sm font-medium text-slate-700">Cinematic execution. Pair strong SEO fundamentals with high-end visual aesthetics to dominate both search engines *and* human brand perception.</span>
              </div>
            </li>
            <div className="h-px bg-slate-100 w-full"></div>
            <li>
              <div className="font-bold text-orange-600 mb-2 text-lg">Local High-Volume Providers</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3">Focus on extreme speed and low cost (e.g., ₹10,000–₹15,000 packages). They use entry-level gear and often lack the official "Google Street View Trusted" certification.</p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 indent-0">
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">JHA360 Counter-Measure:</span>
                <span className="text-sm font-medium text-slate-700">The "Trusted Badge" authority. Educate clients on why cheap, non-verified uploads actively harm their premium brand reputation.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-blue-950 mb-6 border-b border-slate-100 pb-4">Indirect Competitors</h3>
          <ul className="space-y-6">
            <li>
              <div className="font-bold text-blue-600 mb-2 text-lg">Static Architectural Photographers</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3">Provide phenomenally lit, high-quality static visuals. However, they completely lack the interactive "walk-through" experience demanded by modern connected consumers.</p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 indent-0">
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">JHA360 Counter-Measure:</span>
                <span className="text-sm font-medium text-slate-700">Sell the concept of "Digital Transparency". Prove that consumers trust un-edited 360 spatial data significantly more than highly-photoshopped 2D angles.</span>
              </div>
            </li>
            <div className="h-px bg-slate-100 w-full"></div>
            <li>
              <div className="font-bold text-blue-600 mb-2 text-lg">Matterport Specialists</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3">Use proprietary, expensive scanning hardware for high-end real estate (Dollhouse views). While visually stunning, these tours often live behind slow-loading links and are historically terrible at natively integrating into Google Maps.</p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 indent-0">
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">JHA360 Counter-Measure:</span>
                <span className="text-sm font-medium text-slate-700">Highlight frictionless Google Maps native integration. Businesses need traffic from Google Maps, not just a fancy link sitting in an email payload.</span>
              </div>
              <button onClick={() => navigate(4)} className="w-full text-center mt-4 bg-orange-50 hover:bg-orange-100 text-sm font-bold text-orange-600 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-colors border border-orange-200">
                Review SEO Integration Strategy <ArrowRight className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-2xl font-bold text-blue-950 flex items-center gap-3">
            <BarChart3 className="text-orange-500 w-6 h-6" /> Pricing & Value Benchmarking
          </h3>
          <p className="text-slate-500 mt-2 text-sm max-w-3xl">This matrix defines how JHA360 justifies its price points compared to the broader market by always attaching a strategic "Value-Add" over raw deliverables.</p>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-sm text-slate-600 min-w-[800px]">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 text-xs uppercase tracking-wider font-bold">
              <tr>
                <th className="px-6 py-5 border-r border-slate-100 w-1/4">Segment</th>
                <th className="px-6 py-5 border-r border-slate-100 w-1/5">Market Price Range</th>
                <th className="px-6 py-5 border-r border-slate-100 w-1/4">Standard Industry Deliverable</th>
                <th className="px-6 py-5 text-blue-950">JHA360 Strategic Value-Add</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-5 font-bold text-slate-800 border-r border-slate-100">Boutique / Retail</td>
                <td className="px-6 py-5 border-r border-slate-100 font-medium font-mono text-slate-500">₹15k – ₹25k</td>
                <td className="px-6 py-5 border-r border-slate-100">5–10 Viewpoints (Basic Stitching)</td>
                <td className="px-6 py-5 font-bold text-orange-600 bg-orange-50/30">Native Google Maps SEO Optimization for localized "Near Me" search dominance.</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-5 font-bold text-slate-800 border-r border-slate-100">Fitness / Leisure</td>
                <td className="px-6 py-5 border-r border-slate-100 font-medium font-mono text-slate-500">₹25k – ₹45k</td>
                <td className="px-6 py-5 border-r border-slate-100">15–25 Viewpoints + Standard UI</td>
                <td className="px-6 py-5 font-bold text-orange-600 bg-orange-50/30">Enhanced Customer Conversion mapping (Hotspots, direct booking links in tour).</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-5 font-bold text-slate-800 border-r border-slate-100">Real Estate / Resort</td>
                <td className="px-6 py-5 border-r border-slate-100 font-medium font-mono text-slate-500">₹60k – ₹1.5L+</td>
                <td className="px-6 py-5 border-r border-slate-100">40+ Viewpoints + Drone Integration</td>
                <td className="px-6 py-5 font-bold text-orange-600 bg-orange-50/30">Strategic Lead Gen Advisory & NRI-targeting Paid Media integration frameworks.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        <div className="bg-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-800/50 rounded-full blur-2xl pointer-events-none"></div>
          <h3 className="text-xl font-bold flex items-center gap-3 mb-6 relative z-10">
            <CheckCircle className="text-emerald-400 w-6 h-6" /> Unique Competitive Edge
          </h3>
          <ul className="space-y-5 relative z-10">
            <li className="flex gap-3 items-start bg-blue-900/30 p-4 rounded-xl border border-blue-800/50">
              <ChevronRight className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed"><strong className="text-white block mb-1">Strategic Leadership:</strong> Led by a Founder with 15+ years of strategy and sales experience. Sold explicitly as a tool to "increase local visibility and sales," not just as a creative media asset.</p>
            </li>
            <li className="flex gap-3 items-start bg-blue-900/30 p-4 rounded-xl border border-blue-800/50">
              <ChevronRight className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed"><strong className="text-white block mb-1">Multisector Specialization:</strong> Proven capability in 27 rapid projects spanning Real Estate, Gyms, Resorts, Restaurants. This breadth allows for sector-specific "Success Blueprints."</p>
            </li>
            <li className="flex gap-3 items-start bg-blue-900/30 p-4 rounded-xl border border-blue-800/50">
              <ChevronRight className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed"><strong className="text-white block mb-1">Institutional Credibility:</strong> Founder’s status as an Accredited Mentor (NITI Aayog) provides institutional trust that freelance photographers simply cannot match when dealing with large corporate entities.</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold text-blue-950 flex items-center gap-3 mb-6">
            <Target className="text-rose-500 w-6 h-6" /> Deep-Dive SWOT Analysis
          </h3>
          <div className="grid grid-cols-1 gap-4 flex-1">
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 shadow-inner">
              <h4 className="text-emerald-800 font-extrabold text-sm mb-3 uppercase tracking-wider flex items-center justify-between">
                Strengths
                <span className="text-emerald-500 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">Internal Advantage</span>
              </h4>
              <ul className="list-disc pl-5 text-sm sm:text-base text-emerald-950 space-y-2 font-medium">
                <li>Immediate, native integration with Google Maps.</li>
                <li>Hyper-efficient operational speed (27 successful projects completed in months).</li>
                <li>Founder's rare background in Corporate Background Verification (Pushing the "Digital Truth" narrative).</li>
              </ul>
            </div>
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-5 shadow-inner">
              <h4 className="text-rose-800 font-extrabold text-sm mb-3 uppercase tracking-wider flex items-center justify-between">
                Weaknesses
                <span className="text-rose-500 bg-rose-100 px-2 py-0.5 rounded text-[10px]">Internal Vulnerability</span>
              </h4>
              <ul className="list-disc pl-5 text-sm sm:text-base text-rose-950 space-y-2 font-medium">
                <li>Brand identity and market awareness are still in the early scaling phase.</li>
                <li>Heavy reliance on founder-led sales; requiring systematization.</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-inner">
              <h4 className="text-blue-800 font-extrabold text-sm mb-3 uppercase tracking-wider flex items-center justify-between">
                Opportunities
                <span className="text-blue-600 bg-blue-100 px-2 py-0.5 rounded text-[10px]">Market Catalyst</span>
              </h4>
              <ul className="list-disc pl-5 text-sm sm:text-base text-blue-950 space-y-2 font-medium">
                <li>Exploiting Navi Mumbai/Pune infrastructure boom to sell "Digital Open Houses" to real estate developers.</li>
                <li>Integrating with New Bharat Skills to upgrade massive educational campuses and high-tech STEM labs.</li>
                <li>Franchise expansion modeling for Tier 2 cities via white-labeling methodologies.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
