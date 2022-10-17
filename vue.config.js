/* eslint-disable quote-props */
import AutoImport from "unplugin-auto-import/webpack";
module.exports = {
  configureWebpack: {
    plugins: [
      AutoImport({
        eslintrc: {
          enabled: true,
        },
        imports: [
          "vue",
          "vue-router",
          {
            "vue-router": ["RouterLink"],
            axios: [["default", "axios"]],
          },
        ],
        dts: true,
      }),
    ],
  },
  // publicPath: '/mypage/',  // For github page
  runtimeCompiler: true,
};
