const initialState = {
  users: [
    {
      name: "Amit",
      email: "amit@gmail.com",
      phone: "9876543210",
      dob: "2000-06-18",
    },
    {
      name: "Saurabh",
      email: "saurabh@gmail.com",
      phone: "9876543210",
      dob: "2001-06-19",
    },
    {
      name: "Ankush",
      email: "ankush@gmail.com",
      phone: "9876543210",
      dob: "1991-01-23",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "GET_USERS":
      return state;
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.email !== action.payload),
      };
    case "UPDATE_USER":
      const userIndex = state.users.findIndex(
        (user) => user.email === action.payload.email
      );
      state.users[userIndex] = action.payload;
      return state;

    default:
      return state;
  }
};
export default usersReducer;
