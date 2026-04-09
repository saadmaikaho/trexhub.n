/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D9AOt8k0.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CBmOb5Hg.mjs';
import { $ as $$Card } from '../../chunks/Card_be3dafm5.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_rDDczuzq.mjs';
import { c as c3 } from '../../chunks/card-pic3_CeG4ZrYW.mjs';
import { i as icon1, a as icon2, b as icon4 } from '../../chunks/icon4_B9eKxzPw.mjs';
import { l as larrow } from '../../chunks/icon3_Bc0m-SGn.mjs';
export { renderers } from '../../renderers.mjs';

const $$GoogleAdsPpc = createComponent(($$result, $$props, $$slots) => {
  const includes = [
    {
      title: "Search Campaigns",
      items: ["Keyword research & match types", "Competitor keyword targeting", "Ad copy writing & testing", "Negative keyword management"]
    },
    {
      title: "Display & YouTube Ads",
      items: ["Google Display Network campaigns", "YouTube pre-roll & skippable ads", "Remarketing display campaigns", "Banner creative production"]
    },
    {
      title: "Shopping & Performance Max",
      items: ["Google Shopping setup & management", "Performance Max campaigns", "Product feed optimisation", "Smart bidding strategies"]
    }
  ];
  const process = [
    { title: "Keyword & Competitor Research", description: "We identify the highest-intent keywords your customers use and analyse what your competitors are bidding on to find gaps and opportunities.", icon: icon1 },
    { title: "Campaign Build & Setup", description: "We structure your campaigns for maximum Quality Score \u2014 tight ad groups, compelling copy, and optimised landing pages that convert.", icon: icon2 },
    { title: "Bid Management & Optimisation", description: "We monitor bids, search terms, and conversion data daily, cutting wasted spend and doubling down on what's driving results.", icon: larrow },
    { title: "Reporting & Scaling", description: "Monthly reports with clear metrics \u2014 impressions, clicks, conversions, CPA, and ROAS. We scale what works and cut what doesn't.", icon: icon4 }
  ];
  const faqs = [
    { question: "How is Google Ads different from SEO?", answer: "SEO builds organic rankings over time (3\u20136 months). Google Ads puts you at the top of search results immediately. Most businesses benefit from running both \u2014 ads for quick wins, SEO for long-term growth." },
    { question: "What's a good budget for Google Ads in Nigeria?", answer: "We recommend starting with at least \u20A6200,000/month in ad spend. This gives us enough data to optimise effectively. Our management fee is separate from your ad budget." },
    { question: "Do you manage the Google Ads account or do I?", answer: "We manage everything \u2014 campaign setup, keyword research, ad copy, bid management, and reporting. You get full transparency and access to your account at all times." },
    { question: "What industries do you run Google Ads for?", answer: "We've run successful campaigns for real estate, e-commerce, fintech, education, healthcare, logistics, and more. If your customers search for your product or service on Google, we can help." }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Google Ads & PPC Management in Lagos | TrexHub", "description": "Capture high-intent buyers on Google with TrexHub's PPC management. We run Search, Display, Shopping, and YouTube campaigns that maximise your ROI." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6"> <!-- Hero --> <div class="grid md:grid-cols-2 gap-12 items-center mb-24"> <div> <span class="inline-block bg-[#b9ff66] text-black text-sm font-medium px-4 py-1 rounded-full mb-4">Google Ads & PPC</span> <h1 class="mb-6 text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">Be at the Top of Google When It Matters Most</h1> <p class="mb-8 text-lg font-normal text-gray-700">
Capture customers the moment they're searching for what you offer. TrexHub manages Google Ads campaigns that drive high-intent traffic and convert clicks into revenue.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/#contact" class="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-[#b9ff66] hover:text-black transition-all font-medium text-lg">
Start Google Ads
</a> <a href="#process" class="inline-flex items-center justify-center px-8 py-4 bg-[#f3f3f3] text-black rounded-2xl hover:bg-black hover:text-white transition-all font-medium text-lg">
See Our Process
</a> </div> <div class="flex gap-8 mt-8"> <div><p class="text-2xl font-medium">55%</p><p class="text-sm text-gray-500">Avg. CPA Reduction</p></div> <div><p class="text-2xl font-medium">6x</p><p class="text-sm text-gray-500">Average ROAS</p></div> <div><p class="text-2xl font-medium">150+</p><p class="text-sm text-gray-500">Campaigns Managed</p></div> </div> </div> <div class="relative"> <div class="bg-[#b9ff66] rounded-[45px] p-4 md:p-8 relative z-10"> ${renderComponent($$result2, "Image", $$Image, { "src": c3, "alt": "Google Ads & PPC", "class": "w-full h-auto rounded-[35px]" })} </div> <div class="absolute top-8 left-8 right-8 bottom-8 bg-black rounded-[45px] -z-10"></div> </div> </div> <!-- What's included --> <div class="mb-24"> <h2 class="mb-4 text-3xl font-medium text-center">What's Included</h2> <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Full-service Google Ads management — from keyword research to campaign build to ongoing optimisation.</p> <div class="grid md:grid-cols-3 gap-8"> ${includes.map((col) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-xl font-medium mb-5">${col.title}</h3> <ul class="space-y-3"> ${col.items.map((item) => renderTemplate`<li class="flex items-start gap-2"> <span class="w-2 h-2 rounded-full bg-[#b9ff66] flex-shrink-0 mt-2"></span> <span>${item}</span> </li>`)} </ul> </div> ` })}`)} </div> </div> <!-- Process --> <div class="mb-24" id="process"> <h2 class="mb-12 text-3xl font-medium text-center">Our Process</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${process.map((step, i) => renderTemplate`<div class="bg-[#f3f3f3] rounded-2xl p-8 relative"> <div class="absolute -top-5 left-8 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">${i + 1}</div> ${renderComponent($$result2, "Image", $$Image, { "src": step.icon, "alt": step.title, "class": "h-10 w-auto mb-4 mt-2" })} <h3 class="text-lg font-medium mb-3">${step.title}</h3> <p class="text-sm text-gray-600">${step.description}</p> </div>`)} </div> </div> <!-- FAQs --> <div class="mb-24"> <h2 class="mb-12 text-3xl font-medium text-center">Frequently Asked Questions</h2> <div class="grid md:grid-cols-2 gap-8"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-lg font-medium mb-3">${faq.question}</h3> <p class="text-gray-600">${faq.answer}</p> </div> ` })}`)} </div> </div> <!-- CTA --> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-10 md:p-16 text-center"> <h2 class="text-3xl md:text-4xl font-medium mb-4">Ready to dominate Google search?</h2> <p class="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">Book a free strategy call and we'll audit your current Google Ads setup (or build one from scratch) to maximise your ROI.</p> <a href="/#contact" class="inline-flex items-center px-10 py-5 bg-black text-white rounded-2xl hover:bg-[#b9ff66] hover:text-black transition-all font-medium text-xl">
Book a Free Strategy Call
</a> </div> ` })} </div> ` })}`;
}, "/Users/d4ault/Downloads/Positivus-main/src/pages/services/google-ads-ppc.astro", void 0);

const $$file = "/Users/d4ault/Downloads/Positivus-main/src/pages/services/google-ads-ppc.astro";
const $$url = "/services/google-ads-ppc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GoogleAdsPpc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
