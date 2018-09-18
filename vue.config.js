let path = require('path');
let glob = require('glob');
let HtmlWebpackPlugin = require('html-webpack-plugin');

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
	let entries = {},
		basename, tmp, pathname, appname;

	glob.sync(globPath).forEach(function (entry) {
		basename = path.basename(entry, path.extname(entry));
		tmp = entry.split('/').splice(-3);
		pathname = basename; // 正确输出js和html的路径
		entries[pathname] = {
			entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.ts',
			template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2]
		};
	});
	return entries;
}

let pages = getEntry('./src/pages/**?/*.html');
module.exports = {
	baseUrl: '/',
	pages,
	//assetsDir:"assets",
	devServer: {
		index: 'index.html',
	},
	chainWebpack: config =>{
		config.module
		.rule('img')
		.test(/\.(png|jpg|gif)$/)
		.use('file-loader')
		//.end()
	},
	// configureWebpack: config => {
	// 	//config.resolve.extensions.push(".html")
	// 	config.plugins.push(
	// 		//new HtmlWebpackPlugin()
	// 	);
	// },
	// chainWebpack: config => {
	// 	config.module
	// 		.rule('img')
	// 		.use('url-loader')
	// 		.loader('url-loader')
	// 		.tap(options => {
	// 			// 修改它的选项...
	// 			//options.limit = 100
	// 			return options
	// 		})
	// },
	// css:{
	// 	modules:true
	// }
	// chainWebpack: config => {
	// 	config.module
	// 		.rule('assets')
	// 		.use('url-loader')
	// 		.loader('url-loader')
	// 		.tap(options => {
	// 			// 修改它的选项...
	// 			//options.limit = 100
	// 			return options
	// 		})
	// 	Object.keys(pages).forEach(entryName => {
	// 		config.plugins.delete(`prefetch-${entryName}`);
	// 	});
	// 	if(process.env.NODE_ENV === "production") {
	// 		config.plugin("extract-css").tap(() => [{
	// 			path: path.join(__dirname, "./dist"),
	// 			filename: "css/[name].[contenthash:8].css"
	// 		}]);
	// 	}
	// },
	// configureWebpack: config => {
	// 	if(process.env.NODE_ENV === "production") {
	// 		config.output = {
	// 			path: path.join(__dirname, "./dist"),
	// 			filename: "js/[name].[contenthash:8].js"			
	// 		};
	// 	}
	// }
}
