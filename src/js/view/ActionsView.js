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
            if (window.confirm("Siz foydalanuvchini haqiqatdan o'chirmoqchimisz")) {
                const btnId = btnDelete.dataset.btnId;
                if(btnId) handler(btnId);
                
                
            }
        });
    };
};
export const actionsView = new ActionsView();