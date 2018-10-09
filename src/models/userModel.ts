import { baseModel } from '@/models/baseModel';

/**
 * 用户实体类
 */
export interface userModel{
    id:string;
    username:string;
    userpwd:string;
}

/**
 * 单个实体类型
 */
export interface userModleSingle{
    data:userModel
}

/**
 * 多个实体类型
 */
export interface userModleList{
    data:userModel[]
}