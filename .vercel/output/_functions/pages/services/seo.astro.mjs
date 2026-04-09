/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D9AOt8k0.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CBmOb5Hg.mjs';
import { $ as $$Card } from '../../chunks/Card_be3dafm5.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_rDDczuzq.mjs';
import { c as c1 } from '../../chunks/card-pic1_BK0Ixlcy.mjs';
import { i as icon1, a as icon2, b as icon4 } from '../../chunks/icon4_B9eKxzPw.mjs';
import { l as larrow } from '../../chunks/icon3_Bc0m-SGn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const faqItems = [
    {
      question: "What is SEO and why is it important?",
      answer: "Search Engine Optimization (SEO) is the practice of optimizing your website to increase its visibility in organic search engine results. It's important because higher visibility leads to more traffic, better brand recognition, and increased opportunities for conversions and revenue."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy that typically takes 3-6 months to start showing significant results. However, this timeline varies depending on factors such as your website's current status, competition in your industry, and the aggressiveness of your SEO strategy."
    },
    {
      question: "What SEO strategies do you use?",
      answer: "We use a comprehensive approach that includes technical SEO (improving site structure, speed, and mobile-friendliness), on-page SEO (optimizing content, meta tags, and internal linking), off-page SEO (building quality backlinks), and local SEO for businesses with physical locations."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track multiple metrics including organic traffic growth, keyword rankings, conversion rates, bounce rates, and return on investment (ROI). We provide regular reports that show progress across these key performance indicators."
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer: "We don't guarantee specific rankings as search engines frequently update their algorithms and rankings can fluctuate. However, we do guarantee that we'll use industry best practices to significantly improve your website's visibility and organic traffic over time."
    }
  ];
  const process = [
    {
      title: "Research & Analysis",
      description: "We conduct in-depth research on your industry, competitors, target audience, and current website performance to develop a tailored SEO strategy.",
      icon: icon1
    },
    {
      title: "On-Page Optimization",
      description: "We optimize your website's content, structure, and technical elements to improve search engine visibility and user experience.",
      icon: icon2
    },
    {
      title: "Off-Page Strategy",
      description: "We build high-quality backlinks and establish your brand authority through content marketing and digital PR campaigns.",
      icon: larrow
    },
    {
      title: "Monitoring & Refinement",
      description: "We continuously monitor performance, analyze data, and refine our strategies to ensure long-term success and ROI.",
      icon: icon4
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "SEO Services in Lagos, Nigeria | TrexHub", "description": "Rank higher on Google and drive more organic traffic with TrexHub's SEO services. We help Nigerian businesses dominate search results through strategic optimization." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6"> <!-- Hero Section --> <div class="grid md:grid-cols-2 gap-12 items-center mb-24"> <div> <h1 class="mb-6 text-4xl font-medium leading-none tracking-tight md:text-5xl lg:text-6xl">Search Engine Optimization</h1> <p class="mb-8 text-lg font-normal">
Get your business ranking on page one of Google for the keywords your customers are searching. TrexHub builds sustainable SEO strategies that drive long-term organic growth for Nigerian businesses.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="#contact" class="inline-flex items-center justify-center px-8 py-4 bg-green text-dark rounded-2xl hover:bg-dark hover:text-white transition-all font-medium text-lg">
Get SEO Audit
</a> <a href="#process" class="inline-flex items-center justify-center px-8 py-4 bg-gray text-dark rounded-2xl hover:bg-dark hover:text-white transition-all font-medium text-lg">
Our Process
</a> </div> </div> <div class="relative"> <div class="bg-green rounded-[45px] p-4 md:p-8 relative z-10"> ${renderComponent($$result2, "Image", $$Image, { "src": c1, "alt": "SEO Services", "class": "w-full h-auto rounded-[35px]" })} </div> <div class="absolute top-8 left-8 right-8 bottom-8 bg-dark rounded-[45px] -z-10"></div> </div> </div> <!-- Services Overview --> <div class="mb-24"> <h2 class="mb-12 text-3xl font-medium text-center">What Our SEO Services Include</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-xl font-medium mb-4">Technical SEO</h3> <ul class="space-y-3"> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Website performance optimization</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Site structure improvements</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Mobile optimization</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>XML sitemap creation</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Crawl error fixing</span> </li> </ul> </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-xl font-medium mb-4">On-Page SEO</h3> <ul class="space-y-3"> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Keyword research & analysis</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Content optimization</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Meta tags optimization</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Internal linking strategy</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>URL structure optimization</span> </li> </ul> </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-xl font-medium mb-4">Off-Page SEO</h3> <ul class="space-y-3"> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Quality link building</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Brand mentions & citations</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Social media optimization</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Influencer outreach</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Competitor backlink analysis</span> </li> </ul> </div> ` })} </div> </div> <!-- Process Section --> <div class="mb-24" id="process"> <h2 class="mb-12 text-3xl font-medium text-center">Our SEO Process</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${process.map((step, index) => renderTemplate`<div class="bg-gray rounded-2xl p-8 relative"> <div class="absolute -top-6 left-8 bg-dark text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-medium"> ${index + 1} </div> <div class="mb-4"> ${renderComponent($$result2, "Image", $$Image, { "src": step.icon, "alt": step.title, "class": "h-12 w-auto" })} </div> <h3 class="text-xl font-medium mb-4">${step.title}</h3> <p>${step.description}</p> </div>`)} </div> </div> <!-- FAQ Section --> <div class="mb-24"> <h2 class="mb-12 text-3xl font-medium text-center">Frequently Asked Questions</h2> <div class="grid md:grid-cols-2 gap-8"> ${faqItems.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8"> <h3 class="text-xl font-medium mb-4">${item.question}</h3> <p>${item.answer}</p> </div> ` })}`)} </div> </div> <!-- CTA --> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-10 md:p-16 text-center"> <h2 class="text-3xl md:text-4xl font-medium mb-4">Ready to rank higher on Google?</h2> <p class="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">Book a free strategy call and we'll audit your website's SEO, identify the biggest opportunities, and show you exactly how TrexHub can grow your organic traffic.</p> <a href="/#contact" class="inline-flex items-center px-10 py-5 bg-black text-white rounded-2xl hover:bg-[#b9ff66] hover:text-black transition-all font-medium text-xl">
Get a Free SEO Audit
</a> </div> ` })} </div> ` })}`;
}, "/Users/d4ault/Downloads/Positivus-main/src/pages/services/seo.astro", void 0);

const $$file = "/Users/d4ault/Downloads/Positivus-main/src/pages/services/seo.astro";
const $$url = "/services/seo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Seo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
