import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPage, setUsersAC, unfollowAC } from '../../Reduce/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => { dispatch(followAC(userId)) },
        unfollowUser: (userId) => { dispatch(unfollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (currentPage) => { dispatch(setCurrentPage(currentPage)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;