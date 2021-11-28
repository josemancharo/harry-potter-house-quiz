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
    file: "public/bundle.js",
    compact: production
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production,
      }
    }),

    resolve( {browser: true } ),
    css(),
    swc({
      minify: production,
      jsc: {
        target: "es2019",
        minify: {
          compress: true,
          mangle: true
        }
      }
    })
  ]
};
