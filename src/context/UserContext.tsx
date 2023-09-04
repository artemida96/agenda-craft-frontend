import { AccountDto } from "dto/AccountDto";
import { currentUser } from "features/users/domain/services/UserService";
import React, { createContext, useContext, useEffect, useState } from "react";
type UserContextProps = {
  children: React.ReactNode;
};

interface UserContextType {
  user: AccountDto | null;
  updateUser: (userData: AccountDto | null) => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
export const UserProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<AccountDto | null>(null);

  const updateUser = (userData: AccountDto | null) => {
    setUser(userData);
  };

  const fetchCurrentUser = async () => {
    try {
      const response = await currentUser();
      if (response) {
        updateUser(response);
      } else {
        console.error("Failed to fetch current user");
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
