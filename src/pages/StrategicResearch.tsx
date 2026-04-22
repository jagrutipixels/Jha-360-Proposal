import React from 'react';
import { Target, Users, LayoutDashboard, Award, ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';

export default function StrategicResearch({ navigate, previousPage }: { navigate: (id: number) => void, previousPage?: number | null }) {
  return (
    <div className="space-y-12">
      <header className="space-y-4 border-b border-slate-200 pb-8 sm:pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold tracking-wider rounded-full uppercase border border-orange-200">
          Module 1
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-950 leading-tight">Strategic Research Report</h2>
        <p className="text-slate-500 text-base sm:text-lg font-medium max-w-2xl leading-relaxed">
          Business Model Analysis and Meta Ad Action Plan to scale JHA360 across target corridors.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-950 flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <Award className="text-orange-500 w-6 h-6 sm:w-7 sm:h-7" /> Leadership Authority: Corporate & Institutional Depth
          </h3>
          <p className="text-slate-600 mb-6 text-base sm:text-xl font-medium leading-relaxed">
            Piyush N Jha brings a wealth of executive expertise, having served as a Vice President and Chief Business Officer in the corporate sector. This strategic foundation allows JHA360 to deliver boardroom-grade solutions focused on measurable business outcomes.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3 sm:gap-4"><div className="w-1.5 h-1.5 mt-2 rounded-full bg-orange-500 shrink-0"></div> <div className="text-sm sm:text-base"><strong className="text-slate-900 block mb-1">Professional Experience:</strong> Former Vice President and Chief Business Officer with extensive experience in Regional Management and Corporate Operations.</div></li>
              <li className="flex gap-3 sm:gap-4"><div className="w-1.5 h-1.5 mt-2 rounded-full bg-orange-500 shrink-0"></div> <div className="text-sm sm:text-base"><strong className="text-slate-900 block mb-1">Corporate DNA:</strong> Over 8 years specializing in Background Verification, Due Diligence, and Corporate Risk Mitigation protocol.</div></li>
              <li className="flex gap-3 sm:gap-4"><div className="w-1.5 h-1.5 mt-2 rounded-full bg-orange-500 shrink-0"></div> <div className="text-sm sm:text-base"><strong className="text-slate-900 block mb-1">Institutional Authority:</strong> Officially Accredited Mentor with AIC-BIMTECH under the prestigious Atal Innovation Mission (NITI Aayog).</div></li>
            </ul>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3 sm:gap-4"><div className="w-1.5 h-1.5 mt-2 rounded-full bg-orange-500 shrink-0"></div> <div className="text-sm sm:text-base"><strong className="text-slate-900 block mb-1">Strategic Focus:</strong> Optimizing Customer Acquisition Cost (CAC), accelerating Lead Velocity, and removing digital conversion friction.</div></li>
              <li className="flex gap-3 sm:gap-4"><div className="w-1.5 h-1.5 mt-2 rounded-full bg-orange-500 shrink-0"></div> <div className="text-sm sm:text-base"><strong className="text-slate-900 block mb-1">Operational Track Record:</strong> Delivered 27 high-fidelity immersive projects within recent months across real estate and corporate sectors.</div></li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-slate-100 pb-4">
            <h3 className="text-2xl font-bold text-blue-950 flex items-center gap-3">
              <LayoutDashboard className="text-blue-500 w-7 h-7" /> In-Depth Business Model Analysis
            </h3>
            <button onClick={() => navigate(3)} className="inline-flex shrink-0 text-xs items-center justify-center gap-1.5 text-blue-600 hover:text-blue-700 font-bold bg-blue-50 hover:bg-blue-100 px-4 py-2 sm:px-3 sm:py-1.5 rounded-lg transition-colors border border-blue-200 w-full sm:w-auto">
              Jump to Ad Funnel <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            JHA360 operates not merely as a photography agency, but as a specialized B2B <strong>"Digital Risk Mitigation"</strong> value-adder. The service explicitly transforms static digital footprints into high-conversion assets designed to lower the friction of a client's sales cycle.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 shadow-inner">
              <h4 className="text-blue-950 font-bold mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-orange-500"/> Core Value Proposition (Boardroom Pitch)</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                We definitively solve the "Proof of Quality" problem. By engineering immersive 360° virtual tours natively integrated into Google Maps, we explicitly lower Customer Acquisition Cost (CAC) by removing the apprehension phase from the consumer's buying journey.
              </p>
              <button onClick={() => navigate(4)} className="text-orange-600 hover:text-orange-700 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1 active:scale-95 transition-transform">
                Review SEO Blockers <ArrowRight className="w-3 h-3"/>
              </button>
            </div>
            <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100 shadow-inner">
              <h4 className="text-blue-950 font-bold mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-orange-500"/> The Velocity Friction</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                In a "digital-first" economy, traditional 2D photos create sales cycle friction because of consumer skepticism. If a customer cannot physically validate a premium gym or luxury property through their phone, Lead Velocity drops and conversion costs spike.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
              <div>
                <h4 className="text-blue-950 font-extrabold text-xl">Target Verticals & TAM</h4>
                <p className="text-sm text-slate-500 mt-1">Total Addressable Market segmentation for immediate scaling.</p>
              </div>
              <button onClick={() => navigate(2)} className="text-orange-600 hover:text-orange-700 text-sm font-bold hover:underline shrink-0">
                View Competitor Overlap &rarr;
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-3 bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">1</div>
                <div><strong className="text-slate-900 font-bold block mb-1">Real Estate</strong><span className="text-slate-500 text-xs sm:text-sm leading-tight block">High-end residential, show flats, and large commercial lease spaces.</span></div>
              </div>
              <div className="flex flex-col gap-3 bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">2</div>
                <div><strong className="text-slate-900 font-bold block mb-1">Hospitality</strong><span className="text-slate-500 text-xs sm:text-sm leading-tight block">Boutique resorts, premium restaurants, wedding banquet halls.</span></div>
              </div>
              <div className="flex flex-col gap-3 bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">3</div>
                <div><strong className="text-slate-900 font-bold block mb-1">Retail & Fitness</strong><span className="text-slate-500 text-xs sm:text-sm leading-tight block">Premium gyms, massive supermarkets, automobile showrooms.</span></div>
              </div>
              <div className="flex flex-col gap-3 bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">4</div>
                <div><strong className="text-slate-900 font-bold block mb-1">Institutions</strong><span className="text-slate-500 text-xs sm:text-sm leading-tight block">Corporate hubs, coworking spaces, STEM labs, and schools.</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-950 flex items-center gap-3 mb-8">
            <Target className="text-emerald-500 w-6 h-6 sm:w-7 sm:h-7" /> Strategic Implementation Roadmap
          </h3>
          
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto rounded-xl border border-slate-200 shadow-inner">
            <table className="w-full text-left text-sm text-slate-600 min-w-[700px]">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 text-xs uppercase tracking-wider font-bold">
                <tr>
                  <th className="px-6 py-5 border-r border-slate-200 w-1/4">Phasing & Timeline</th>
                  <th className="px-6 py-5 border-r border-slate-200 w-1/2">Core Activity & Execution</th>
                  <th className="px-6 py-5 w-1/4">Primary Business Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 border-r border-slate-200">
                    <strong className="text-slate-900 block text-base mb-1">Phase 1: Production</strong>
                    <span className="text-orange-500 font-medium text-xs bg-orange-50 px-2 py-1 rounded inline-block">Weeks 1-3</span>
                  </td>
                  <td className="px-6 py-5 border-r border-slate-200 text-sm leading-relaxed">
                    Capture raw, authentic "Behind the Scenes" footage of Piyush on-site assembling 360 gear, directly guiding teams, and securing final shots. Build the content repository required for the 5-Level Meta Ads playbook.
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-blue-900 bg-blue-50/30">
                    Establish Unshakable Founder Authority & Trust.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 border-r border-slate-200">
                    <strong className="text-slate-900 block text-base mb-1">Phase 2: Launch</strong>
                    <span className="text-orange-500 font-medium text-xs bg-orange-50 px-2 py-1 rounded inline-block">Weeks 4-8</span>
                  </td>
                  <td className="px-6 py-5 border-r border-slate-200 text-sm leading-relaxed">
                    Deploy highly-segmented "Niche-Specific" ad funnels targeting Real Estate (Level 4: Screen Dive) and Hospitality (Level 5: Easter Egg). Utilize precision audience building across Mumbai/Pune target corridors.
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-emerald-700 bg-emerald-50/30">
                    Immediate High-Quality Lead Generation & ROI.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 border-r border-slate-200">
                    <strong className="text-slate-900 block text-base mb-1">Phase 3: Scaling</strong>
                    <span className="text-orange-500 font-medium text-xs bg-orange-50 px-2 py-1 rounded inline-block">Month 3+</span>
                  </td>
                  <td className="px-6 py-5 border-r border-slate-200 text-sm leading-relaxed">
                    Aggressively leverage the <strong>"Official Google Street View Trusted"</strong> badge as a primary psychological hook in retargeting campaigns. Scale ad spend vertically on winning creatives and roll out out-of-ecosystem campaigns (LinkedIn B2B).
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-purple-700 bg-purple-50/30">
                    Monopolize market share & differentiate from amateur competitors.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout for Table */}
          <div className="lg:hidden space-y-4">
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                <strong className="text-slate-900">Phase 1: Production</strong>
                <span className="text-orange-500 font-bold text-[10px] bg-orange-50 px-2 py-0.5 rounded">Weeks 1-3</span>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-sm text-slate-600 leading-relaxed">Capture raw, authentic "Behind the Scenes" footage of Piyush on-site assembling 360 gear, directly guiding teams, and securing final shots. Build the content repository required for the 5-Level Meta Ads playbook.</p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Primary Goal:</span>
                  <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">Establish Authority</span>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                <strong className="text-slate-900">Phase 2: Launch</strong>
                <span className="text-orange-500 font-bold text-[10px] bg-orange-50 px-2 py-0.5 rounded">Weeks 4-8</span>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-sm text-slate-600 leading-relaxed">Deploy highly-segmented "Niche-Specific" ad funnels targeting Real Estate and Hospitality. Utilize precision audience building across Mumbai/Pune target corridors.</p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Primary Goal:</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Lead Generation</span>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                <strong className="text-slate-900">Phase 3: Scaling</strong>
                <span className="text-orange-500 font-bold text-[10px] bg-orange-50 px-2 py-0.5 rounded">Month 3+</span>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-sm text-slate-600 leading-relaxed">Aggressively leverage the "Official Google Street View Trusted" badge as a primary psychological hook. Scale ad spend vertically on winning creatives.</p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Primary Goal:</span>
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Monopolize Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-950 to-[#0a1e3f] border border-blue-900 rounded-2xl p-6 sm:p-10 shadow-xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
          
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 relative z-10 text-white border-b border-blue-800/50 pb-4">
            <Users className="text-orange-400 w-7 h-7" /> The Executive Positioning Strategy
          </h3>
          <ul className="space-y-6 text-slate-300 relative z-10 text-base sm:text-lg">
            <li className="flex gap-4 items-start bg-blue-900/30 p-5 rounded-xl border border-blue-800/50">
              <span className="text-orange-400 font-extrabold text-2xl mt-0 shadow-sm leading-none bg-blue-950 w-8 h-8 flex items-center justify-center rounded-full shrink-0">1</span> 
              <div>
                <strong className="text-white text-xl block mb-2">The "NITI Aayog" Institutional Authority</strong>
                <p className="text-sm sm:text-base leading-relaxed text-blue-100">By positioning the brand through the lens of a NITI Aayog Accredited Mentor, we elevate JHA360 from a service provider to a strategic digital transformation partner. This institutional credibility justifies premium positioning for Tier-1 developers and major corporate entities.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start bg-blue-900/30 p-5 rounded-xl border border-blue-800/50">
               <span className="text-orange-400 font-extrabold text-2xl mt-0 shadow-sm leading-none bg-blue-950 w-8 h-8 flex items-center justify-center rounded-full shrink-0">2</span> 
              <div>
                <strong className="text-white text-xl block mb-2">The "Verification" Narrative (Digital Truth)</strong>
                <p className="text-sm sm:text-base leading-relaxed text-blue-100">You spent nearly a decade verifying people and minimizing risk for corporations. With JHA360, you are doing the <em>exact same thing</em> for local businesses: <strong>You are verifying their physical space.</strong> Our content strategy is designed to market you as the ultimate 'Digital Truth' in a world of fake reviews and manipulated photos.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
