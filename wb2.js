{
  mode: 'development',
  context: '/Users/samuelebonini/Desktop/platform/frontend',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/samuelebonini/Desktop/platform/frontend/dist',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/Users/samuelebonini/Desktop/platform/frontend/src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/samuelebonini/Desktop/platform/frontend/node_modules',
      '/Users/samuelebonini/Desktop/platform/frontend/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/samuelebonini/Desktop/platform/frontend/node_modules/@vue/cli-plugin-typescript/node_modules',
      '/Users/samuelebonini/Desktop/platform/frontend/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/samuelebonini/Desktop/platform/frontend/node_modules',
      '/Users/samuelebonini/Desktop/platform/frontend/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('mjs') */
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
        include: [
          /node_modules/
        ]
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/.cache/vue-loader',
              cacheIdentifier: '5c9e7fc2'
            }
          },
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-loader-v16/dist/index.js',
            options: {
              cacheDirectory: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/.cache/vue-loader',
              cacheIdentifier: '5c9e7fc2',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/.cache/babel-loader',
              cacheIdentifier: '2e612ad4'
            }
          },
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/samuelebonini/Desktop/platform/frontend/node_modules/@vue/cli-service/lib'
        ],
        use: [
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/eslint-loader/index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue',
                '.ts',
                '.tsx'
              ],
              cache: true,
              cacheIdentifier: '81954954',
              emitWarning: false,
              emitError: false,
              eslintPath: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/eslint',
              formatter: undefined
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/.cache/ts-loader',
              cacheIdentifier: 'b8300460'
            }
          },
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/babel-loader/lib/index.js'
          },
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/.cache/ts-loader',
              cacheIdentifier: 'b8300460'
            }
          },
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/babel-loader/lib/index.js'
          },
          {
            loader: '/Users/samuelebonini/Desktop/platform/frontend/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          VUE_APP_GOOGLE_OAUTH_CLIENT_ID: '"VOk95e9kokyZ21dxzvPeAxTcZBxyqtSEW35CWSbN"',
          VUE_APP_GOOGLE_OAUTH_CLIENT_SECRET: '"GYSwnd9U4BWWUkBIAE04NwYavkkHNddUu9kusDzKvKT5ogjIy7rUnBurMoDRQJCyv2RtUndDOI5u3oyX654LZUGBqGj3xrr3c9Ccc22udHljKrT5LTRiFa1fuqOfXpmK"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'frontend',
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/samuelebonini/Desktop/platform/frontend/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: '/Users/samuelebonini/Desktop/platform/frontend/public',
          to: '/Users/samuelebonini/Desktop/platform/frontend/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '@vue/compiler-sfc'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: false
          }
        }
      }
    ),
    {
      options: {
        languages: [
          {
            label: 'typescript',
            entry: [
              'vs/basic-languages/typescript/typescript.contribution',
              'vs/language/typescript/monaco.contribution'
            ],
            worker: {
              id: 'vs/language/typescript/tsWorker',
              entry: 'vs/language/typescript/ts.worker'
            }
          }
        ],
        features: [
          {
            label: 'accessibilityHelp',
            entry: 'vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp'
          },
          {
            label: 'anchorSelect',
            entry: 'vs/editor/contrib/anchorSelect/anchorSelect'
          },
          {
            label: 'bracketMatching',
            entry: 'vs/editor/contrib/bracketMatching/bracketMatching'
          },
          {
            label: 'caretOperations',
            entry: 'vs/editor/contrib/caretOperations/caretOperations'
          },
          {
            label: 'clipboard',
            entry: 'vs/editor/contrib/clipboard/clipboard'
          },
          {
            label: 'codeAction',
            entry: 'vs/editor/contrib/codeAction/codeActionContributions'
          },
          {
            label: 'codelens',
            entry: 'vs/editor/contrib/codelens/codelensController'
          },
          {
            label: 'colorPicker',
            entry: 'vs/editor/contrib/colorPicker/colorContributions'
          },
          {
            label: 'comment',
            entry: 'vs/editor/contrib/comment/comment'
          },
          {
            label: 'contextmenu',
            entry: 'vs/editor/contrib/contextmenu/contextmenu'
          },
          {
            label: 'coreCommands',
            entry: 'vs/editor/browser/controller/coreCommands'
          },
          {
            label: 'cursorUndo',
            entry: 'vs/editor/contrib/cursorUndo/cursorUndo'
          },
          {
            label: 'dnd',
            entry: 'vs/editor/contrib/dnd/dnd'
          },
          {
            label: 'documentSymbols',
            entry: 'vs/editor/contrib/documentSymbols/documentSymbols'
          },
          {
            label: 'find',
            entry: 'vs/editor/contrib/find/findController'
          },
          {
            label: 'folding',
            entry: 'vs/editor/contrib/folding/folding'
          },
          {
            label: 'fontZoom',
            entry: 'vs/editor/contrib/fontZoom/fontZoom'
          },
          {
            label: 'format',
            entry: 'vs/editor/contrib/format/formatActions'
          },
          {
            label: 'gotoError',
            entry: 'vs/editor/contrib/gotoError/gotoError'
          },
          {
            label: 'gotoLine',
            entry: 'vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess'
          },
          {
            label: 'gotoSymbol',
            entry: [
              'vs/editor/contrib/gotoSymbol/goToCommands',
              'vs/editor/contrib/gotoSymbol/link/goToDefinitionAtPosition'
            ]
          },
          {
            label: 'hover',
            entry: 'vs/editor/contrib/hover/hover'
          },
          {
            label: 'iPadShowKeyboard',
            entry: 'vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard'
          },
          {
            label: 'inPlaceReplace',
            entry: 'vs/editor/contrib/inPlaceReplace/inPlaceReplace'
          },
          {
            label: 'indentation',
            entry: 'vs/editor/contrib/indentation/indentation'
          },
          {
            label: 'inlayHints',
            entry: 'vs/editor/contrib/inlayHints/inlayHintsController'
          },
          {
            label: 'inlineCompletions',
            entry: 'vs/editor/contrib/inlineCompletions/ghostTextController'
          },
          {
            label: 'inspectTokens',
            entry: 'vs/editor/standalone/browser/inspectTokens/inspectTokens'
          },
          {
            label: 'linesOperations',
            entry: 'vs/editor/contrib/linesOperations/linesOperations'
          },
          {
            label: 'linkedEditing',
            entry: 'vs/editor/contrib/linkedEditing/linkedEditing'
          },
          {
            label: 'links',
            entry: 'vs/editor/contrib/links/links'
          },
          {
            label: 'multicursor',
            entry: 'vs/editor/contrib/multicursor/multicursor'
          },
          {
            label: 'parameterHints',
            entry: 'vs/editor/contrib/parameterHints/parameterHints'
          },
          {
            label: 'quickCommand',
            entry: 'vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess'
          },
          {
            label: 'quickHelp',
            entry: 'vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess'
          },
          {
            label: 'quickOutline',
            entry: 'vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess'
          },
          {
            label: 'referenceSearch',
            entry: 'vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch'
          },
          {
            label: 'rename',
            entry: 'vs/editor/contrib/rename/rename'
          },
          {
            label: 'smartSelect',
            entry: 'vs/editor/contrib/smartSelect/smartSelect'
          },
          {
            label: 'snippets',
            entry: 'vs/editor/contrib/snippet/snippetController2'
          },
          {
            label: 'suggest',
            entry: 'vs/editor/contrib/suggest/suggestController'
          },
          {
            label: 'toggleHighContrast',
            entry: 'vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast'
          },
          {
            label: 'toggleTabFocusMode',
            entry: 'vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode'
          },
          {
            label: 'transpose',
            entry: 'vs/editor/contrib/caretOperations/transpose'
          },
          {
            label: 'unusualLineTerminators',
            entry: 'vs/editor/contrib/unusualLineTerminators/unusualLineTerminators'
          },
          {
            label: 'viewportSemanticTokens',
            entry: 'vs/editor/contrib/viewportSemanticTokens/viewportSemanticTokens'
          },
          {
            label: 'wordHighlighter',
            entry: 'vs/editor/contrib/wordHighlighter/wordHighlighter'
          },
          {
            label: 'wordOperations',
            entry: 'vs/editor/contrib/wordOperations/wordOperations'
          },
          {
            label: 'wordPartOperations',
            entry: 'vs/editor/contrib/wordPartOperations/wordPartOperations'
          }
        ],
        filename: '[name].worker.js',
        publicPath: '',
        globalAPI: false
      }
    }
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
