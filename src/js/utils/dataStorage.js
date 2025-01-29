const setPaginationStorage = (pagination) =>{
    window.localStorage.setItem("pagination", pagination);
};

const getPaginationStorage = () =>{
    return window.localStorage.getItem("pagination");
};

const clearPaginationSotage = () =>{
    window.localStorage.clear();
};

export {setPaginationStorage, getPaginationStorage, clearPaginationSotage};