// Karma configuration
// Generated on Fri Jan 20 2017 11:15:02 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // list of files/patterns to load in the browser
    files: [
      { pattern: 'https://cdn.auth0.com/js/lock/10.9.1/lock.min.js', watched: false, served: false, included: true },
      { pattern: 'spec.bundle.js', watched: false }
    ],
    // files to exclude
    exclude: [],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-webpack"),
      require("karma-coverage")

    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap', 'coverage'] },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
          { test: /\.html$/, loader: 'raw' },
          { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
          { test: /\.css$/, loader: 'style!css' }
        ]
      }
    },
    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter

    reporters: ['progress', 'coverage'],
    // web server port
    port: 8081,
    // enable colors in the output
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    // if true, Karma runs tests once and exits
    singleRun: false
  });
};
