import '../css/style.css';
import { md5 } from '../common/md5';
import * as $ from 'jquery';

//import data from '../data/1.xml';
console.log("index");

let img = new Image();
img.src = '../img/3.jpg';

let element = document.createElement("div");
element.innerHTML = "hello 中国 123";
element.setAttribute("style", "color:red");
document.body.appendChild(element);

new md5().test();

$(()=>{
    console.log("$$$");
});