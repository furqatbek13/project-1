class ActionsView{
    #tableBody;
    constructor(){
        this.#tableBody = document.querySelector("#table-body");
    };
    createUser(){
        
    };
    editUSer(){

    };
    deleteUser(handler){
        this.#tableBody.addEventListener("click", function(event){
            const btnDelete = event.target.closest("#btn-delete");
            if(!btnDelete) return;
            const btnId = btnDelete.dataset.btnId;
            handler(btnId);
        });
    };
};
export const actionsView = new ActionsView();