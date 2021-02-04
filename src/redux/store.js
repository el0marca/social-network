import dialogsReducer from "../Reduce/dialogsReducer";
import profileReducer from "../Reduce/profileReducer";

let store ={
    _state:{dialogsPage:{
        dialogs:[{name:'Alex',id:'1', img:'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg', altImg:'1'},
        {name:'John',id:'2', img:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', altImg:'2'},
        {name:'Leon',id:'3', img:'https://i.redd.it/v0caqchbtn741.jpg', altImg:'3'},
        {name:'Luis',id:'4', img:'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249', altImg:'4'}],   
    
        messages:[{id:1,message:'Lets go to do it'},
        {id:2,message:'Preview continue keep strong'},
        {id:3,message:'Awesome state buy'},
        {id:4,message:'Loading is true'}],
    
        newMessageText:'it-kamasutra.com',
    },
        profilePage:{posts:[{message:"It's your first post",likesCount:'15'},
        {message:"It's your second post",likesCount:'38'},
        {message:"It's your third post",likesCount:'26'},
        {message:"It's your four post",likesCount:'67'}],
    
        newPostText: "What's happening"},
    
        sidebar:{friends:[{name:'John',
        img: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        altImg: 'John',
        id: '1'},
        {name:'Alex',
        img: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
        altImg: 'Alex',
        id: '2'},
        {name:'Peter',
        img: 'https://support.hubstaff.com/wp-content/uploads/2019/08/good-pic.png',
        altImg: 'Peter',
        id: '3'}],
        }},
    _rerenderEntireTree(){},
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._rerenderEntireTree=observer;
    },
    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
    },
}
// export default store;