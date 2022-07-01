// Khởi tạo giá trị mặc định cho state
const initialState = {
  users: [
    {
      id: 1,
      Name: "Hai",
      email: "hai@gmail.com",
      phone: "090809080",
      userID: "2191444",
    },
  ],
  selectedUser: {},
};

// Tạo reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER": {
      const users = [...state.users, action.user];
      return { ...state, users };
    }
    case "DELETE_USER": {
      const users = state.users.filter((user) => user.id !== action.userId);
      return { ...state, users };
    }
    case "SELECT_USER": {
      return { ...state, selectedUser: action.user };
    }
    case "UPDATE_USER": {
      const users = state.users.map((user) => {
        if (user.id === action.userId) {
          return { ...action.user, id: action.userId };
        }
        return user;
      });
      return { ...state, users, selectedUser: {} };
    }
    default:
      return state;
  }
};

export default userReducer;
