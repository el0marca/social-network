import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setCurrentPage, setTotalUserCount, setUsersAC, toggleIsUpload, toggleIsFollowing } from '../../Reduce/usersReducer';
import Users from './Users/Users';
import Preloader from '../../common/Preloader/Preloader';
import s from './UsersContainer.module.css'
import { usersAPI } from '../../api/api';

class UsersComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsUpload(true)
            usersAPI.getUsers(this.props.pageSize,this.props.currentPage)
            .then(response => {
                this.props.toggleIsUpload(false)
                this.props.setUsersAC(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
        }
    }
    onPageChanged = (pn) => {
        this.props.toggleIsUpload(true);
        this.props.setCurrentPage(pn)
        usersAPI.getUsers(this.props.pageSize, pn)
        .then(response => {
            this.props.toggleIsUpload(false);
            this.props.setUsersAC(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.Preloader}>{this.props.isUpload ? <Preloader /> : null}</div>
                <Users users={this.props.users} pageSize={this.props.pageSize} totalUserCount={this.props.totalUserCount} currentPage={this.props.currentPage} followAC={this.props.followAC} unfollowAC={this.props.unfollowAC} onPageChanged={this.onPageChanged} isFollowing={this.props.isFollowing} toggleIsFollowing={this.props.toggleIsFollowing} />
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
        isUpload: state.usersPage.isUpload, 
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
const UsersContainer = connect(mapStateToProps, { followAC, unfollowAC, setCurrentPage, setTotalUserCount, setUsersAC, toggleIsUpload, toggleIsFollowing })(UsersComponent);

export default UsersContainer;