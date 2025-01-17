import "../sass/style.scss";
import * as bootstrap from "bootstrap";
import { createUser, deleteUser, getAllUsers, usersData } from "./model.js";
import { tableView, addFormView, searchFormView, actionsView } from "./view";

async function controllerLoadUsers(query) {
  await getAllUsers(query);
  tableView.renderTable(usersData.users);
};


const controllerSearchUsers = function(name){
  controllerLoadUsers({fullname: name});
};
const controllerCanelSearchUser = function(){
  controllerLoadUsers("");
}

const controllerCreateUsers = async function(newUser){
  const response = await createUser(newUser);
  if(response.status === 201){
    controllerLoadUsers();
  }
};


const controllerDeleteUser = async (id) => {
  const response = await deleteUser(id);
  if (response.status === 200) {
    controllerLoadUsers();
  }
};

const INIT = function(){
  controllerLoadUsers();
  addFormView.createUsersHandler(controllerCreateUsers);
  searchFormView.searchUserHandler(controllerSearchUsers);
  searchFormView.cancelSearchUserHandler(controllerCanelSearchUser);
  actionsView.deleteUser(controllerDeleteUser);
};
INIT();