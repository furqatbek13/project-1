import AJAX_CALL from "./api";

const usersData = {
  meta: {},
  users: [],
};

// get All users
const getAllUsers = async (query) => {
  const { data } = await AJAX_CALL().get("", {params: query});
  if(!data) return;
  if(data.meta && data.items) {
    usersData.meta = data.meta;
    usersData.users = data.items;
  } else{
    usersData.users = data;
    usersData.meta = {};
  };
};

// get one user
const getOneUser = async (id) => {
  const {data} = await AJAX_CALL().get(`/${id}`);
  return data;
};

// create user
const createUser = async (user) => {
  return await AJAX_CALL().post("/", user);
};

//edit User
const editUser = async (editUser, id) => {
  return await AJAX_CALL().patch(`/${id}`, editUser);
}

//delete user
const deleteUser = async(id) =>{
  return await AJAX_CALL().delete(`/${id}`);
};

export {getAllUsers, getOneUser, createUser, editUser, deleteUser, usersData};