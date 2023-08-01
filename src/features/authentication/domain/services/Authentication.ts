import axios from "axios";
import { AccountDto } from "../../../../dto/AccountDto";

const API_BASE_URL = "/api/auth"; 

export const  register  = async (createAccountDto: {
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
