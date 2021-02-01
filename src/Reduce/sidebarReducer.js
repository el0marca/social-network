let initialState = {
    friends: [{
            name: 'John',
            img: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            altImg: 'John',
            id: '1'
        },
        {
            name: 'Alex',
            img: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
            altImg: 'Alex',
            id: '2'
        },
        {
            name: 'Peter',
            img: 'https://support.hubstaff.com/wp-content/uploads/2019/08/good-pic.png',
            altImg: 'Peter',
            id: '3'
        }
    ],
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;