import { Api } from "./api";

const usersData = {
  meta: {},
  users: [],
};

// get All users
const getAllUsers = async (query) => {
  try {
    const { data, status } = await Api.get("", { params: query });
    if (status === 200) {
      if (!data) return;
      if (data.meta && data.items) {
        usersData.meta = data.meta;
        usersData.users = data.items;
      } else {
        usersData.users = data;
        usersData.meta = {};
      };
    };
  } catch (error) {
    console.error("Error getting all user:", error.message);
  };
};

// get one user
const getOneUser = async (id) => {
  try {
    const { data, status } = await Api.get(`/${id}`);
    if (status === 200) {
      return data;
    };
  } catch (error) {
    console.error("Error getting one user:", error.message);
  };
};

// create user
const createUser = async (user) => {
  try {
    const response = await Api.post("/", user);
    if (response.status === 201) {
      return response;
    };
  } catch (error) {
    console.error("Error creating user:", error.message);
  };
};

//edit User
const editUser = async (editUser, id) => {
  try {
    const response = await Api.patch(`/${id}`, editUser);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error editng user:", error.message);
  }

}

//delete user
const deleteUser = async (id) => {
  try {
    const response = await Api.delete(`/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }

};

export { getAllUsers, getOneUser, createUser, editUser, deleteUser, usersData };