const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
    mode:'development',
    entry:{
        app:'./src/index.tsx'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-react"],
                  },
                },
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                include:[path.resolve('./src')],
                use:{
                    loader:"ts-loader"
                }
            },
            {

                test:/\.(css|less)$/,
                exclude:/node_modules/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    'css-loader',
                    'less-loader',
                    {
                        loader:'postcss-loader',//postcss-loader autoprefixer给css加浏览器前缀-webkit-，-moz- 等等
                        options:{
                            postcssOptions:{
                                plugins:[require('autoprefixer')]
                            }
                        }
                    }
                ]//style-loader 配置是把样式用style形式嵌入到页面的，MiniCssExtractPlugin单独打包css的plugin
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                exclude: /node_modules/,
                include: [path.resolve("./src/assets/images")],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            esModule: false
                        }
                    }
                ],
                type: 'javascript/auto'
              },
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.ts','.tsx']
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./public/index.html'}),
        new MiniCssExtractPlugin(),
        new CssMinimizerWebpackPlugin()
    ],
    devServer:{
        port:8080,
        open:true,
    }
}