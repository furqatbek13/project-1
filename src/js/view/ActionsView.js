import FormView from "./FormView";
class ActionsView extends FormView{
    #tableBody;
    #addBtn;
    #createForm;
    #editForm;
    constructor(){
        super();
        this.#tableBody = document.querySelector("#table-body");
        this.#createForm = document.getElementById("form-create");
        this.#addBtn = document.querySelector("#add-btn");
        this.#editForm = document.querySelector("#form-edit");
    };
    createUserHandler(){
        const addForm = this.#createForm;
        const editForm = this.#editForm;
        const clearForms = this._clearForms;
        const htmlFormElements = this._renderFormElements;
        this.#addBtn.addEventListener("click", function(){
            clearForms(addForm, editForm);
            addForm.insertAdjacentHTML("beforeend", htmlFormElements());
        });
    };
    editUserHandler(handler){
        const editForm = this.#editForm;
        const addForm = this.#createForm;
        const clearForms = this._clearForms;
        const htmlFormElements = this._renderFormElements;
        this.#tableBody.addEventListener("click", async function(event){
            const editBtn = event.target.closest("#edit-btn");
            if(!editBtn) return;
            clearForms(addForm, editForm);
            const userId = editBtn.dataset.userId;
            const editUser = await handler(userId);
            if(editUser){
                editForm.insertAdjacentHTML("beforeend", htmlFormElements(editUser));
            };
        });
    };

    deleteUserHandler(handler){
        this.#tableBody.addEventListener("click", function(event){
            const btnDelete = event.target.closest("#btn-delete");
            if(!btnDelete) return;
            if (window.confirm("Siz foydalanuvchini haqiqatdan o'chirmoqchimisz")) {
                const userId = btnDelete.dataset.userId;
                if(userId) handler(userId);
            };
        });
    };
};
export const actionsView = new ActionsView();