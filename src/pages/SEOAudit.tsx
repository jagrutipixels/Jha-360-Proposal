import React from 'react';
import { Search, AlertTriangle, LightbulbIcon, Link as LinkIcon, Video } from 'lucide-react';

export default function SEOAudit() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider rounded-full uppercase border border-amber-500/20">
          Module 4
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white">Website SEO Audit</h2>
        <p className="text-slate-400 text-lg">Critical Gaps & Required Corrections for JHA360.com</p>
      </header>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-slate-500 uppercase">Domain Target</span>
            <p className="text-xl font-bold text-white flex items-center gap-2"><Search className="text-blue-500 w-5 h-5"/> JHA360.com</p>
          </div>
          <div className="h-px w-full md:h-12 md:w-px bg-slate-800"></div>
          <div className="flex-1">
            <span className="text-sm font-semibold text-slate-500 uppercase">Primary Objective</span>
            <p className="text-slate-300">Resolve technical and structural bottlenecks preventing organic search dominance in the Mumbai/Pune local business market.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gap 1 */}
        <div className="bg-slate-900/50 border border-rose-500/20 rounded-2xl p-8 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-t-2xl"></div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-start gap-3">
            <span className="bg-rose-500/20 text-rose-500 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
            Shallow Site Architecture (The "Single Page" Problem)
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-rose-400 font-semibold"><AlertTriangle className="w-4 h-4"/> The Issue</div>
              <p className="text-slate-400 text-sm">Currently, all major projects (e.g., GARG SKY Ajivali, Tithee Banquets, ZenXFit) and industries are grouped together. When multiple industries share a single page, Google becomes confused about what that specific page is actually trying to rank for (keyword cannibalization).</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold"><LightbulbIcon className="w-4 h-4"/> Required Correction</div>
              <p className="text-slate-300 text-sm mb-3">The website architecture must be expanded. Build dedicated, individual landing pages for each high-value vertical.</p>
              <code className="block bg-slate-900 text-emerald-300 text-xs p-3 rounded font-mono break-all">
                jha360.com/real-estate-virtual-tours<br/>
                jha360.com/gym-360-photography
              </code>
            </div>
          </div>
        </div>

        {/* Gap 2 */}
        <div className="bg-slate-900/50 border border-orange-500/20 rounded-2xl p-8 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-t-2xl"></div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-start gap-3">
            <span className="bg-orange-500/20 text-orange-500 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
            Missing Top-of-Funnel Content (Losing the "Discovery" Phase)
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-orange-400 font-semibold"><AlertTriangle className="w-4 h-4"/> The Issue</div>
              <p className="text-slate-400 text-sm">The current website is only built for people who already know they want a "360 virtual tour". It completely misses the thousands of business owners searching for general growth solutions, meaning competitors capture those leads first.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold"><LightbulbIcon className="w-4 h-4"/> Required Correction</div>
              <p className="text-slate-300 text-sm mb-3">Deploy a localized "Resource" or "Blog" section that targets problem-aware searches.</p>
              <div className="bg-slate-900 text-slate-400 text-xs p-3 rounded border border-slate-800 italic">
                Example: "How to Increase Gym Walk-ins in Navi Mumbai," or "Why NRI Real Estate Investors Ignore Unverified Google Listings."
              </div>
            </div>
          </div>
        </div>

        {/* Gap 3 */}
        <div className="bg-slate-900/50 border border-blue-500/20 rounded-2xl p-8 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl"></div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-start gap-3">
            <span className="bg-blue-500/20 text-blue-500 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0"><LinkIcon className="w-4 h-4"/></span>
            Underdeveloped Backlink Profile & Local Citations
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-blue-400 font-semibold"><AlertTriangle className="w-4 h-4"/> The Issue</div>
              <p className="text-slate-400 text-sm">Because JHA360 is a newer domain (established in 2025), it lacks the Domain Authority (DA) required to outrank older, legacy photography studios. Google needs to see other reputable local websites pointing to JHA360.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold"><LightbulbIcon className="w-4 h-4"/> Required Correction</div>
              <p className="text-slate-300 text-sm">Initiate a localized backlinking and citation campaign. Ensure JHA360 has consistent NAP (Name, Address, Phone number) data across all Maharashtra business directories. Secure backlinks from local real estate blogs and Navi Mumbai business chambers.</p>
            </div>
          </div>
        </div>

        {/* Gap 4 */}
        <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl"></div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-start gap-3">
            <span className="bg-purple-500/20 text-purple-500 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0"><Video className="w-4 h-4"/></span>
            Underutilized Video SEO (Time-on-Page Deficit)
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-purple-400 font-semibold"><AlertTriangle className="w-4 h-4"/> The Issue</div>
              <p className="text-slate-400 text-sm">While the site deals in visual walkthroughs, it lacks embedded, high-retention video content. Google uses "Dwell Time" as a massive ranking factor. If users click away quickly, rankings drop.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold"><LightbulbIcon className="w-4 h-4"/> The Savoir Studio Fix</div>
              <p className="text-slate-300 text-sm">Embed the high-quality Talking Head and Testimonial videos we produce directly onto the JHA360 website via a branded YouTube channel.</p>
              <p className="text-slate-400 text-xs mt-2 italic">A 2-minute founder video on the homepage will drastically increase the average time-on-page, forcing Google to view the site as highly relevant and authoritative.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
