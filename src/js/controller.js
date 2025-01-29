import "../sass/style.scss";
import * as bootstrap from "bootstrap";
import { getAllUsers, getOneUser, createUser, editUser, deleteUser, usersData } from "./model.js";
import { tableView, addFormView, editFormView, searchFormView, actionsView, paginationView } from "./view";
import { setPaginationStorage} from "./utils/dataStorage";
import { paginationQuers } from "./utils/helpers";

// loading Users
async function controllerLoadUsers(query) {
  tableView.renderSpiner();
  await getAllUsers(query);
  tableView.renderTable(usersData.users);
  paginationView.renderPagination(usersData.meta);
};


// load one user
const controllerLoadOneUser = async function (id) {
  return await getOneUser(id);
};


//subscriber functions
const controllerSearchUsers = function (name) {
  controllerLoadUsers({ fullname: name });
};


const controllerCanelSearchUser = function () {
  controllerLoadUsers(paginationQuers());
};


const controllerCreateUsers = async function (newUser) {
  await createUser(newUser);
  await controllerLoadUsers(paginationQuers());
};


const controllerEditUser = async function (user, id) {
  await editUser(user, id);
  await controllerLoadUsers(paginationQuers());
};


const controllerDeleteUser = async (id) => {
  await deleteUser(id);
  await controllerLoadUsers(paginationQuers());
};

const controllerFindCurrentPage = (number) => {
  if (!isNaN(number)) {
    setPaginationStorage(number);
    controllerLoadUsers(paginationQuers(number));
  };
}

const INIT = function () {
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