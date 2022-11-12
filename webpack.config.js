const path = require("path");
const MiniCssWebpackPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
let currentTask = process.env.npm_lifecycle_event;

let config = {
    mode: "development",
    devtool: "eval-source-map",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle[hash].js",
        assetModuleFilename: 'resource/[name][ext]',
        clean: true
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, "public")
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            url: true
                        }
                    }]
            },
            {
                test: /\.(png|jpe?g)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'asset/image/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        }), new MiniCssWebpackPlugin({
            filename: "style.css"
        })
    ]
}

switch (currentTask) {
    case "build": {
        config.mode = "production";
        config.module.rules[1].use[0] = MiniCssWebpackPlugin.loader;
        config.plugins.push(new MiniCssWebpackPlugin({
            filename: "style.css"
        }));
    }
    case "test": {
        config.mode = "development";
        config.module.rules[1].use[0] = MiniCssWebpackPlugin.loader;
        config.plugins.push(new MiniCssWebpackPlugin({
            filename: "style.css"
        }));
    }
    default: {
        config.mode = "production";
        config.module.rules[1].use[0] = MiniCssWebpackPlugin.loader;
        config.plugins.push(new MiniCssWebpackPlugin({
            filename: "style.css"
        }));
    }
}

module.exports = config;