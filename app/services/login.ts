import { apiClient } from "./client";
import ApiConfig from "../config/api-config";
interface LoginService {
  login: Function;
  register: Function;
}

const service: LoginService = {
  login: (data: any) => {
    return apiClient.get(ApiConfig.BASE_URL + ApiConfig.LOGIN);
    // return apiClient.get(ApiConfig.LOGIN, data);
  },
  register: (data: any) => {
    return apiClient.post(ApiConfig.BASE_URL + ApiConfig.REGISTER, {
      UserName: data.username,
      Password: data.password,
    });
    // return apiClient.get(ApiConfig.LOGIN, data);
  },
};

export default service;
