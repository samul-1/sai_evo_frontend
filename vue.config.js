const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const sass = require("sass");

module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       sassOptions: {
  //         includePaths: __dirname + "/" + "node_modules",
  //       },
  //     },
  //   },
  // },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "esbuild-loader",
        },
        /*{
          test: /\.scss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            {
              loader: "css-loader?-url",
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  "no-map": true,
                  plugins: {
                    "postcss-100vh-fix": {},
                    "postcss-preset-env": {},
                    cssnano: {},
                  },
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: sass,
                sassOptions: {
                  includePaths: ["node_modules"],
                },
              },
            },
          ],
        },*/
      ],
    },
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["typescript"],
      }),
    ],
  },
};
