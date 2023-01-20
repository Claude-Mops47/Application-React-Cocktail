import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get("/api/pokemons");
};

let getUser = (uid) => {
  return Axios.get("/api/pokemon/" + uid);
};

export const userService = {
  getAllUsers,
  getUser,
};
