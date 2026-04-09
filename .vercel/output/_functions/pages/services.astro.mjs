/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D9AOt8k0.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CBmOb5Hg.mjs';
import { $ as $$Card } from '../chunks/Card_be3dafm5.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_BrZEOMOe.mjs';
import { c as c1 } from '../chunks/card-pic1_BK0Ixlcy.mjs';
import { c as c2 } from '../chunks/card-pic2_D72I2RKb.mjs';
import { c as c3 } from '../chunks/card-pic3_CeG4ZrYW.mjs';
import { c as c4 } from '../chunks/card-pic4_g0B0o3Iy.mjs';
import { c as c5 } from '../chunks/card-pic5_Clbr-I3q.mjs';
import { c as c6 } from '../chunks/card-pic6_DpamPCNh.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      index: 1,
      titleTop: "Search Engine",
      titleBottom: "Optimization (SEO)",
      img: c1,
      alt: "SEO",
      description: "We get your business ranking on page one for the keywords your customers are actually searching. From technical audits to content strategy and link building, we build sustainable organic growth that compounds over time.",
      benefits: ["Page 1 Google rankings", "Long-term organic traffic", "Lower cost-per-acquisition", "Increased brand authority"],
      cta: "Get a Free SEO Audit",
      link: "/services/seo"
    },
    {
      index: 2,
      titleTop: "Facebook & Instagram",
      titleBottom: "Ads Management",
      img: c2,
      alt: "Facebook Ads",
      description: "We build and manage high-converting Facebook and Instagram ad campaigns that reach your ideal customers at the right moment. From creative to targeting to retargeting \u2014 we handle it all and optimize for real results.",
      benefits: ["Precise audience targeting", "High-converting ad creatives", "Retargeting campaigns", "Transparent ROAS reporting"],
      cta: "Launch Your Ad Campaign",
      link: "/#contact"
    },
    {
      index: 3,
      titleTop: "Google Ads &",
      titleBottom: "PPC Management",
      img: c3,
      alt: "Google Ads",
      description: "Capture high-intent buyers the moment they search for what you offer. We manage Google Search, Display, Shopping, and YouTube campaigns with a focus on maximizing conversions while minimizing wasted spend.",
      benefits: ["Immediate search visibility", "High-intent traffic", "Smart bid optimization", "Full conversion tracking"],
      cta: "Start Google Ads",
      link: "/#contact"
    },
    {
      index: 1,
      titleTop: "Social Media Marketing",
      titleBottom: "& Management",
      img: c4,
      alt: "Social Media Marketing",
      description: "We build your brand presence across Instagram, LinkedIn, TikTok, Facebook, and more with content that resonates. From strategy to posting to community management \u2014 we keep your audience engaged and growing.",
      benefits: ["Consistent brand presence", "Engaged community growth", "Content that converts", "Platform-specific strategy"],
      cta: "Grow Your Social Presence",
      link: "/#contact"
    },
    {
      index: 2,
      titleTop: "Email & WhatsApp",
      titleBottom: "Marketing",
      img: c5,
      alt: "Email & WhatsApp Marketing",
      description: "We create email and WhatsApp sequences that nurture your leads through every stage of the buyer journey. From welcome flows to re-engagement campaigns, we turn your contact list into a consistent revenue channel.",
      benefits: ["High-converting email sequences", "WhatsApp broadcast campaigns", "Automated nurture flows", "Repeat revenue generation"],
      cta: "Start Email Marketing",
      link: "/#contact"
    },
    {
      index: 3,
      titleTop: "Growth Marketing &",
      titleBottom: "Lead Generation",
      img: c6,
      alt: "Growth Marketing & Lead Generation",
      description: "We design end-to-end growth systems \u2014 from lead magnets and landing pages to qualification workflows and CRM integration. You get a steady pipeline of warm, sales-ready prospects, not just raw traffic.",
      benefits: ["Qualified lead pipelines", "Automated follow-up systems", "CRM integration", "Higher close rates"],
      cta: "Build Your Growth System",
      link: "/#contact"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Our Services | TrexHub Digital Marketing Agency", "description": "Explore TrexHub's full range of digital marketing services \u2014 Facebook Ads, Google Ads, SEO, Social Media, Email Marketing, WhatsApp Marketing, PPC, and Growth Marketing.", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6" data-astro-cid-ucd2ps2b> <div class="text-center mb-16" data-astro-cid-ucd2ps2b> <h1 class="mb-4 text-5xl font-medium leading-none tracking-tight md:text-6xl" data-astro-cid-ucd2ps2b>Our Services</h1> <p class="text-xl font-normal leading-7 mx-auto max-w-3xl" data-astro-cid-ucd2ps2b>
Every service TrexHub offers is built around one goal — turning your marketing spend into measurable business growth. No fluff, no vanity metrics. Just results.
</p> </div> <div class="space-y-24" data-astro-cid-ucd2ps2b> ${services.map((service) => renderTemplate`<div class="service-item" data-astro-cid-ucd2ps2b> <div class="mb-12" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": service.index, "titleTop": service.titleTop, "titleBottom": service.titleBottom, "img": service.img, "alt": service.alt, "link": service.link, "data-astro-cid-ucd2ps2b": true })} </div> <div class="grid md:grid-cols-2 gap-10 px-4" data-astro-cid-ucd2ps2b> <div data-astro-cid-ucd2ps2b> <h3 class="text-2xl font-medium mb-4" data-astro-cid-ucd2ps2b>What we do</h3> <p class="mb-6" data-astro-cid-ucd2ps2b>${service.description}</p> <a${addAttribute(service.link, "href")} class="inline-flex items-center px-8 py-4 bg-[#b9ff66] text-black rounded-2xl hover:bg-black hover:text-white transition-all font-medium" data-astro-cid-ucd2ps2b> ${service.cta} <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-ucd2ps2b></path> </svg> </a> </div> <div class="bg-[#f3f3f3] rounded-2xl p-8" data-astro-cid-ucd2ps2b> <h3 class="text-2xl font-medium mb-4" data-astro-cid-ucd2ps2b>What you get</h3> <ul class="space-y-4" data-astro-cid-ucd2ps2b> ${service.benefits.map((benefit) => renderTemplate`<li class="flex items-start" data-astro-cid-ucd2ps2b> <svg class="mr-2 w-5 h-5 mt-1 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ucd2ps2b> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-ucd2ps2b></path> </svg> <span data-astro-cid-ucd2ps2b>${benefit}</span> </li>`)} </ul> </div> </div> </div>`)} </div> <div class="mt-24 text-center" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate` <div class="p-10 md:p-16" data-astro-cid-ucd2ps2b> <h2 class="text-3xl md:text-4xl font-medium mb-6" data-astro-cid-ucd2ps2b>Not sure which service is right for you?</h2> <p class="mb-10 text-xl max-w-2xl mx-auto" data-astro-cid-ucd2ps2b>
Book a free 30-minute strategy call and we'll map out exactly what TrexHub can do to grow your business.
</p> <a href="/#contact" class="inline-flex items-center px-10 py-5 bg-black text-white rounded-2xl hover:bg-[#b9ff66] hover:text-black transition-all font-medium text-xl" data-astro-cid-ucd2ps2b>
Book a Free Strategy Call
</a> </div> ` })} </div> </div> ` })} `;
}, "/Users/d4ault/Downloads/Positivus-main/src/pages/services.astro", void 0);

const $$file = "/Users/d4ault/Downloads/Positivus-main/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
