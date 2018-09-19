import { baseModel } from '../models/baseModel';
/**
 * 套餐Api
 */
export class packageApi {
    /**
     * 获取套餐列表
     */
    public getList() {
        let as: baseModel = {
            code: 0,
            msg: "12312",
            data: [{
                title: "title"
            }, {
                title: "title1"
            }]
        };
        return as;
    }
}