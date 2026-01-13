import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const authContext = createContext();
export const AuthContextProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [isLoggedIn, setIsLoggedIn] = useState(false);

    async function runner() {
        try {
            let flag = await axios.get('http://localhost:3001/check-user/login/api',

                {
                    withCredentials: true
                })
            if (flag.status === 200) {
                setIsLoggedIn(true);
            }
            else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            setIsLoggedIn(false);
        }
        finally {
            setLoading(false);
        }

    }
    useEffect(() => {
        runner();
    }, [])
    return (

        <authContext.Provider value={{
            loading: loading,
            isLoggedIn: isLoggedIn,
            setIsLoggedIn,
            setLoading
        }}>{children}</authContext.Provider>
    )
}
export function useAuth() {
    return useContext(authContext);
}