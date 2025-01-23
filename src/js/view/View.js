export default class View {
    _parentElement;
    constructor() {

    };
    _clear() {
        this._parentEleemnt.innerHtml = "";
    };

    renderSpiner(){
        const spinner = `
        <div class = "spinner-border" style = "width: 3rem;" role = "status">
        <span class = "visually-hidden"> Loading...</span>
        </div>`
    };
}