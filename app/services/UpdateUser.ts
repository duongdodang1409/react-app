import { apiClient } from "./client";
import ApiConfig from "../config/api-config";

interface updateUserService {
  PutUser: Function;
}
const service: updateUserService = {
  PutUser: (data:any) => {
    return apiClient.put(ApiConfig.BASE_URL + ApiConfig.UPDATE + data.id, {
      UserName: data.UserName,
      Password: data.Password,
      avatar: data.avatar,
      phone: data.phone,
      gender: data.gender,
      cart: data.cart,
      gmail: data.gmail,
      FullName: data.FullName,
      Address: data.Address,
      id: data.id
    });
  }
};
export default service;
