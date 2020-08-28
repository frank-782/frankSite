const path = require("path")

const devMode = !process.argv.includes('-p')


module.exports = {
    mode: devMode ? "development" : "production",
    entry: "./www/src/index.jsx",
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: devMode ? "[name].js" : "[name].[contenthash].js" ,
    },

    resolve: {
        extensions: [".js", ".json", ".jsx"]
    },
    optimization: {
        splitChunks: {
            chunks: "async",
            cacheGroups: {
                react: {
                    name: "react",
                    test: (module) => {
                        return /react|redux|prop-types/.test(module.context);
                    },
                    chunks: 'initial',
                    priority: 10,
                },
                icons: {
                    name: "icons",
                    test: (module) => {
                        return /@material-ui\/icons/.test(module.context);
                    },
                    chunks: 'initial',
                    priority: 10,
                },
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "common",
                    chunks: "initial",
                    priority: -10,
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: false,
                        babelrc: false,
                        presets: [
                            require.resolve("@babel/preset-react"),
                            [require.resolve("@babel/preset-env"), {modules: false}]
                        ],
                    }
                }
            },
            {
                test: /\.css?$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(svg|png|wav|gif|jpg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: path.resolve(__dirname, "static", "img")
                }
            }
        ]
    }
}