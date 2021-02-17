import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'de37af6c-b83e-42ac-9532-fe93fb23e575'
    }
})

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },
    getProfile(id){
        return instance.get(`profile/${id}`).then(response=>response.data)
    },
    setAuth(){
        return instance.get(`auth/me`).then(response=>response.data)
    }
};