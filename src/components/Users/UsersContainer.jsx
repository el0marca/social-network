import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setCurrentPage, setTotalUserCount, setUsersAC, toggleIsUpload} from '../../Reduce/usersReducer';
import axios from 'axios';
import Users from './Users/Users';
import Preloader from '../../common/Preloader/Preloader';
import s from './UsersContainer.module.css'

class UsersComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsUpload(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&count=${this.props.currentPage}`).then(response => {
                this.props.toggleIsUpload(false)
                this.props.setUsersAC(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
        }
    }
    onPageChanged = (pn) => {
        this.props.toggleIsUpload(true);
        this.props.setCurrentPage(pn);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pn}`).then(response => {
        this.props.toggleIsUpload(false);
        this.props.setUsersAC(response.data.items) })
    }

    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.Preloader}>{this.props.isUpload?<Preloader />:null}</div>
                <Users users={this.props.users} pageSize={this.props.pageSize} totalUserCount={this.props.totalUserCount} currentPage={this.props.currentPage} followAC={this.props.followAC} unfollowAC={this.props.unfollowAC} onPageChanged={this.onPageChanged} />
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
        isUpload: state.usersPage.isUpload
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


const UsersContainer = connect(mapStateToProps, { followAC, unfollowAC, setCurrentPage, setTotalUserCount, setUsersAC, toggleIsUpload })(UsersComponent);

export default UsersContainer;