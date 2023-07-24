const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // ...
    mode: "development", devtool: "inline-source-map",

    entry: ["./src/App.tsx"/*main*/],
    output: {
        filename: "./bundle.js"  // in /dist
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".css", ".scss", "png", "mp4", "pdf"]
    },
    module: {
        rules: [

            { test: /\.tsx?$/, loader: "ts-loader" },

            {
                test: /\.scss$/, use: [
                    // { loader: "style-loader" },  // to inject the result into the DOM as a style block
                    // { loader: "css-modules-typescript-loader" },  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
                    { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                    { loader: "sass-loader" },  // to convert SASS to CSS
                    // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50000,
                            name: 'assets/icons/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }

        ]
    },
    plugins: [
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /.js$|.css$/,
        }),
        // new HtmlWebpackPlugin({
        //     template: './public/index.html',
        //     filename: './index.html',
        //     favicon: './public/favicon.ico'
        // })
    ]
};