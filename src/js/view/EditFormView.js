import FormView from "./FormView";
class EditFormView extends FormView{
    #updetForm;
    constructor(){
        super();
        this.#updetForm = this._forms[2];
    }
    updateUserHandler(handler){
        const getFormElementsValue = this._getFormElementsValue;
        const clearFormElements = this._clearFormElements;
        this.#updetForm.addEventListener("submit", function(event){
            event.preventDefault(this);
            const formData = getFormElementsValue(this);
            const userId = this.querySelector(".modal-body").dataset.userId;
            handler(formData, userId);
            clearFormElements(this);
        });
    };
};
export const editFormView = new EditFormView();