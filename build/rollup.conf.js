import babel from "rollup-plugin-babel";
import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  plugins: [commonjs(), vue(), babel()],
  output: [
    {
      file: "dist/vue-xstate.common.js",
      format: "cjs"
    },
    {
      format: "esm",
      file: "dist/vue-xstate.esm.js"
    }
  ]
};
