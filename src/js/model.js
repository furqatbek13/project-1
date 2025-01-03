import axios from "axios";

const userData = {
    meta: {},
    users: [],
};
export const getAllUsers = async() => {
    const response = await axios.get("https://abed374aa042759d.mokky.dev/users");
    userData.meta = response.data[0].meta;
    userData.users = response.data[0].items;
};

export const creatUser = async (user) => {
    await axios.post
}