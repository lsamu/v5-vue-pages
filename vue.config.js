let path = require('path');
let glob = require('glob');
const debug = process.env.NODE_ENV !== 'production';

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath = './src/pages/**/*.html', pathDir = "./src/pages/") {
	let entries = {},
		basename, tmp, pathname, appname;
	glob.sync(globPath).forEach(function (entry) {
		full_path = entry.replace(path.extname(entry), "");
		pathname = entry.substring(pathDir.length);
		basename = pathname.replace("/", "_").replace(".html", "");
		entries[basename] = {
			entry: full_path + '.ts',
			template: entry,
			filename: pathname,
		};
	});
	return entries;
}

let pages = getEntry();
console.log(debug);
module.exports = {
	baseUrl: '/',
	pages,
	productionSourceMap: false,
	devServer: {
		index: 'index.html',
	},
	filenameHashing: debug,
	chainWebpack: config => {
		//不压缩html 单个指定 需要做一个循环指定不压缩
		config
			.plugin('html-index')
			.tap(args => {
				//是否最小化html 压缩html
				args[0].minify = false
				return args
			});
		//注册插件
		config.module
			.rule('html')
			.test(/\.(htm|html)$/i)
			.use('html-withimg-loader')
			.loader('html-withimg-loader');
	}
}
