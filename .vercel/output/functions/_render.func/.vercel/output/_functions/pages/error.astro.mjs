/* empty css                              */
import { a as createComponent, r as renderTemplate, f as renderComponent } from '../chunks/astro/server_dMsHt0vV.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BWoWF3v1.mjs';
export { renderers } from '../renderers.mjs';

const $$Error = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error" }, { "default": ($$result2) => renderTemplate`Error de autenticación` })}`;
}, "C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/error.astro", void 0);

const $$file = "C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/error.astro";
const $$url = "/froot-loops-ar/error";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Error,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
