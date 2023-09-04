import { AccountDto } from "dto/AccountDto";
import { axiosInstance } from "http/axiosConfig";
import { Settings } from "../dto/Settings";

const API_BASE_URL = "/api";

const currentUser = async (): Promise<AccountDto> => {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/me`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to get current user");
  }
};

const updateCurrentUser = async (settings: Settings): Promise<AccountDto> => {
  try {
    const response = await axiosInstance.put<AccountDto>(
      `${API_BASE_URL}/me`,
      settings
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to update current user");
  }
};
export { currentUser, updateCurrentUser };
