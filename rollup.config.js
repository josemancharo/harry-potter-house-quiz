import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import swc from "rollup-plugin-swc";
import css from "rollup-plugin-import-css";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js"
  },
  plugins: [
    svelte({
      dev: !production,
      css: (css) => {
        css.write("public/bundle.css");
      }
    }),

    resolve(),
    css(),
    swc({
      minify: production,
      jsc: {
        target: "es2015"
      }   
    })
  ]
};
