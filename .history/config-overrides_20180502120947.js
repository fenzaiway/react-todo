
/**
 * 自定义扩展react webpack配置
 * @param {*} config 
 * @param {*} env 
 */
let autoprefixer = require('autoprefixer')
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.module.rules.push({
        test: /\.(css|less)$/,
        
        use: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                },
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebookincubator/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        autoprefixer({
                            browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                            ],
                            flexbox: 'no-2009',
                        })
                    ]
                }
            },
            {
                loader: require.resolve('less-loader') // compiles Less to CSS
            }
        ]
    })
    return config;
}