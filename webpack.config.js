var path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { VueLoaderPlugin } = require('vue-loader')
const VueLoaderPlugin = require('vue-loader/lib/plugin')





module.exports = {
    entry: './src/index.js',
    output: {
        // path: "/home/taka/projects/webpack-vue/dist",
        // path: __dirname + "/dist"
        path: path.resolve(__dirname, 'dist'),
        filename: "./index.js"
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    devServer:{
        contentBase: './src',
        // contentBase: './App',
        hot: true,
        // inline: true,
        // watchContentBase: true,
        // publicPath: './'
    },

    module: {
        rules: [
        
            {
                test: /\.sass$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}

                ]
            },
            {
                test: /\.(png|jpg|gif|mp3)$/,
                use: [
                    {
                        loader: 'file-loader', 
                        options:{
                            name: '[path][name].[ext]',
                            // outputPath: 'images',
                            emitFile: true,
                        }
                    },
                    
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {loader: 'vue-loader'}
                ]

            }
        ]
    }

}