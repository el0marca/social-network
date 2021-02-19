import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setTotalUserCount, setUsersAC, toggleIsFollowing, getUsers, setUnfollowUser, setFollowUser } from '../../Reduce/usersReducer';
import Users from './Users/Users';
import Preloader from '../../common/Preloader/Preloader';
import s from './UsersContainer.module.css'
import { compose } from 'redux';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';

class UsersComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.pageSize, this.props.currentPage)
        } }

    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.Preloader}>{this.props.isFetching ? <Preloader /> : null}</div>
                <Users {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching, 
        isFollowing: state.usersPage.isFollowing
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, { setCurrentPage, setTotalUserCount, setUsersAC, toggleIsFollowing, getUsers, setUnfollowUser, setFollowUser })
)(UsersComponent)
