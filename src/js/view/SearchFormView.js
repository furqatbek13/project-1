import FormView from "./FormView";
class SearchFormView extends FormView {
    #searchForm;
    constructor(){
        super();
        this.#searchForm = this._forms[0];
    };
    searchUserHandler(handler){
        const inputEl = this.#searchForm.search;
        this.#searchForm.addEventListener("submit", function(event){
            event.preventDefault();
            const searchValue = inputEl.value.trim();
            if (searchValue !== "" && isNaN(searchValue)) {
                handler(searchValue);
            };
        });
    };
    cancelSearchUserHandler(handler){
        const cancelSearch = this.#searchForm.querySelector("#cancel-search");
        const inputEl = this.#searchForm.search;
        cancelSearch.addEventListener("click", function(){
            handler();
            inputEl.value = "";
        })
    }
}
export const searchFormView = new SearchFormView()