import './less/index.less';
import $ from 'jquery';
import axios from 'axios';

$(() => {
    console.log("ajax");
});

let a = [1, 2, 3, 4, 5];
let html = "";
for (const item of a) {
    html += `${item}sdfsdfdsfdsf`;
}

let b = [5, 6];

let c = [a, ..."7"]
let d = [..."7", a]
let e = a.concat(b);

function aa() {

}

aa.prototype.bb = function () {

}

class Testaxios {
    public async getList() {
        let d = await axios.get("/static/json/list.json");
        if (d.data.code == 0) {
            for (const item of d.data.data) {
                console.log(item.title+"axios");
            }
        }
    }
}

new Testaxios().getList();
// $.ajax({
//     url:"/static/json/list.json",
//     success: (data: dataResult<dataUserResult>) => {
//         if (data.code == 0) {
//             for (const item of data.data) {
//                 console.log(item.title);
//             }
//         }
//     }
// })

/**
 * 用户信息返回集合
 */
interface dataResult<T> {
    /**
     * 返回代号 0 1 2 3 
     */
    code: number;
    /**
     * 提示信息  
     */
    msg: string;
    data: Array<T>
}

interface dataUserResult {
    id: number,
    title: string,
    createtime: string
}

interface dataUserResult2 {
    id1: number,
    title2: string,
    createtime2: string
}


// class test{
//     public async aa(url:string){
//         await $.ajax({
//             url:url
//         }).promise();
//     }

//     public async bb(){
//         let d = await this.aa("http://www.com");
//         if(d.code==0){
//             let d1 = await this.aa("http://www.com");
//             if(d1.code==0){

//             }
//         }
//     }
// }



// class test<T>{
//     map: Map<string, T> = new Map<string, T>();

//     /**
//      * 
//      * @param key 
//      * @param val 
//      */
//     public add(key: string = "id", val: T) {
//         this.map.set(key, val);
//     }

//     public del(key: string = "id") {
//         this.map.delete(key)
//     }

//     public list() {
//         return this.map.entries()
//     }
// }


// new test<{}>().add("title",{});

import {Vue,Component} from 'vue-property-decorator';

@Component
class appController1 extends Vue{
    public title="标题1";
}

@Component
class appController2 extends Vue{
    public title="标题2";
}

let v1 = new appController1({
    el:"#app1"
});

let v2 = new appController2({
    el:"#app2"
});

