import AJAX_CALL from "./api";

export const usersData = {
  meta: {},
  users: [],
};

export const getAllUsers = async () => {
  const { data } = await AJAX_CALL().get();
  usersData.meta = data[0].meta;
  usersData.users = data[0].items;
};