import "../sass/style.scss";
import * as bootstrap from "bootstrap";
import { createUser, deleteUser, getAllUsers, usersData } from "./model.js";
import { tableView, addFormView, searchFormView, actionsView, paginationView } from "./view";

const paginationQuers = function(number = 1) {
  return {
    page: number,
    limit: 8
  }
}

async function controllerLoadUsers(query) {
  await getAllUsers(query);
  tableView.renderTable(usersData.users);
  paginationView.renderPagination(usersData.meta);
};

const controllerSearchUsers = function(name){
  controllerLoadUsers({fullname: name});
};

const controllerCanelSearchUser = function(){
  controllerLoadUsers(paginationQuers());
};

const controllerCreateUsers = async function(newUser){
  const response = await createUser(newUser);
  if(response.status === 201){
    controllerLoadUsers(paginationQuers());
  };
};

const controllerDeleteUser = async (id) => {
  const response = await deleteUser(id);
  if (response.status === 200) {
    controllerLoadUsers(paginationQuers());
  };
};

const controllerFindCurrentPage = (number) => {
  controllerLoadUsers(paginationQuers(number));
}

const INIT = function(){
  controllerLoadUsers(paginationQuers());
  addFormView.createUsersHandler(controllerCreateUsers);
  searchFormView.searchUserHandler(controllerSearchUsers);
  searchFormView.cancelSearchUserHandler(controllerCanelSearchUser);
  actionsView.deleteUser(controllerDeleteUser);
  paginationView.getCurrentPage(controllerFindCurrentPage);
  paginationView.prevPage(controllerFindCurrentPage);
  paginationView.nextPage(controllerFindCurrentPage);
};
INIT();