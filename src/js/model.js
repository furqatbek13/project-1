import AJAX_CALL from "./api";

export const usersData = {
  meta: {},
  users: [],
};

export const getAllUsers = async (query) => {
  const { data } = await AJAX_CALL().get("", {params: query});
  if(!data) return;
  if(data.meta && data.items) {
    usersData.meta = data.meta;
    usersData.users = data.items;
  } else{
    usersData.users = data;
  };
};

export const createUser = async (user) => {
  return await AJAX_CALL().post("/", user);
};

export const deleteUser = async(id) =>{
  return await AJAX_CALL().delete(`/${id}`);
};