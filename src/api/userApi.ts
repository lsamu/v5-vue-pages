import { userModel, userModleList } from '@/models/userModel';

export class UserApi{

    constructor(){
       
    }
    /**
     * 
     * @param username 
     * @param password 
     * @param code 
     * @param isRemeb 
     */
    public login(user:userModel){
        return true;
    }

    public getList(){
        return {} as userModleList;
    }

}