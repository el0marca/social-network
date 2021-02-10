const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 21,
    currentPage: 1
};

export const followAC = (id) => {
    return {
        type: FOLLOW,
        userId: id
    }
}
export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        userId: id
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {
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
                        if (u.id === action.userId) return {
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
                    default:
                        return state;
                    case SET_CURRENT_PAGE:
                        return {
                            ...state, currentPage: action.currentPage
                        }
    }
}

export default usersReducer;