import { apiClient } from "../apiClient";

export const getShops = () => apiClient.get(`/shops`);
