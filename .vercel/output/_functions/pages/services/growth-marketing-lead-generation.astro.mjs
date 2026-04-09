/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D9AOt8k0.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CBmOb5Hg.mjs';
import { $ as $$Card } from '../../chunks/Card_be3dafm5.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_rDDczuzq.mjs';
import { c as c6 } from '../../chunks/card-pic6_DpamPCNh.mjs';
import { i as icon1, a as icon2, b as icon4 } from '../../chunks/icon4_B9eKxzPw.mjs';
import { l as larrow } from '../../chunks/icon3_Bc0m-SGn.mjs';
export { renderers } from '../../renderers.mjs';

const $$GrowthMarketingLeadGeneration = createComponent(($$result, $$props, $$slots) => {
  const includes = [
    {
      title: "Lead Generation",
      items: ["Lead magnet creation", "Landing page design & copywriting", "Lead capture form optimisation", "Multi-channel lead campaigns", "CRM setup & integration"]
    },
    {
      title: "Lead Qualification",
      items: ["Lead scoring systems", "Qualification questionnaires", "Automated pre-qualification flows", "Sales-ready lead handoff", "Pipeline reporting"]
    },
    {
      title: "Growth Strategy",
      items: ["Full-funnel growth mapping", "Conversion rate optimisation (CRO)", "A/B testing landing pages", "Referral & loyalty programmes", "Monthly growth reviews"]
    }
  ];
  const process = [
    { title: "Funnel Mapping", description: "We map your entire customer journey \u2014 from first touch to closed sale \u2014 and identify where leads are dropping off and where the biggest growth opportunities are.", icon: icon1 },
    { title: "Lead Capture Setup", description: "We build high-converting landing pages, lead magnets, and opt-in forms that attract the right prospects and capture their details.", icon: icon2 },
    { title: "Qualification & Nurture", description: "We implement scoring and qualification systems so your sales team only spends time on leads with real buying intent. Automated follow-ups handle the rest.", icon: larrow },
    { title: "Optimise & Scale", description: "We analyse conversion data at every funnel stage and continuously optimise to lower your cost-per-lead and increase your close rate.", icon: icon4 }
  ];
  const faqs = [
    { question: "What's the difference between a lead and a qualified lead?", answer: "A lead is anyone who shows interest. A qualified lead has been filtered to confirm they have the budget, need, and intent to buy. We focus on delivering qualified leads so your sales team closes more deals with less effort." },
    { question: "What industries do you generate leads for?", answer: "We've built lead generation systems for real estate, fintech, e-commerce, education, healthcare, logistics, and more. If your business needs a steady pipeline of customers, we can build it." },
    { question: "How do you generate leads \u2014 ads, SEO, or both?", answer: "We use the right mix for your business. Typically this includes paid ads (Facebook, Google), SEO, landing pages, and email/WhatsApp follow-up sequences working together as a complete system." },
    { question: "How quickly can I expect leads to start coming in?", answer: "With paid campaigns, leads can start flowing within 48\u201372 hours of launch. SEO-driven leads take longer (3\u20136 months) but are more sustainable and lower cost over time." }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Growth Marketing & Lead Generation in Lagos | TrexHub", "description": "Build a predictable pipeline of qualified leads with TrexHub's growth marketing and lead generation services. We design full-funnel systems that turn traffic into revenue." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6"> <!-- Hero --> <div class="grid md:grid-cols-2 gap-12 items-center mb-24"> <div> <span class="inline-block bg-[#b9ff66] text-black text-sm font-medium px-4 py-1 rounded-full mb-4">Growth Marketing & Lead Generation</span> <h1 class="mb-6 text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">Build a Predictable Pipeline of Qualified Leads</h1> <p class="mb-8 text-lg font-normal text-gray-700">
Stop relying on referrals and word of mouth. TrexHub builds end-to-end lead generation systems that consistently deliver warm, sales-ready prospects to your business every month.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/#contact" class="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-[#b9ff66] hover:text-black transition-all font-medium text-lg">
Build My Lead System
</a> <a href="#process" class="inline-flex items-center justify-center px-8 py-4 bg-[#f3f3f3] text-black rounded-2xl hover:bg-black hover:text-white transition-all font-medium text-lg">
See Our Process
</a> </div> <div class="flex gap-8 mt-8"> <div><p class="text-2xl font-medium">500K+</p><p class="text-sm text-gray-500">Leads Generated</p></div> <div><p class="text-2xl font-medium">3x</p><p class="text-sm text-gray-500">Avg. Pipeline Growth</p></div> <div><p class="text-2xl font-medium">40%</p><p class="text-sm text-gray-500">Avg. CPA Reduction</p></div> </div> </div> <div class="relative"> <div class="bg-[#b9ff66] rounded-[45px] p-4 md:p-8 relative z-10"> ${renderComponent($$result2, "Image", $$Image, { "src": c6, "alt": "Growth Marketing & Lead Generation", "class": "w-full h-auto rounded-[35px]" })} </div> <div class="absolute top-8 left-8 right-8 bottom-8 bg-black rounded-[45px] -z-10"></div> </div> </div> <!-- What's included --> <div class="mb-24"> <h2 class="mb-4 text-3xl font-medium text-center">What's Included</h2> <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">A complete growth system — from attracting leads to qualifying them and handing them off to your sales team.</p> <div class="grid md:grid-cols-3 gap-8"> ${includes.map((col) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-xl font-medium mb-5">${col.title}</h3> <ul class="space-y-3"> ${col.items.map((item) => renderTemplate`<li class="flex items-start gap-2"> <span class="w-2 h-2 rounded-full bg-[#b9ff66] flex-shrink-0 mt-2"></span> <span>${item}</span> </li>`)} </ul> </div> ` })}`)} </div> </div> <!-- Process --> <div class="mb-24" id="process"> <h2 class="mb-12 text-3xl font-medium text-center">Our Process</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${process.map((step, i) => renderTemplate`<div class="bg-[#f3f3f3] rounded-2xl p-8 relative"> <div class="absolute -top-5 left-8 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">${i + 1}</div> ${renderComponent($$result2, "Image", $$Image, { "src": step.icon, "alt": step.title, "class": "h-10 w-auto mb-4 mt-2" })} <h3 class="text-lg font-medium mb-3">${step.title}</h3> <p class="text-sm text-gray-600">${step.description}</p> </div>`)} </div> </div> <!-- FAQs --> <div class="mb-24"> <h2 class="mb-12 text-3xl font-medium text-center">Frequently Asked Questions</h2> <div class="grid md:grid-cols-2 gap-8"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-lg font-medium mb-3">${faq.question}</h3> <p class="text-gray-600">${faq.answer}</p> </div> ` })}`)} </div> </div> <!-- CTA --> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-10 md:p-16 text-center"> <h2 class="text-3xl md:text-4xl font-medium mb-4">Ready to build a lead generation machine?</h2> <p class="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">Book a free strategy call and we'll map out a custom growth system for your business.</p> <a href="/#contact" class="inline-flex items-center px-10 py-5 bg-black text-white rounded-2xl hover:bg-[#b9ff66] hover:text-black transition-all font-medium text-xl">
Book a Free Strategy Call
</a> </div> ` })} </div> ` })}`;
}, "/Users/d4ault/Downloads/Positivus-main/src/pages/services/growth-marketing-lead-generation.astro", void 0);

const $$file = "/Users/d4ault/Downloads/Positivus-main/src/pages/services/growth-marketing-lead-generation.astro";
const $$url = "/services/growth-marketing-lead-generation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GrowthMarketingLeadGeneration,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
