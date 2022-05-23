import { SharedState } from "./hooks/useShareState";

export const SetNewUser = () => {
    const { setUser } = SharedState();
  return <button onClick={() => setUser({ firstName: "Carlos", lastName: "Matos" })}>Change User</button>
};