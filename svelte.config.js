import sveltePreprocess from "svelte-preprocess";

import pkg from "svelte-preprocess";
const { pug, stylus } = pkg;

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    stylus: {
      imports: ["/src/style/utils/functions.styl"],
    },
  }),
  pug: [stylus(), pug()],
};
