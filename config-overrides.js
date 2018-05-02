
/**
 * 自定义扩展react webpack配置
 * @param {*} config 
 * @param {*} env 
 */
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = rewireLess(config, env);
    return config;
}