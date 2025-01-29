export default class FormView {
  _forms;
  constructor() {
    this._forms = document.forms;
  };

  _getFormElementsValue(form){
    let fullname = form.fullname.value;
    let dating = form.date.value;
    let status = form.status.value;
    let phone = form.phone.value;
    let mail = form.mail.value;
    let address = form.address.value;
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
    form.submit.setAttribute("data-bs-dismiss", "modal");
    form.submit.click();
    return formData;
  };

  _clearFormElements(form){
    form.fullname.value = "";
    form.date.value = "";
    form.status.value = "";
    form.phone.value = "";
    form.mail.value = "";
    form.address.value = "";
  };

  _clearForms(form1, form2){
    form1.innerHTML = "";
    form2.innerHTML = "";
  }

  _renderFormElements(user = {}) {
    let formattedDate;
    if(user.date) {
      const date = new Date(user.date);
      formattedDate = Intl.DateTimeFormat("ru-RU", {
        day: "2-digit", 
        month: "2-digit", 
        year: "numeric",
      }).format(date).split(".").reverse().join("-");
      
    }
    return `
    <div class="modal-body" data-user-id= "${user.id}">
    <div class="mb-3">
      <label class="form-label">User Name</label>
      <input
        type="text"
        class="form-control"
        name="fullname"
        required
        value= "${user.fullname || ""}"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Date</label>
      <input type="date" class="form-control" name="date" required value="${formattedDate || ""}"/>
    </div>
    <div class="mb-3">
      <label class="form-label">Status</label>
      <select
        name="status"
        class="form-select"
        aria-label="Default select example"
      >
        <option ${user.status === "Success" ? "selected" : ""} value="Success">Success</option>
        <option ${user.status === "Failed" ? "selected" : ""}  value="Failed">Failed</option>
        <option ${user.status === "In Progress" ? "selected" : ""}  value="In Progress">In Progress</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Phone</label>
      <input type="text" class="form-control" name="phone" required value= "${user.phone || ""}"/>
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" class="form-control" name="mail" required value= "${user.mail || ""}" />
    </div>
    <div class="mb-3">
      <label class="form-label">Address</label>
      <input type="text" class="form-control" name="address" required value= "${user.address || ""}" />
    </div>
  </div>
  <div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary text-white"
    data-bs-dismiss="modal"
  >
    Cancel
  </button>
  <button
    id="submit"
    type="submit"
    class="btn btn-success text-white"
  >
    Submit
  </button>
</div>
  `;
  }
}
