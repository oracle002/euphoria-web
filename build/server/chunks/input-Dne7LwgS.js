import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, k as add_attribute } from './ssr-BPpBco92.js';
import { c as cn } from './index3-B3GebGGx.js';

const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value", "readonly"]);
  let { class: className = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { readonly = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0) $$bindings.readonly(readonly);
  return `<input${spread(
    [
      {
        class: escape_attribute_value(cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className))
      },
      { readonly: readonly || null },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("value", value, 0)}>`;
});

export { Input as I };
//# sourceMappingURL=input-Dne7LwgS.js.map
