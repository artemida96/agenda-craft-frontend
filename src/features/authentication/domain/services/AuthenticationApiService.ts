import axios from "axios";
import { AccountDto } from "../../../../dto/AccountDto";
import { axiosInstance } from "http/axiosConfig";

const API_BASE_URL = "/api/auth";

const register = async (createAccountDto: {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  birthDate: Date;
  roles?: string[];
}): Promise<AccountDto> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      ...createAccountDto,
      roles: null,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

const login = async (loginDto: {
  username: string;
  password: string;
}): Promise<{
  id: string;
  username: string;
  email: string;
  roles?: string[];
  accessToken: string;
}> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginDto);
    return response.data;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

const logout = async (): Promise<void> => {
  try {
    await axiosInstance.post(`${API_BASE_URL}/logout`);
  } catch (error) {
    throw new Error("Failed to logout");
  }
};

export { login, register, logout };
