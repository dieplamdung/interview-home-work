import ActionType from '../../constans';
import typicodeApi from "../../api/typicodeApi"
import createAction from './index'

export const getPostList = (currentPage,valueSearch)=>async(dispatch)=>{

    await typicodeApi.getPostAll(currentPage,valueSearch).then(res=>{
        if(res.status!==200){
            throw res
        }
        return dispatch(createAction(ActionType.GET_POST_LIST,res.data))
    })
}


export const getPostSearch = (value)=>async(dispatch)=>{
    await typicodeApi.getPostSearch(value).then(res=>{
        if(res.status!==200){
            throw res
        }
        dispatch(createAction(ActionType.SET_VALUE_SEARCH,value))
        return dispatch(createAction(ActionType.GET_POST_LIST_SEARCH,res.data)); 
    })
}

export const getPostPage = (page,value)=>async(dispatch)=>{
    await typicodeApi.getPostPage(page,value).then(res=>{
        if(res.status!==200){
            throw res
        }
        return dispatch(createAction(ActionType.GET_POST_LIST_PAGE,res.data))
    })
}