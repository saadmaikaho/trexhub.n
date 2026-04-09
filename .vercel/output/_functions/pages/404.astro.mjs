/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D9AOt8k0.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CBmOb5Hg.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Page Not Found | TrexHub" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[80vh] flex items-center justify-center px-4 py-20"> <div class="text-center max-w-lg mx-auto"> <!-- Big 404 --> <div class="relative mb-8"> <p class="text-[160px] md:text-[200px] font-medium leading-none text-[#f3f3f3] select-none">404</p> <div class="absolute inset-0 flex items-center justify-center"> <span class="bg-[#b9ff66] text-black text-sm font-medium px-4 py-1 rounded-full">Page Not Found</span> </div> </div> <h1 class="text-3xl md:text-4xl font-medium mb-4">Oops — wrong turn</h1> <p class="text-gray-500 text-lg mb-10">
The page you're looking for doesn't exist or has been moved. Let's get you back on track.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/" class="px-8 py-4 bg-black hover:bg-[#b9ff66] hover:text-black text-white rounded-2xl text-lg font-medium transition-all duration-200">
Back to Home
</a> <a href="/#contact" class="px-8 py-4 border border-black hover:bg-black hover:text-white text-black rounded-2xl text-lg font-medium transition-all duration-200">
Contact Us
</a> </div> <div class="mt-12 pt-8 border-t border-gray-100"> <p class="text-sm text-gray-400 mb-4">Or go directly to:</p> <div class="flex flex-wrap gap-3 justify-center text-sm"> ${[
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/articles" }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="px-4 py-2 bg-[#f3f3f3] hover:bg-[#b9ff66] rounded-lg transition-colors font-medium"> ${link.label} </a>`)} </div> </div> </div> </div> ` })}`;
}, "/Users/d4ault/Downloads/Positivus-main/src/pages/404.astro", void 0);

const $$file = "/Users/d4ault/Downloads/Positivus-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
