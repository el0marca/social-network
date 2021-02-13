const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT',
    TOGGLE_IS_UPLOAD = 'TOGGLE_IS_UPLOAD';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 21,
    currentPage: 1,
    isUpload: false
};

export const followAC = (id) => {
    return {
        type: FOLLOW,
        id
    }
}
export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        id
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUserCount = (count) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        count
    }
}

export const toggleIsUpload = (isUpload) => {
    return {
        type: TOGGLE_IS_UPLOAD,
        isUpload
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) return {
                        ...u,
                        followed: true,
                    }
                    return u;
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.id) return {
                            ...u,
                            followed: false,
                        }
                        return u;
                    })
                }
                case SET_USERS:
                    return {
                        ...state,
                        users: action.users
                    }
                    case SET_CURRENT_PAGE:
                        return {
                            ...state, currentPage: action.currentPage
                        }
                        case SET_TOTAL_USER_COUNT:
                            return {
                                ...state, totalUserCount: action.count
                            }
                            case TOGGLE_IS_UPLOAD:
                                return {
                                    ...state, isUpload: action.isUpload
                                }
                                default:
                                    return state;
    }
}

export default usersReducer;