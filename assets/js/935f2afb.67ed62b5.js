"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"reactSidebar":[{"type":"link","label":"Install","href":"/react/install","docId":"react/install"},{"type":"category","label":"API","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"makeStyles","href":"/react/api/make-styles","docId":"react/api/make-styles"},{"type":"link","label":"mergeClasses","href":"/react/api/merge-classes","docId":"react/api/merge-classes"},{"type":"link","label":"shorthands","href":"/react/api/shorthands","docId":"react/api/shorthands"},{"type":"link","label":"makeStaticStyles","href":"/react/api/make-static-styles","docId":"react/api/make-static-styles"},{"type":"link","label":"makeResetStyles","href":"/react/api/make-reset-styles","docId":"react/api/make-reset-styles"},{"type":"link","label":"createDOMRenderer","href":"/react/api/create-dom-renderer","docId":"react/api/create-dom-renderer"},{"type":"link","label":"TextDirectionProvider","href":"/react/api/text-direction-provider","docId":"react/api/text-direction-provider"}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Atomic CSS","href":"/react/guides/atomic-css","docId":"react/guides/atomic-css"},{"type":"link","label":"Limitations","href":"/react/guides/limitations","docId":"react/guides/limitations"},{"type":"link","label":"Server-Side Rendering","href":"/react/guides/ssr-usage","docId":"react/guides/ssr-usage"},{"type":"link","label":"Child Window rendering","href":"/react/guides/child-window-rendering","docId":"react/guides/child-window-rendering"}]},{"type":"category","label":"Ahead-of-time compilation","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/react/ahead-of-time-compilation/introduction","docId":"react/ahead-of-time-compilation/introduction"},{"type":"link","label":"With Webpack","href":"/react/ahead-of-time-compilation/with-webpack","docId":"react/ahead-of-time-compilation/with-webpack"},{"type":"link","label":"With Babel","href":"/react/ahead-of-time-compilation/with-babel","docId":"react/ahead-of-time-compilation/with-babel"},{"type":"link","label":"Technical details","href":"/react/ahead-of-time-compilation/technical-details","docId":"react/ahead-of-time-compilation/technical-details"}]},{"type":"category","label":"CSS extraction \ud83d\udea7","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/react/css-extraction/introduction","docId":"react/css-extraction/introduction"},{"type":"link","label":"With Webpack","href":"/react/css-extraction/with-webpack","docId":"react/css-extraction/with-webpack"},{"type":"link","label":"With Next.js","href":"/react/css-extraction/with-nextjs","docId":"react/css-extraction/with-nextjs"}]}],"tryItOutSidebar":[{"type":"category","label":"Try it out","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Margin","href":"/try-it-out#margin"},{"type":"link","label":"Padding","href":"/try-it-out#padding"},{"type":"link","label":"Border","href":"/try-it-out#border"},{"type":"link","label":"Pseudo-selectors","href":"/try-it-out#pseudo-selectors"},{"type":"link","label":"Pseudo-elements","href":"/try-it-out#pseudo-elements"},{"type":"link","label":"Selectors","href":"/try-it-out#selectors"},{"type":"link","label":"Nested selectors","href":"/try-it-out#nested"},{"type":"link","label":"Media queries","href":"/try-it-out#media"},{"type":"link","label":"Global styles","href":"/try-it-out#global"},{"type":"link","label":"makeResetStyles","href":"/try-it-out#make-reset-styles"}],"href":"/try-it-out/"}]},"docs":{"react/ahead-of-time-compilation/introduction":{"id":"react/ahead-of-time-compilation/introduction","title":"Introduction","description":"While there is nothing wrong with the associated runtime costs of a CSS-in-JS engine, larger and more complex applications might want to optimize for performance.","sidebar":"reactSidebar"},"react/ahead-of-time-compilation/technical-details":{"id":"react/ahead-of-time-compilation/technical-details","title":"Technical details","description":"What is being optimized with AOT (Ahead Of Time) compilation?","sidebar":"reactSidebar"},"react/ahead-of-time-compilation/with-babel":{"id":"react/ahead-of-time-compilation/with-babel","title":"With Babel","description":"Install","sidebar":"reactSidebar"},"react/ahead-of-time-compilation/with-webpack":{"id":"react/ahead-of-time-compilation/with-webpack","title":"With Webpack","description":"Install","sidebar":"reactSidebar"},"react/api/create-dom-renderer":{"id":"react/api/create-dom-renderer","title":"createDOMRenderer","description":"createDOMRenderer is paired with RendererProvider component and is useful for child window rendering and SSR scenarios. This is the default renderer for web, and will make sure that styles are injected to a document.","sidebar":"reactSidebar"},"react/api/make-reset-styles":{"id":"react/api/make-reset-styles","title":"makeResetStyles","description":"Atomic CSS has tradeoffs.","sidebar":"reactSidebar"},"react/api/make-static-styles":{"id":"react/api/make-static-styles","title":"makeStaticStyles","description":"Creates styles with a global selector. This is especially useful for CSS resets, for example normalize.css.","sidebar":"reactSidebar"},"react/api/make-styles":{"id":"react/api/make-styles","title":"makeStyles","description":"Is used to define styles, returns a React hook that should be called inside a component:","sidebar":"reactSidebar"},"react/api/merge-classes":{"id":"react/api/merge-classes","title":"mergeClasses","description":"There are cases where you need to merge classes from multiple useClasses calls. To merge the classes correctly, you need to use mergeClasses() function, which merges and dedupes the atomic classes generated by makeStyles().","sidebar":"reactSidebar"},"react/api/shorthands":{"id":"react/api/shorthands","title":"shorthands","description":"Check limitations to understand why these helpers are needed.","sidebar":"reactSidebar"},"react/api/text-direction-provider":{"id":"react/api/text-direction-provider","title":"TextDirectionProvider","description":"TextDirectionProvider is used to determine the text direction for style computation. The default text direction is Left-To-Right (LTR). For more details, check RTL support.","sidebar":"reactSidebar"},"react/css-extraction/introduction":{"id":"react/css-extraction/introduction","title":"Introduction","description":"This technology is experimental, please report any issues if found.","sidebar":"reactSidebar"},"react/css-extraction/with-nextjs":{"id":"react/css-extraction/with-nextjs","title":"With Next.js","description":"Install","sidebar":"reactSidebar"},"react/css-extraction/with-webpack":{"id":"react/css-extraction/with-webpack","title":"With Webpack","description":"Install","sidebar":"reactSidebar"},"react/guides/atomic-css":{"id":"react/guides/atomic-css","title":"Atomic CSS","description":"Atomic CSS is a constrasting approach to monolithic classes. In Atomic CSS every property-value is written as a single CSS rule.","sidebar":"reactSidebar"},"react/guides/child-window-rendering":{"id":"react/guides/child-window-rendering","title":"Child Window rendering","description":"When rendering in the main browser window, many components will need access to window or document to apply styles, listening for events, or measuring things. However it is possible to render to child windows and elements hosted in iframes. The same technique can be used to render styles in Shadow DOM.","sidebar":"reactSidebar"},"react/guides/limitations":{"id":"react/guides/limitations","title":"Limitations","description":"Runtime styles","sidebar":"reactSidebar"},"react/guides/ssr-usage":{"id":"react/guides/ssr-usage","title":"Server-Side Rendering","description":"Griffel provides first class support for Server-Side Rendering.","sidebar":"reactSidebar"},"react/install":{"id":"react/install","title":"Install","description":"By default, Griffel is a runtime CSS-in-JS engine, you can simply install and use it in code directly:","sidebar":"reactSidebar"},"try-it-out/try-it-out":{"id":"try-it-out/try-it-out","title":"Try it out","description":"Don\'t know how to get started writing styles in Griffel? Having trouble getting your styles to work the way you want to?","sidebar":"tryItOutSidebar"}}}')}}]);