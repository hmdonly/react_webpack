const { merge } = require('webpack-merge');

const commonConfig = require('./config/webpack.common');

module.exports = (env) => {
	console.log("env is"+env.goal);
	const config = require('./config/webpack.' + env.goal);
	return merge(commonConfig, config);
};