import React from 'react';
import { connect } from "react-redux";
import Friends from "./Friends";



const mapStateToProps = (state) =>{
    return {
        friend:state.sidebar.friends
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;