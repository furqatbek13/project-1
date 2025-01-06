import "../sass/style.scss";
import * as bootstrap from "bootstrap";
import { getAllUsers, usersData } from "./model";
import { TableView } from "./view/tableView";

async function controllerUsrer() {
    await getAllUsers();
    const tableview = new TableView();
    tableview.renderTable(usersData.users)
}
controllerUsrer();