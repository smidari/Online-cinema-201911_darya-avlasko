const DELETE_USER = 'DELETE-USER';


let initialState = {
    tableUsers: {
        thUsesrData: [
            {th: "Id", scope: "col"},
            {th: "First name", scope: "col"},
            {th: "Last name", scope: "col"},
            {th: "Email", scope: "col"},
            {th: "Remove request", scope: "col"}
        ],
        trUsers: [
            {
                id: "0",
                fname: "Daria",
                lname: "Smirnova",
                email: "sda@gamail.com",
                remove: "remove"
            },
            {
                id: "1",
                fname: "Ivan",
                lname: "Ivanov",
                email: "vanivanov@gamail.com",
                remove: "remove"
            },
            {
                id: "2",
                fname: "Kirill",
                lname: "Petrov",
                email: "petrov@gamail.com",
                remove: "remove"
            },
            {
                id: "3",
                fname: "Ivan",
                lname: "Ivanov",
                email: "vanivanov@gamail.com",
                remove: "remove"
            },
            {
                id: "4",
                fname: "Kirill",
                lname: "Petrov",
                email: "petrov@gamail.com",
                remove: "remove"
            },
            {
                id: "5",
                fname: "Ivan",
                lname: "Ivanov",
                email: "vanivanov@gamail.com",
                remove: "remove"
            },
            {
                id: "6",
                fname: "Kirill",
                lname: "Petrov",
                email: "petrov@gamail.com",
                remove: "&times;"
            }
        ],
    },
};


const adminPageReducer = (state = initialState, action) => {switch (action.type) {
        case DELETE_USER:
            const {trUsers} = state.tableUsers;
            const users = trUsers.filter(item => item.id !== action.id);
            const newState = {...state};
            newState.tableUsers.trUsers = users;
            return newState;
        default:
            return state;
    }
};


export const deleteUserActionCreator = (id) => {
    console.log(id);
    return {
        type: DELETE_USER,
        id: id,
    };
};
export default adminPageReducer;


// dispatch(action) {
//     this.state.adminUser = adminUsersReducer(this.state.adminUser, action);
// }


