import axiosClient from "./axiosApi";

const typicodeApi = {
    // post
    getPostAll(){
        const url='/posts';
        return axiosClient.get(url)
    },
    getPostSearch(valueSearch){
        const url=`/posts?title_like=${valueSearch}`;
        return axiosClient.get(url)
    },
    getPostPage(page,value){
        const url=`/posts?_page=${page}&title_like=${value}`;
        return axiosClient.get(url)
    },

    getUser(user, email){
        const url=`users?username=${user}&email=${email}`;
        return axiosClient.get(url)
    },

    // comment
    getCommentOnPost(id){
        const url=`/comments?postId=${id}`
        return axiosClient.get(url)
    }
}

export default typicodeApi;