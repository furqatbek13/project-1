import "../sass/style.scss"
import * as bootstrap from "bootstrap";
import { getAllUsers, createUser, usersData } from "./model";
import { TableView } from "./view/";


async function controllerLoadUsers() {
  await getAllUsers();
  const tableView = new TableView();
  tableView.renderTable(usersData.users);
}

controllerLoadUsers();

const forms = document.forms;
const sendForm = forms[1];
sendForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const formData = new FormData();


  const firstname = sendForm.name.value;
  const getDate = sendForm.date.value.split("-").reverse();
  const status = sendForm.status.value;
  const phone = sendForm.phone.value;
  const mail = sendForm.mail.value;
  const address = sendForm.address.value;

  const day = getDate[0];
  const month = getDate[1];
  const year = getDate[2];

  const dating = new Date(year, month, day);
  const date = `${day} ${dating.toLocaleDateString("en-US", {
    month: "long",
  })}, ${year} `;

  const response = await createUser({
    firstname,
    date,
    status,
    phone,
    mail,
    address,
  });

  if (response.status === 201) {
    controllerLoadUsers();
  }
});