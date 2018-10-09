// import $ from "jquery";
import 'layui-src/dist/css/layui.css';
import 'layui-src/dist/layui.all.js';

layui.use(['layer', 'form'], function(){
    var layer = layui.layer
        ,form = layui.form;

    layer.msg('Hello World');
});