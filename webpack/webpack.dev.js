/*
 * @Author: zhangyeqiang
 * @Date: 2023-04-07 15:05:45
 * @LastEditors: zhangyeqiang
 * @LastEditTime: 2023-04-07 15:48:15
 * @Description: 
 */
const webpackMerge = require("webpack-merge");
const baseConfig = require('./webpack.config');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const config = {
    mode:'development',
    cache:{
        type:'memory'
    },
    optimization:{
        minimize:true,
        minimizer:[new TerserWebpackPlugin()],
    }
}

const mergedConfig = webpackMerge.merge(baseConfig,config)
module.exports = mergedConfig