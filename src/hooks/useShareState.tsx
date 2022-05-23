import React from "react";
import { IuserContext } from "../interfaces/IuserContext.I";
import { Iuser } from "../interfaces/user.I";

const MyContext = React.createContext<IuserContext>({
  user: {} as Iuser || null,
  setUser: () => {},
});

export const UseSharedState = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = React.useState<Iuser>({
    firstName: "John",
    lastName: "Doe",
  });
  return <MyContext.Provider value={{ user, setUser }}>{children}</MyContext.Provider>;
};

export const SharedState = () => {
  const context = React.useContext(MyContext);
  !context && console.error("Context is not defined");
  const { user, setUser } = context;
  return { user, setUser };
};
