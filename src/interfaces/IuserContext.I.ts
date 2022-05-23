import { Iuser } from "./user.I";

export interface IuserContext {
  user: Iuser;
  setUser: React.Dispatch<React.SetStateAction<Iuser>>;
}
