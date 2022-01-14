import { apiClient } from "./client";
import ApiConfig from "../config/api-config";

interface postProductService {
  PostProduct: Function;
}
const service: postProductService = {
  PostProduct: (data:any) => {
    return apiClient.post(ApiConfig.BASE_URL + ApiConfig.CART,data );
  }
};

export default service;

