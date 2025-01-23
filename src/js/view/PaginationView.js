import View from "./View";
class PaginationView extends View {
  constructor() {
    super();
    this._parentElement = document.getElementById("pagination");
  }

  prevPage(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const paginationPrev = event.target.closest("#page-prev");
      if (!paginationPrev) return;
      handler(+paginationPrev.dataset.page - 1);
    });
  };

  nextPage(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const paginationNext = event.target.closest("#page-next");
      if (!paginationNext) return;
      handler(+paginationNext.dataset.page + 1);
    });
  }

  getCurrentPage(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const paginationItem = event.target.closest("#page-number");
      if (!paginationItem) return;
      handler(paginationItem.innerText);
    });
  }

  renderPagination(metaData) {
    this._parentElement.innerHTML = "";
    const { total_items, per_page, current_page, total_pages } = metaData;
    const maxAmountUserPerPage = per_page * current_page;
    const lastUserPerPage =
      total_items > maxAmountUserPerPage ? maxAmountUserPerPage : total_items;
    const firstUserPerPage = maxAmountUserPerPage - per_page + 1;
    const paginationNumbers = [];
    for (let i = 1; i <= total_pages; i++) {
      paginationNumbers.push(i);
    }
    const paginationItems = paginationNumbers
      .map(
        (pagination) =>
          `<li class="page-item">
           <button id= "page-number" class="page-link text-secondary ${
             current_page === pagination &&
             "text-black text-decoration-underline"
           }">${pagination}</button>
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
            <button id ="page-prev" class="page-link ${
              current_page > 1 ? "text-black" : "text-secondary"
            }" data-page= ${current_page} ${
      current_page === 1 && "disabled"
    }>&lt;</button>
          </li>
          ${paginationItems}
          <li class="page-item">
            <button id ="page-next" class="page-link text-secondary ${
              current_page < total_pages ? "text-black" : "text-secondary"
            }" data-page= ${current_page} ${
      current_page >= total_pages && "disabled"
    }>&gt;</button>
          </li>
        </ul>
      </div>
      `;
    this._parentElement.insertAdjacentHTML("beforeend", paginationHtml);
  }
}

export const paginationView = new PaginationView();
