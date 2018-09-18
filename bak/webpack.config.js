const path = require('path');
const glob = require('glob');
//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
	let entries = {},
		basename, tmp, pathname, appname;

	glob.sync(globPath).forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));
        full_no_extname = entry.replace(path.extname(entry),"");
        console.log(full_no_extname);
		tmp = entry.split('/').splice(-3);
		pathname = basename; // 正确输出js和html的路径
		entries[pathname] = {
			entry: full_no_extname + '.ts',
			template: full_no_extname
		};
	});
	return entries;
}

let pages = getEntry('./src/pages/**/*.html');
console.log(pages);