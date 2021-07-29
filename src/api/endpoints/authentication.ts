import localStorageService from "../../services/localStorageService";
import { IUser, IUserRegister } from "../../types/users";
import { API } from "../apiInstance";

export const authCheckIsAuthenticated = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve");
    }, 1000);
  }).then((res) => {
    const u = getUser();
    return u;
  });

export const authRegister = (user: IUserRegister) =>
  API.post("/auth/register", { ...user })
    .then((response) => {
      if (response.data) {
        const user: IUser = {
          fullName: response.data.fullName,
          email: response.data.email,
          isNewUser: response.data.isNewUser,
        };
        setUser(user);
        return user;
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(`err`, err);
      return null;
    });

export const authLogin = (email: string, password: string) =>
  API.post("/auth/login", {
    email,
    password,
  })
    .then((response) => {
      if (response.data) {
        const user: IUser = {
          fullName: response.data.fullName,
          email: response.data.email,
          isNewUser: response.data.isNewUser,
        };
        setUser(user);
        return user;
      }
      return null;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

export const authLogout = () => removeUser();

// Save user to localstorage
const getUser = () => {
  const user = localStorageService.getItem("crs_user");
  if (user) {
    return user as IUser;
  }
  return null;
};

// Save user to localstorage
const setUser = (user: IUser) => {
  localStorageService.setItem("crs_user", user);
};
// Remove user from localstorage
const removeUser = () => {
  localStorage.removeItem("crs_user");
};
