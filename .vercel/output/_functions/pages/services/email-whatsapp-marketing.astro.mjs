/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D9AOt8k0.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CBmOb5Hg.mjs';
import { $ as $$Card } from '../../chunks/Card_be3dafm5.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_rDDczuzq.mjs';
import { c as c5 } from '../../chunks/card-pic5_Clbr-I3q.mjs';
import { i as icon1, a as icon2, b as icon4 } from '../../chunks/icon4_B9eKxzPw.mjs';
import { l as larrow } from '../../chunks/icon3_Bc0m-SGn.mjs';
export { renderers } from '../../renderers.mjs';

const $$EmailWhatsappMarketing = createComponent(($$result, $$props, $$slots) => {
  const includes = [
    {
      title: "Email Marketing",
      items: ["Welcome & onboarding sequences", "Lead nurture email flows", "Promotional & broadcast campaigns", "Re-engagement campaigns", "A/B testing subject lines & copy"]
    },
    {
      title: "WhatsApp Marketing",
      items: ["WhatsApp Business API setup", "Broadcast list campaigns", "Automated follow-up sequences", "Lead qualification via WhatsApp", "Customer support automation"]
    },
    {
      title: "Strategy & Analytics",
      items: ["Audience segmentation", "Funnel mapping & automation", "Open rate & CTR optimisation", "Monthly performance reports", "CRM integration & list management"]
    }
  ];
  const process = [
    { title: "Audience Segmentation", description: "We segment your contact list by behaviour, interest, and stage in the buyer journey so every message feels personal and relevant.", icon: icon1 },
    { title: "Sequence Design", description: "We map out your email and WhatsApp flows \u2014 from first contact to purchase \u2014 and write compelling copy for every touchpoint.", icon: icon2 },
    { title: "Automation Setup", description: "We build and test your automation workflows so leads are nurtured 24/7 without you lifting a finger.", icon: larrow },
    { title: "Optimise & Report", description: "We monitor open rates, click rates, and conversions, then continuously improve your sequences for better results.", icon: icon4 }
  ];
  const faqs = [
    { question: "Is email marketing still effective in Nigeria?", answer: "Absolutely. Email consistently delivers the highest ROI of any digital marketing channel \u2014 averaging \u20A63,600 return for every \u20A6100 spent. Combined with WhatsApp, it's one of the most powerful tools for nurturing leads." },
    { question: "What's the difference between email and WhatsApp marketing?", answer: "Email is great for longer-form content, nurture sequences, and formal communications. WhatsApp has higher open rates (90%+) and is more conversational \u2014 ideal for follow-ups, reminders, and quick engagement." },
    { question: "Do you write the email copy too?", answer: "Yes. Our team handles strategy, copywriting, design, and automation setup. We just need your brand guidelines and product/service information to get started." },
    { question: "How do you grow my email and WhatsApp list?", answer: "We design lead magnets, opt-in forms, and landing pages that attract subscribers. We can also integrate your existing ad campaigns to funnel leads directly into your email and WhatsApp sequences." }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Email & WhatsApp Marketing in Lagos | TrexHub", "description": "Turn your contact list into a revenue channel. TrexHub builds email and WhatsApp marketing sequences that nurture leads and drive consistent sales for Nigerian businesses." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6"> <!-- Hero --> <div class="grid md:grid-cols-2 gap-12 items-center mb-24"> <div> <span class="inline-block bg-[#b9ff66] text-black text-sm font-medium px-4 py-1 rounded-full mb-4">Email & WhatsApp Marketing</span> <h1 class="mb-6 text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">Turn Your Contact List Into a Revenue Machine</h1> <p class="mb-8 text-lg font-normal text-gray-700">
Most businesses collect leads and let them go cold. TrexHub builds automated email and WhatsApp sequences that nurture every lead until they're ready to buy — and keep customers coming back.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/#contact" class="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-[#b9ff66] hover:text-black transition-all font-medium text-lg">
Start Email Marketing
</a> <a href="#process" class="inline-flex items-center justify-center px-8 py-4 bg-[#f3f3f3] text-black rounded-2xl hover:bg-black hover:text-white transition-all font-medium text-lg">
See Our Process
</a> </div> <div class="flex gap-8 mt-8"> <div><p class="text-2xl font-medium">90%+</p><p class="text-sm text-gray-500">WhatsApp Open Rate</p></div> <div><p class="text-2xl font-medium">30%</p><p class="text-sm text-gray-500">Avg. Revenue from Email</p></div> <div><p class="text-2xl font-medium">4x</p><p class="text-sm text-gray-500">Higher Conversion vs Cold</p></div> </div> </div> <div class="relative"> <div class="bg-[#b9ff66] rounded-[45px] p-4 md:p-8 relative z-10"> ${renderComponent($$result2, "Image", $$Image, { "src": c5, "alt": "Email & WhatsApp Marketing", "class": "w-full h-auto rounded-[35px]" })} </div> <div class="absolute top-8 left-8 right-8 bottom-8 bg-black rounded-[45px] -z-10"></div> </div> </div> <!-- What's included --> <div class="mb-24"> <h2 class="mb-4 text-3xl font-medium text-center">What's Included</h2> <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Everything you need to build a high-converting email and WhatsApp marketing system.</p> <div class="grid md:grid-cols-3 gap-8"> ${includes.map((col) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-xl font-medium mb-5">${col.title}</h3> <ul class="space-y-3"> ${col.items.map((item) => renderTemplate`<li class="flex items-start gap-2"> <span class="w-2 h-2 rounded-full bg-[#b9ff66] flex-shrink-0 mt-2"></span> <span>${item}</span> </li>`)} </ul> </div> ` })}`)} </div> </div> <!-- Process --> <div class="mb-24" id="process"> <h2 class="mb-12 text-3xl font-medium text-center">Our Process</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${process.map((step, i) => renderTemplate`<div class="bg-[#f3f3f3] rounded-2xl p-8 relative"> <div class="absolute -top-5 left-8 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">${i + 1}</div> ${renderComponent($$result2, "Image", $$Image, { "src": step.icon, "alt": step.title, "class": "h-10 w-auto mb-4 mt-2" })} <h3 class="text-lg font-medium mb-3">${step.title}</h3> <p class="text-sm text-gray-600">${step.description}</p> </div>`)} </div> </div> <!-- FAQs --> <div class="mb-24"> <h2 class="mb-12 text-3xl font-medium text-center">Frequently Asked Questions</h2> <div class="grid md:grid-cols-2 gap-8"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-lg font-medium mb-3">${faq.question}</h3> <p class="text-gray-600">${faq.answer}</p> </div> ` })}`)} </div> </div> <!-- CTA --> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-10 md:p-16 text-center"> <h2 class="text-3xl md:text-4xl font-medium mb-4">Ready to make your contact list work for you?</h2> <p class="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">Book a free strategy call and we'll show you how to build an email and WhatsApp system that generates consistent revenue.</p> <a href="/#contact" class="inline-flex items-center px-10 py-5 bg-black text-white rounded-2xl hover:bg-[#b9ff66] hover:text-black transition-all font-medium text-xl">
Book a Free Strategy Call
</a> </div> ` })} </div> ` })}`;
}, "/Users/d4ault/Downloads/Positivus-main/src/pages/services/email-whatsapp-marketing.astro", void 0);

const $$file = "/Users/d4ault/Downloads/Positivus-main/src/pages/services/email-whatsapp-marketing.astro";
const $$url = "/services/email-whatsapp-marketing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EmailWhatsappMarketing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
