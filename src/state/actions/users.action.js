export const createUser = (data) => {
  return {
    type: "CREATE_USER",
    payload: data,
  };
};

export const deleteUser = (email) => {
  return {
    type: "DELETE_USER",
    payload:email
  };
};

export const getUsers = () => {
  return {
    type: "GET_USERS",
  };
};

export const updateUser = (data) => {
  return {
    type:'UPDATE_USER',
    payload:data
  }
}
