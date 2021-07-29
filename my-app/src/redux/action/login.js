import ActionType from '../../constans';
import typicodeApi from "../../api/typicodeApi"
import createAction from './index'
import { toast } from 'react-toastify';

export const login = (user,email)  => async(dispatch)=>{
    await typicodeApi.getUser(user,email).then(res=>{
        if(res.status!==200){
            throw res
        }
        let {data} = res
        if(!data.length){
            toast.error("Login wrong, Please try again!")
            return;
        }
        toast.success("Login success!")
        return dispatch(createAction(ActionType.GET_USER,data[0]))
    })
}