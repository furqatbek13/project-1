import FormView from "./FormView";
class AddFormView extends FormView {
  #addForm;
  constructor() {
    super();
    this.#addForm = this._forms[1];
  };
  createUsersHandler(handler) {
    const getFormElementsValue = this._getFormElementsValue;
    const clearFormElements = this._clearFormElements;
    this.#addForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = getFormElementsValue(this);
      handler(formData);
      clearFormElements(this);
    });
  }
}

export const addFormView = new AddFormView();
