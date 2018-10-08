/**
 * 主要参考  
 * html 图片解析 包含文件 html-withimg-loader 
 * html 中vue中SEO优化 预编译 prerender-spa-plugin
 */
let dir = "bohe_cn"; //模板目录 default qimiao bohe(国际版) bohe_cn(国内版)
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
let pages = getEntry('./src/pages/' + dir + '/**/!(_*).html', "./src/pages_" + dir + "/");
module.exports = {
	baseUrl: '/',
	pages,
	productionSourceMap: false,
	devServer: {
		index: 'index.html',
	},
	filenameHashing: debug,
	runtimeCompiler: true,
	outputDir: "dist/" + dir,
	chainWebpack: config => {
		//不压缩html
		for (const key in pages) {
			config
				.plugin('html-' + key)
				.tap(args => {
					//是否最小化html 压缩html
					args[0].minify = false
					return args
				});
		}
		//注册插件
		config.module
			.rule('html')
			.test(/\.(htm|html)$/i)
			.use('html-withimg-loader')
			.loader('html-withimg-loader');
	}
}