let initialState = {
    dialogs: [{
            name: 'Alex',
            id: '1',
            img: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
            altImg: '1'
        },
        {
            name: 'John',
            id: '2',
            img: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            altImg: '2'
        },
        {
            name: 'Leon',
            id: '3',
            img: 'https://i.redd.it/v0caqchbtn741.jpg',
            altImg: '3'
        },
        {
            name: 'Luis',
            id: '4',
            img: 'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249',
            altImg: '4'
        }
    ],
    messages: [{
            id: '1',
            message: 'Lets go to do it'
        },
        {
            id: '2',
            message: 'Preview continue keep strong'
        },
        {
            id: '3',
            message: 'Awesome state buy'
        },
        {
            id: '4',
            message: 'Loading is true'
        }
    ],
    newMessageText: '',
};

export const newMessageActionCreator = () => ({
    type: 'NEW-MESSAGE'
});
export const updateNewMessageTextActionCreator = (text) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: text
});

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW-MESSAGE':
            return {
                ...state, messages: [...state.messages, {
                    id: 5,
                    message: state.newMessageText
                }], newMessageText: ''
            }
            case 'UPDATE-NEW-MESSAGE-TEXT':
                return {
                    ...state, newMessageText: action.newText
                }
                default:
                    return state;
    }
} 

export default dialogsReducer