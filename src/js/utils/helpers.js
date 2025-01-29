import { getPaginationStorage } from "./dataStorage";
export const paginationQuers = function (number = getPaginationStorage()) {
    return {
        page: number,
        limit: 8
    };
};