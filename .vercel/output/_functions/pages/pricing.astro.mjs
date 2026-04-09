/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D9AOt8k0.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CBmOb5Hg.mjs';
export { renderers } from '../renderers.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const packages = [
    {
      name: "Starter",
      tag: "For small businesses & startups",
      description: "Perfect if you're just getting started with digital marketing and want to build a solid foundation.",
      features: [
        "1 active marketing channel",
        "Campaign strategy & setup",
        "Monthly performance report",
        "Email support",
        "Dedicated account manager"
      ],
      channels: ["SEO", "Facebook Ads", "Google Ads", "Social Media", "Email Marketing"],
      cta: "Get a Custom Quote",
      highlight: false
    },
    {
      name: "Growth",
      tag: "Most Popular",
      description: "For businesses ready to scale with multi-channel campaigns, lead funnels, and proactive account management.",
      features: [
        "Up to 3 active marketing channels",
        "Full campaign strategy & execution",
        "Lead generation & qualification system",
        "Bi-weekly performance reports",
        "Priority support & dedicated manager"
      ],
      channels: ["SEO", "Facebook & Instagram Ads", "Google Ads", "Social Media", "Email & WhatsApp Marketing"],
      cta: "Get a Custom Quote",
      highlight: true
    },
    {
      name: "Scale",
      tag: "For high-growth businesses",
      description: "Full-service digital marketing for businesses that need aggressive, data-driven campaigns across all channels.",
      features: [
        "All marketing channels included",
        "Full-funnel growth strategy",
        "Advanced lead gen & CRM integration",
        "Weekly performance reports",
        "Dedicated senior team & weekly calls"
      ],
      channels: ["SEO", "Facebook & Instagram Ads", "Google Ads", "TikTok Ads", "Social Media", "Email & WhatsApp Marketing", "Content Creation"],
      cta: "Get a Custom Quote",
      highlight: false
    }
  ];
  const faqs = [
    {
      q: "Why don't you show prices on the page?",
      a: "Every business is different \u2014 your industry, goals, competition, and budget all affect what the right strategy looks like. We'd rather have a quick conversation and give you a quote that actually makes sense for your situation than show you a number that might not fit."
    },
    {
      q: "How does the pricing conversation work?",
      a: "Book a free strategy call. We'll learn about your business, your goals, and your current marketing. Then we'll recommend the right package and give you a clear, transparent quote \u2014 no pressure, no hidden fees."
    },
    {
      q: "Is there a minimum commitment?",
      a: "We typically work on 3-month minimum engagements. This gives us enough time to build, launch, and optimise campaigns for meaningful results. We'll discuss this on the call."
    },
    {
      q: "Can I start with one service and add more later?",
      a: "Absolutely. Many clients start with one channel \u2014 like Facebook Ads or SEO \u2014 and expand as they see results. We'll help you prioritise what to tackle first based on your goals."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Pricing | TrexHub Digital Marketing Agency Lagos", "description": "TrexHub offers flexible digital marketing packages for businesses in Lagos and across Nigeria. Contact us for a custom quote tailored to your goals." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6"> <!-- Header --> <div class="text-center mb-16 max-w-3xl mx-auto"> <span class="inline-block bg-[#b9ff66] text-black text-sm font-medium px-4 py-1 rounded-full mb-4">Pricing</span> <h1 class="text-4xl md:text-5xl font-medium mb-4">Transparent Packages, Custom Pricing</h1> <p class="text-lg text-gray-600">
We don't believe in one-size-fits-all pricing. Every business is different, so every quote is tailored. Browse our packages below, then book a free call to get your custom quote.
</p> </div> <!-- Packages --> <div class="grid lg:grid-cols-3 gap-8 mb-24"> ${packages.map((pkg) => renderTemplate`<div${addAttribute(`rounded-[30px] p-8 flex flex-col gap-6 border-2 transition-all ${pkg.highlight ? "bg-[#191a23] text-white border-[#b9ff66]" : "bg-[#f3f3f3] text-black border-transparent"}`, "class")}> <div> <span${addAttribute(`text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full ${pkg.highlight ? "bg-[#b9ff66] text-black" : "bg-black text-white"}`, "class")}> ${pkg.tag} </span> </div> <div> <h2 class="text-2xl font-medium mb-2">${pkg.name}</h2> <p${addAttribute(`text-sm leading-relaxed ${pkg.highlight ? "text-gray-300" : "text-gray-600"}`, "class")}>${pkg.description}</p> </div> <div${addAttribute(`h-px w-full ${pkg.highlight ? "bg-gray-700" : "bg-gray-300"}`, "class")}></div> <div> <p${addAttribute(`text-xs font-medium uppercase tracking-widest mb-3 ${pkg.highlight ? "text-gray-400" : "text-gray-500"}`, "class")}>What's included</p> <ul class="space-y-3"> ${pkg.features.map((f) => renderTemplate`<li class="flex items-start gap-3"> <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-[#b9ff66]" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-sm">${f}</span> </li>`)} </ul> </div> <div> <p${addAttribute(`text-xs font-medium uppercase tracking-widest mb-3 ${pkg.highlight ? "text-gray-400" : "text-gray-500"}`, "class")}>Available channels</p> <div class="flex flex-wrap gap-2"> ${pkg.channels.map((c) => renderTemplate`<span${addAttribute(`text-xs px-3 py-1 rounded-full ${pkg.highlight ? "bg-gray-800 text-gray-300" : "bg-white text-black"}`, "class")}>${c}</span>`)} </div> </div> <div class="mt-auto"> <p${addAttribute(`text-2xl font-medium mb-4 ${pkg.highlight ? "text-[#b9ff66]" : "text-black"}`, "class")}>
Custom Quote
</p> <a href="/#contact"${addAttribute(`w-full block text-center py-4 rounded-xl font-medium transition-all duration-200 ${pkg.highlight ? "bg-[#b9ff66] text-black hover:bg-white" : "bg-black text-white hover:bg-[#b9ff66] hover:text-black"}`, "class")}> ${pkg.cta} </a> </div> </div>`)} </div> <!-- Why no prices banner --> <div class="bg-[#f3f3f3] rounded-[30px] p-10 md:p-14 mb-24 flex flex-col md:flex-row gap-8 items-center"> <div class="flex-1"> <h2 class="text-2xl md:text-3xl font-medium mb-3">Why don't we show prices?</h2> <p class="text-gray-600 leading-relaxed">
A real estate business in Lagos and a fintech startup have very different marketing needs — even if they want the same service. Showing a fixed price would either overcharge one or underserve the other. We'd rather spend 30 minutes understanding your business and give you a quote that's actually right for you.
</p> </div> <div class="flex-shrink-0"> <a href="/#contact" class="inline-flex px-8 py-4 bg-black text-white rounded-2xl hover:bg-[#b9ff66] hover:text-black transition-all font-medium text-lg whitespace-nowrap">
Book a Free Call
</a> </div> </div> <!-- FAQs --> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl font-medium text-center mb-12">Pricing FAQs</h2> <div class="space-y-4"> ${faqs.map((faq) => renderTemplate`<div class="bg-[#f3f3f3] rounded-2xl p-8"> <h3 class="text-lg font-medium mb-3">${faq.q}</h3> <p class="text-gray-600">${faq.a}</p> </div>`)} </div> </div> </div> ` })}`;
}, "/Users/d4ault/Downloads/Positivus-main/src/pages/pricing.astro", void 0);

const $$file = "/Users/d4ault/Downloads/Positivus-main/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
