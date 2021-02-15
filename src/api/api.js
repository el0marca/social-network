import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'de37af6c-b83e-42ac-9532-fe93fb23e575'
    }
})

export const usersAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    }
};

export const profileAPI={
    getProfile(id){
        return instance.get(`profile/${id}`).then(response=>response.data)
    }
}