import FormView from "./FormView";
class AddFormView extends FormView {
  #addForm;
  constructor() {
    super();
    this.#addForm = this._forms[1];
  };
  createUsersHandler(handler) {
    this.#addForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let fullname = this.fullname.value;
      let dating = this.date.value;
      let status = this.status.value;
      let phone = this.phone.value;
      let mail = this.mail.value;
      let address = this.address.value;
      const date = new Date(dating);
      const options = {
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      const formattedDate = Intl.DateTimeFormat("en-GB", options).format(date);
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("date", formattedDate);
      formData.append("phone", phone);
      formData.append("status", status);
      formData.append("mail", mail);
      formData.append("address", address);
      this.submit.setAttribute("data-bs-dismiss", "modal");
      this.submit.click();
      handler(formData);
      this.fullname.value = "";
      this.date.value = "";
      this.status.value = "";
      this.phone.value = "";
      this.mail.value = "";
      this.address.value = "";
    });
  }
}

export const addFormView = new AddFormView();
