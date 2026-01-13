import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const userContext = createContext();


export const UserContextProvider = ({ children }) => {
    let [user, setUser] = useState(null);

    async function runner() {
        let User = await axios.get('http://localhost:3001/check-user/user/api',
            {
                withCredentials: true
            }
        )
        if (!User) {
            setUser(null);
        }
        setUser(User.data.user);
    }
    useEffect(() => {
        runner();
    }, [])

    return (
        <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>
    )
}
export function useUser() {
    return useContext(userContext);
};
