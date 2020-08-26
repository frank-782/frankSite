const path = require("path")

const devMode = !process.argv.includes('-p')


module.exports = {
    mode: devMode ? "development" : "production",
    entry: "./www/src/index.jsx",
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: devMode ? "[name].js" : "[name].[hash].js" ,
    },

    resolve: {
        extensions: [".js", ".json", ".jsx"]
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
                use: ['css-loader']
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