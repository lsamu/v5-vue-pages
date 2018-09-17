const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

var entries = getEntry('src/controllers/**/*Controller.ts', 'src/controllers/');
var chunks = Object.keys(entries);

var config = {
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist'),
        //publicPath: '/static/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js?[chunkhash]'
    },
    //devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.xml', '.csv', '.wasm', '.mjs', '.js', '.json'],
        alias: {
            'assets': resolve('src/assets'),
            'pages': resolve('src/pages'),
            'static': resolve('src/static'),
            'components': resolve('src/components')
        }
    },
    module: {
        rules: [
            //加载ts
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            //加载css
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            //加载图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    // 需要下载file-loader和url-loader
                    loader: "url-loader",
                    options: {
                        name: 'images/[name].[hash:7].[ext]', // 图片输出的路径
                        limit: 50,
                        // 图片文件输出的文件夹
                        //outputPath: "img"
                    }
                }
                ]
            },
            //加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        //删除dist目录
        // new CleanWebpackPlugin(['dist']),
        // //创建index.html
        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    // devServer: {
    //     contentBase: './dist'
    // },
};

module.exports = config;

/**
 * 获取指定目录的ts文件
 * @param {*} globPath 
 * @param {*} pathDir 
 */
function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath)
    var entries = {}, entry, dirname, basename, pathname, extname

    for (var i = 0; i < files.length; i++) {
        entry = files[i]
        dirname = path.dirname(entry)
        extname = path.extname(entry)
        basename = path.basename(entry, extname)
        pathname = path.normalize(path.join(dirname, basename))
        pathDir = path.normalize(pathDir)
        if (pathname.startsWith(pathDir)) {
            pathname = pathname.substring(pathDir.length)
        }
        entries[pathname] = ['./' + entry]
    }
    return entries
}

function assetsPath(_path_) {
    let assetsSubDirectory;
    if (process.env.NODE_ENV === 'production') {
        assetsSubDirectory = 'static' //可根据实际情况修改
    } else {
        assetsSubDirectory = 'static'
    }
    return path.posix.join(assetsSubDirectory, _path_)
}

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}