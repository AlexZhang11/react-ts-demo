/*
 * @Author: zhangyeqiang
 * @Date: 2023-04-07 15:05:53
 * @LastEditors: zhangyeqiang
 * @LastEditTime: 2023-04-07 15:27:54
 * @Description: 
 */
const { default: config } = require('@babel/core/lib/config')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config')

const config = {
    mode:'production',
    cache:{
        type:'filesystem',
        buildDependencies:{
            conifg:[__filename],//使用文件缓存
        }
    },
    optimization:{
        minimize:true,
        moduleIds:'deterministic'
    }
}

const mergedConfig = webpackMerge.merge(baseConfig,config)
module.exports = mergedConfig