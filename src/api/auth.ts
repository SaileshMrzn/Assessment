import axios from "axios";
import BaseUrl from "../constants/BaseUrl";

export interface authInterface {
  username: string;
  password: string;
}

export const signup = async ({ username, password }: authInterface) => {
  await axios.post(`${BaseUrl}/signup`, { username, password });
};

export const login = async ({ username, password }: authInterface) => {
  await axios.post(`${BaseUrl}/login`, { username, password });
};
