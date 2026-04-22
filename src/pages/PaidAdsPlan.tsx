import React from 'react';
import { Video, Target, Users, ArrowRight, Smartphone, EyeOff, Image, Maximize, Gift, Activity } from 'lucide-react';

export default function PaidAdsPlan({ navigate }: { navigate: (id: number) => void }) {
  return (
    <div className="space-y-12">
      <header className="space-y-4 border-b border-slate-200 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider rounded-full uppercase border border-orange-200">
          Module 3
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-950">Paid Ads Growth Engine</h2>
        <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
          A full-funnel Meta Ads strategy designed to turn cold awareness into verified leads using cinematic 360° visual evidence.
        </p>
      </header>

      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 border-b border-slate-100 pb-4 gap-4">
          <h3 className="text-2xl font-bold text-blue-950 flex items-center gap-3">
            <Users className="text-blue-500 w-7 h-7" /> The Audience Matrix
          </h3>
          <button onClick={() => navigate(2)} className="inline-flex shrink-0 text-xs items-center justify-center gap-1.5 text-orange-600 hover:text-orange-700 font-bold bg-orange-50 hover:bg-orange-100 px-4 py-2 sm:px-3 sm:py-1.5 rounded-lg transition-colors border border-orange-200 w-full sm:w-auto">
            View Competitor Overlap <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-slate-600 mb-8 text-base sm:text-lg">
          We strictly bifurcate the audience to ensure zero ad-spend waste and absolute message-to-market match across target corridors (Mumbai, Navi Mumbai, Pune).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-inner">
            <h4 className="font-bold text-blue-900 text-lg mb-1">1. The High-Ticket Enterprise</h4>
            <p className="text-sm font-bold text-blue-600 mb-4 tracking-wide">REAL ESTATE DEV • RESORTS • EDU</p>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 h-full">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                <strong className="text-blue-900 font-extrabold text-base block mb-1">The Core Hook: "Remote Validation"</strong> 
                NRI buyers and high-net-worth investors lack the bandwidth to travel securely. We explicitly sell developers the ability to close units remotely by projecting un-manipulated spatial trust directly into buyers' phones.
              </p>
              <div className="bg-slate-50 p-3 rounded border border-slate-100 text-xs font-mono text-slate-500">Targeting Overlay: Net Worth, Expats, Frequent International Travelers.</div>
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 shadow-inner">
            <h4 className="font-bold text-orange-900 text-lg mb-1">2. The Local Conversion Driver</h4>
            <p className="text-sm font-bold text-orange-600 mb-4 tracking-wide">GYMS • BANQUETS • RETAIL</p>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-orange-100 h-full">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                <strong className="text-orange-900 font-extrabold text-base block mb-1">The Core Hook: "Footfall Automation"</strong>
                These entities constantly battle local proximity competitors. Visual superiority and absolute transparency on Google Maps definitively results in hoarding local traffic over the business explicitly hiding their interiors.
              </p>
              <div className="bg-slate-50 p-3 rounded border border-slate-100 text-xs font-mono text-slate-500">Targeting Overlay: Page Admins, Business Owners within 5km radius.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white border border-blue-900 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden relative">
        <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 relative z-10 text-white border-b border-blue-800/50 pb-4">
          <Video className="text-orange-400 w-7 h-7" /> Content Framework: 5-Level Playbook
        </h3>
        
        <div className="space-y-6 relative z-10">
          
          {/* Level 1 */}
          <div className="bg-blue-900/40 border border-blue-800/60 rounded-xl p-5 sm:p-6 hover:bg-blue-900/70 transition-colors">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shadow-inner">
                <Smartphone className="text-orange-400 w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-lg sm:text-xl text-white flex flex-wrap items-center gap-2 sm:gap-3">
                    Level 1: The "Digital Window" 
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 sm:py-1 rounded self-start lg:self-center mt-1 lg:mt-0">Easiest to Execute</span>
                  </h4>
                  <p className="text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-2 py-1 rounded inline-block w-max">Target: Supermarkets & Retail</p>
                </div>
                <div className="space-y-3 mt-4">
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Concept:</strong> Screen-recording driven with high-end post-production. Two phone screens side-by-side: a competitor's blurry Google Map photo vs. a JHA360 listing where a thumb swipes immersively through aisles.</p>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Studio Touch:</strong> Aggressive sound design (whooshes, clicks, ambient store sounds) and bold, kinetic text overlays.</p>
                  <div className="bg-blue-950/50 p-3 rounded text-sm sm:text-base border border-blue-800/50">
                    <strong className="text-orange-400">The Hook Formula:</strong> "Which store are you walking into? If your customers can’t see your aisles, they are going to your competitor."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Level 2 */}
          <div className="bg-blue-900/40 border border-blue-800/60 rounded-xl p-5 sm:p-6 hover:bg-blue-900/70 transition-colors">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shadow-inner">
                <EyeOff className="text-orange-400 w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-lg sm:text-xl text-white">Level 2: The "Blindfold"</h4>
                  <p className="text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-2 py-1 rounded inline-block w-max">Target: Premium Gyms & Fitness</p>
                </div>
                <div className="space-y-3 mt-4">
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Concept:</strong> Guy in gym gear wearing a literal blindfold standing outside a gym door looking confused. He pulls it off, opens a JHA360 virtual tour to check the squat racks, nods, and walks in confidently.</p>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Studio Touch:</strong> Shot on location using crisp, natural lighting. A quick, highly relatable 10-second visual metaphor.</p>
                  <div className="bg-blue-950/50 p-3 rounded text-sm sm:text-base border border-blue-800/50">
                    <strong className="text-orange-400">The Hook Formula:</strong> "Don't make your new members walk in blind. Give them a digital tour before they buy the membership."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Level 3 */}
          <div className="bg-blue-900/40 border border-blue-800/60 rounded-xl p-5 sm:p-6 hover:bg-blue-900/70 transition-colors">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shadow-inner">
                <Image className="text-orange-400 w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-lg sm:text-xl text-white">Level 3: The "Torn Photo"</h4>
                  <p className="text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-2 py-1 rounded inline-block w-max">Target: Corporate & Co-working</p>
                </div>
                <div className="space-y-3 mt-4">
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Concept:</strong> Piyush stands in moody studio light holding a perfectly photoshopped office picture. He physically rips it, and as pieces fall, the scene snaps into a dynamic, interactive JHA360 virtual tour.</p>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Studio Touch:</strong> Professional green-screen lighting, sharp color grading, and clean masking transitions in post-production.</p>
                   <div className="bg-blue-950/50 p-3 rounded text-sm sm:text-base border border-blue-800/50">
                    <strong className="text-orange-400">The Hook Formula:</strong> "Photos lie. Your clients know it. Stop selling fake perfection and start selling the un-photoshopable truth."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Level 4 */}
          <div className="bg-blue-900/40 border border-blue-800/60 rounded-xl p-5 sm:p-6 hover:bg-blue-900/70 transition-colors">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shadow-inner">
                <Maximize className="text-orange-400 w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-lg sm:text-xl text-white">Level 4: The "Screen Dive"</h4>
                  <p className="text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-2 py-1 rounded inline-block w-max">Target: Luxury Real Estate (NRI)</p>
                </div>
                <div className="space-y-3 mt-4">
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Concept:</strong> Businessman gets a WhatsApp: 'Ready to see the penthouse?'. He taps the link. The camera physically pushes forward, zooming straight through his tablet screen into a beautifully lit virtual apartment tour.</p>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Studio Touch:</strong> Premium prime lens for ultra-shallow depth of field, paired with a flawless "zoom mask transition" in post to achieve a cinematic portal effect.</p>
                  <div className="bg-blue-950/50 p-3 rounded text-sm sm:text-base border border-blue-800/50">
                    <strong className="text-orange-400">The Hook Formula:</strong> "Sell Navi Mumbai properties to global buyers. No flights required. Your 24/7 digital open house starts here."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Level 5 */}
          <div className="bg-blue-900/40 border border-blue-800/60 rounded-xl p-5 sm:p-6 hover:bg-blue-900/70 transition-colors">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center shadow-inner border border-orange-500/30">
                <Gift className="text-orange-400 w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-lg sm:text-xl text-white">Level 5: The "Digital Easter Egg"</h4>
                  <p className="text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-orange-500/20 px-2 py-1 rounded inline-block w-max border border-orange-500/30">Target: Playzones & Banquets</p>
                </div>
                <div className="space-y-3 mt-4">
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Concept:</strong> An interactive treasure hunt ad. We announce a hidden 'Golden Ticket' inside a client's 360 tour. Viewers must navigate the virtual space, find the ticket, screenshot it, and DM the page for a real-world reward.</p>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed"><strong className="text-white">Studio Touch:</strong> Fast MTV-style editing, highly engaging audio tracks, and robust Meta Ad backend pixel tracking to capitalize on the massive retargeting pool.</p>
                  <div className="bg-blue-950/50 p-3 rounded text-sm sm:text-base border border-blue-800/50">
                    <strong className="text-orange-400">The Hook Formula:</strong> "We hid a free month of coffee somewhere inside this digital cafe. Step inside and find it before the rest of the city does."
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-6">
          <h3 className="text-2xl font-bold text-blue-950 flex items-center gap-3">
            <Target className="text-orange-500 w-7 h-7" /> The 3-Step Funnel Architecture
          </h3>
          <div className="bg-slate-50 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 text-sm">
            <Activity className="w-4 h-4 text-emerald-500"/>
            <span className="font-bold text-slate-700">KPI Focus:</span> <span className="text-slate-500">Lower CAC & High Lead Velocity</span>
          </div>
        </div>

        <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-5 sm:p-6 mb-10 shadow-inner">
          <h4 className="text-orange-900 font-extrabold text-lg mb-2">The "Skin in the Game" Execution Strategy</h4>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Corporate executives mitigate risk. We do the exact same thing for this rollout. Instead of asking for a massive 6-month retainer right out of the gate, we start with <strong>Phase 1: The 'Blindfold' and 'Digital Window' ads.</strong> We shoot it, run the Meta Ads, and prove the ROI in local corridors. Once we precisely hit your target Customer Acquisition Cost (CAC), we scale the budget and roll out the heavy cinematic studio shoots.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-slate-100 rounded-full hidden sm:block" />

          <div className="space-y-12">
            <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 rounded-xl bg-slate-50 border-2 border-slate-200 flex items-center justify-center text-xl font-bold text-slate-400 z-10 shrink-0">
                1
              </div>
              <div className="flex-1 pt-1 sm:pt-2 w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h4 className="text-xl font-bold text-blue-950 flex items-center gap-3">
                    Accelerate Lead Velocity
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded w-max">Cold Audience</span>
                </div>
                
                <p className="text-slate-600 font-medium mb-3 text-sm sm:text-base">Objective: Mass awareness & intent aggregation in Mumbai/Pune corridors.</p>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-sm sm:text-base text-slate-700 leading-relaxed shadow-inner">
                  <strong className="text-slate-900 block mb-1">Execution Architecture:</strong>
                  Deploy Level 1 and 2 videos explicitly to stop the scroll, instantly mixed with Tier A (Founder Authority) content for immediate institutional credibility. The primary objective is to aggressively build a heavily populated retargeting pool of users who watched &ge; 50% of the video duration.
                </div>
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 rounded-xl bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-xl font-bold text-orange-500 z-10 shrink-0 shadow-sm shadow-orange-500/20">
                2
              </div>
              <div className="flex-1 pt-1 sm:pt-2 w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h4 className="text-xl font-bold text-blue-950 flex items-center gap-3">
                    Verify the Physical Space (Lowering CAC)
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-600 px-2 py-1 rounded w-max">Warm Audience</span>
                </div>
                <p className="text-slate-600 font-medium mb-3 text-sm sm:text-base">Objective: Eliminate sales cycle friction by providing un-edited spatial verification.</p>
                <div className="bg-orange-50/50 rounded-xl p-5 border border-orange-100 text-sm sm:text-base text-slate-700 leading-relaxed shadow-inner">
                  <strong className="text-slate-900 block mb-1">Execution Architecture:</strong>
                  Retarget the 50%+ video watchers explicitly with ROI Proof testimonials. Demonstrate the concrete metric improvements (e.g., higher inbound conversion rates) using case studies from the 27 successful past projects. Utilize the "Google Street View Trusted" badge as social proof to lower acquisition friction.
                </div>
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 rounded-xl bg-blue-950 border-2 border-blue-800 flex items-center justify-center text-xl font-bold text-white z-10 shrink-0 shadow-md shadow-blue-900/30">
                3
              </div>
              <div className="flex-1 pt-1 sm:pt-2 w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h4 className="text-xl font-bold text-blue-950 flex items-center gap-3">
                    Conversion Rates & Handoff
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-1 rounded w-max">Hot Audience</span>
                </div>
                <p className="text-slate-600 font-medium mb-4 text-sm sm:text-base">Objective: Immediate High-Intent Lead Capture & Onboarding.</p>
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-4 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-emerald-400"></div>
                  <div className="pl-3">
                    <strong className="text-blue-950 block text-lg mb-1">Core CTA: "Book your Risk-Free Phase 1 Setup"</strong>
                    <p className="text-slate-500 text-sm max-w-sm">Frictionless lead form directly routing organic and paid traffic into a high-touch WhatsApp workflow for immediate conversion tracking.</p>
                  </div>
                  <button 
                    onClick={() => {
                      const message = encodeURIComponent("Hello Piyush! I want to execute Phase 1: The 'Skin in the Game' Meta Ads strategy for my business. What's the next step?");
                      window.open(`https://wa.me/917400310443?text=${message}`, '_blank', 'noopener,noreferrer');
                    }}
                    className="shrink-0 w-full sm:w-auto bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-transform active:scale-95 shadow-md flex items-center justify-center gap-2"
                  >
                    Simulate Workflow <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
