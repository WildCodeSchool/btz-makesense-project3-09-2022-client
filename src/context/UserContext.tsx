/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../../util/axiosInstances";

type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  role: string;
};

interface IUserContext {
  user: TUser | null;
  isAuth: boolean;
  signIn: (credentials: TCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

type TUserContextProviderProps = {
  children: React.ReactNode;
};

type TCredentials = {
  email: string;
  password: string;
};

type AuthState = {
  user: TUser | null;
  isAuth: boolean;
  isLoading: boolean;
};

const UserContext = createContext<IUserContext | null>(null);

function UserContextProvider({ children }: TUserContextProviderProps) {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuth: false,
    isLoading: true,
  });

  const signIn = async ({ email, password }: TCredentials) => {
    try {
      const { data, headers } = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });
      setAuthState(() => ({
        isAuth: true,
        user: data,
        isLoading: false,
      }));
      const token = headers["authorization"];
      axiosInstance.defaults.headers.common.authorization = token;
      localStorage.setItem("token", token || "");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    setAuthState({
      user: null,
      isAuth: false,
      isLoading: false,
    });
    localStorage.removeItem("token");
    axiosInstance.defaults.headers.common.authorization = "";
    router.reload();
  };

  useEffect(() => {
    if (!authState.isAuth) {
      router.push("/auth/signin");
    }
  }, []);

  if (
    router.pathname !== "/auth/signin" &&
    router.pathname !== "/auth/renewpassword" &&
    router.pathname !== "/auth/signup" &&
    authState.isAuth === false
  )
    return "Unauthorized";

  return (
    <UserContext.Provider
      value={{
        user: authState.user,
        isAuth: authState.isAuth,
        signIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export const useAuth = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }
  return context;
};

export default UserContextProvider;
