// user context
import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";

export interface User {
  id: string;
  userName: string;
  phoneNumber: string;
}

export interface UserContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContext>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
