import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CR-Z1at4.mjs';
import { manifest } from './manifest_TXvTKpeI.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/articles/api/search.json.astro.mjs');
const _page5 = () => import('./pages/articles/search.astro.mjs');
const _page6 = () => import('./pages/articles/tag/_---tag_.astro.mjs');
const _page7 = () => import('./pages/articles.astro.mjs');
const _page8 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page9 = () => import('./pages/invoice.astro.mjs');
const _page10 = () => import('./pages/pricing.astro.mjs');
const _page11 = () => import('./pages/privacy-policy.astro.mjs');
const _page12 = () => import('./pages/services/email-whatsapp-marketing.astro.mjs');
const _page13 = () => import('./pages/services/facebook-instagram-ads.astro.mjs');
const _page14 = () => import('./pages/services/google-ads-ppc.astro.mjs');
const _page15 = () => import('./pages/services/growth-marketing-lead-generation.astro.mjs');
const _page16 = () => import('./pages/services/seo.astro.mjs');
const _page17 = () => import('./pages/services/social-media-marketing.astro.mjs');
const _page18 = () => import('./pages/services.astro.mjs');
const _page19 = () => import('./pages/terms-of-service.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/articles/api/search.json.ts", _page4],
    ["src/pages/articles/search.astro", _page5],
    ["src/pages/articles/tag/[...tag].astro", _page6],
    ["src/pages/articles/index.astro", _page7],
    ["src/pages/articles/[...slug].astro", _page8],
    ["src/pages/invoice.astro", _page9],
    ["src/pages/pricing.astro", _page10],
    ["src/pages/privacy-policy.astro", _page11],
    ["src/pages/services/email-whatsapp-marketing.astro", _page12],
    ["src/pages/services/facebook-instagram-ads.astro", _page13],
    ["src/pages/services/google-ads-ppc.astro", _page14],
    ["src/pages/services/growth-marketing-lead-generation.astro", _page15],
    ["src/pages/services/seo.astro", _page16],
    ["src/pages/services/social-media-marketing.astro", _page17],
    ["src/pages/services.astro", _page18],
    ["src/pages/terms-of-service.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cf258724-6831-4f37-8dbf-a2b1713f5617",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
