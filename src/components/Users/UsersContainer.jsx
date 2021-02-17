import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setCurrentPage, setTotalUserCount, setUsersAC, toggleIsFollowing, getUsersThunkCreator, setUnfollowThunkCreator, setFollowThunkCreator } from '../../Reduce/usersReducer';
import Users from './Users/Users';
import Preloader from '../../common/Preloader/Preloader';
import s from './UsersContainer.module.css'
class UsersComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
        }
    }
    onPageChanged = (currentPage) => {
        this.props.getUsersThunkCreator(this.props.pageSize, currentPage)
    }

    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.Preloader}>{this.props.isFetching ? <Preloader /> : null}</div>
                <Users users={this.props.users} pageSize={this.props.pageSize} totalUserCount={this.props.totalUserCount} currentPage={this.props.currentPage} followAC={this.props.followAC} unfollowAC={this.props.unfollowAC} onPageChanged={this.onPageChanged} isFollowing={this.props.isFollowing} toggleIsFollowing={this.props.toggleIsFollowing} setUnfollowThunkCreator={this.props.setUnfollowThunkCreator} setFollowThunkCreator={this.props.setFollowThunkCreator} />
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
// const mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (userId) => { dispatch(followAC(userId)) },
//         unfollowUser: (userId) => { dispatch(unfollowAC(userId)) },
//         setUsers: (users) => { dispatch(setUsersAC(users)) },
//         setCurrentPage: (currentPage) => { dispatch(setCurrentPage(currentPage)) },
//         setTotalUserCount: (count)=>{dispatch(setTotalUserCount(count))} 
//     }
// }
const UsersContainer = connect(mapStateToProps, { followAC, unfollowAC, setCurrentPage, setTotalUserCount, setUsersAC, toggleIsFollowing, getUsersThunkCreator, setUnfollowThunkCreator, setFollowThunkCreator })(UsersComponent);

export default UsersContainer;