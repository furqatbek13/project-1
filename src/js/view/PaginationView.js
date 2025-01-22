class PaginationView {
  currentPage = 1;
  #parentElement;
  constructor() {
    this.#parentElement = document.getElementById("pagination");
  };
  getCurrentPage (handler){
    this.#parentElement.addEventListener("click", function(event){
        const paginationItem = event.target.closest(".page-link");
        if(!paginationItem) return;
        handler(paginationItem.innerText);
    });
  };

  renderPagination(metaData) {
    this.#parentElement.innerHTML = "";
    const { total_items, per_page, current_page, total_pages } = metaData;
    const maxAmountUserPerPage = per_page * current_page;
    const lastUserPerPage =
      total_items > maxAmountUserPerPage ? maxAmountUserPerPage : total_items;
    const firstUserPerPage = maxAmountUserPerPage - per_page + 1;
    const paginationNumbers = [];
    // for(let i = 1; i <= Math.ceil(total_items / per_page); i++) {
    //     paginationNumbers.push(i);
    // }
    for (let i = 1; i <= total_pages; i++) {
      paginationNumbers.push(i);
    };
    const paginationItems = paginationNumbers
      .map(
        (pagination) => 
        `<li class="page-item">
           <a class="page-link" href="#">${pagination}</a>
        </li>`
      )
      .join("");
    const paginationHtml = `
     <div id="pagination-showing">
        <p class="fs-6 fw-lighter">
          Showing <span class="fw-bolder"> ${firstUserPerPage} to ${lastUserPerPage} of ${total_items} </span> users
        </p>
      </div>
      <div id="pagination-amount">
        <ul class="pagination pagination-sm">
          <li class="page-item">
            <a class="page-link" href="#">&lt;</a>
          </li>
          ${paginationItems}
          <li class="page-item">
            <a class="page-link" href="#">&gt;</a>
          </li>
        </ul>
      </div>
      `;
    this.#parentElement.insertAdjacentHTML("beforeend", paginationHtml);
  };
};

export const paginationView = new PaginationView();
