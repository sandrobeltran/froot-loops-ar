/* empty css                              */
import { a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_dMsHt0vV.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BWoWF3v1.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Marshmalloween AR" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col w-full h-full bg-[#E20031] items-center justify-center px-8 gap-16"> <img src="/logo.png" alt="Partners logo" class="w-full drop-shadow-[10px_10px_8px_#12121288]"> <a href="/ar" class="bg-white rounded-xl font-[FrootLoops] text-[#E20031] shadow-lg shadow-stone-900/60 px-4 py-2 text-3xl font-semibold">
Experiencia AR
</a> </main> ` })}`;
}, "C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/index.astro";
const $$url = "/froot-loops-ar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
