import "../sass/style.scss";
import * as bootstrap from "bootstrap";
import { getAllUsers, getOneUser, createUser, editUser, deleteUser, usersData } from "./model.js";
import { tableView, addFormView, editFormView, searchFormView, actionsView, paginationView } from "./view";

const paginationQuers = function(number = 1) {
  return {
    page: number,
    limit: 8
  };
};
 // loading Users
async function controllerLoadUsers(query) {
  tableView.renderSpiner();
  await getAllUsers(query);
  tableView.renderTable(usersData.users);
  paginationView.renderPagination(usersData.meta);
};


// load one user
const controllerLoadOneUser = async function(id){
  return await getOneUser(id);
};


//subscriber functions
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


const controllerEditUser = async function(user, id){
  const response = await editUser(user, id);
  if(response.status === 200) {
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
  if(!isNaN(number)) controllerLoadUsers(paginationQuers(number));
}

const INIT = function(){
  controllerLoadUsers(paginationQuers());
  addFormView.createUsersHandler(controllerCreateUsers);
  editFormView.updateUserHandler(controllerEditUser);
  searchFormView.searchUserHandler(controllerSearchUsers);
  searchFormView.cancelSearchUserHandler(controllerCanelSearchUser);
  actionsView.createUserHandler();
  actionsView.deleteUserHandler(controllerDeleteUser);
  actionsView.editUserHandler(controllerLoadOneUser);
  paginationView.getCurrentPage(controllerFindCurrentPage);
  paginationView.prevPage(controllerFindCurrentPage);
  paginationView.nextPage(controllerFindCurrentPage);
};
INIT();