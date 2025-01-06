import { usersData } from "../model";

export class TableView {
  #parentElement;

  constructor() {}

  renderTable(users) {
    this.#parentElement = document.getElementById("table-body");

    const mappedHtml = users
      .map(
        (user) => `
        <tr class="px-2">
          <td class="ms-2 text-base roboto-light">
            ${user.firstname}
          </td>
          <td class="text-base roboto-light">
            ${user.date}
          </td>
          <td>
            <span
              class="${
                user.status === "Success"
                  ? "text-success border-success bg-success-status-bg"
                  : user.status === "Failed"
                  ? "text-danger border-danger bg-danger-status-bg"
                  : "text-warning border-warning bg-warning-status-bg"
              } min-width-status text-center roboto-medium p-1 border rounded font-13"
              >${user.status}</
            >
          </td>
          <td class="roboto-light">
            ${user.phone}
          </td>
          <td class="roboto-light">
            ${user.mail}
          </td>
          <td class="roboto-light">
           ${user.address}
          </td>
          <td>
            <button class="btn py-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#4E7FFF"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
                />
              </svg>
            </button>
            <button class="btn py-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#FF4B4B"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                />
                <path
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                />
              </svg>
            </button>
          </td>
      </tr>
    `
      )
      .join("");

    this.#parentElement.insertAdjacentHTML("beforeend", mappedHtml);
  }
}

