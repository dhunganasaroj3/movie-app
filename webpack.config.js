"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const webpack_1 = __importDefault(require("webpack"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
const tsconfig_paths_webpack_plugin_1 = require("tsconfig-paths-webpack-plugin");
const dotenv_webpack_1 = __importDefault(require("dotenv-webpack"));
const webpackConfig = (env) => (Object.assign(Object.assign({ entry: "./src/index.tsx" }, (env.production || !env.development ? {} : { devtool: "eval-source-map" })), { resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new tsconfig_paths_webpack_plugin_1.TsconfigPathsPlugin()]
    }, output: {
        path: path_1.default.join(__dirname, "/build"),
        filename: "build.js"
    }, module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            }
        ]
    }, plugins: [
        new html_webpack_plugin_1.default({
            template: "./public/index.html"
        }),
        new dotenv_webpack_1.default(),
        new webpack_1.default.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new fork_ts_checker_webpack_plugin_1.default({
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}"
            }
        })
    ] }));
exports.default = webpackConfig;
//# sourceMappingURL=webpack.config.js.map