import { createContext } from "react";
import { useAuth } from "../AuthContext";
import { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stockContext = createContext();

export const StockContextProvider = ({ children }) => {
    const { isLoggedIn } = useAuth();
    let [quantity, setQuantity] = useState();
    let [allHoldings, setHoldings] = useState([]);
    let [error, setError] = useState();

    let navigate = useNavigate();



    async function fetchHoldings() {
        let res = await axios.get("http://localhost:3001/holdings", {
            withCredentials: true
        });
        if (res.data) {
            setHoldings(res.data);
        }
    }
    async function sellHandler(stock, setStock) {
        if (quantity > stock.qty) {
            setError('Order canceled !');
            console.log('in case of greater route hitten');
        }
        else {

            setError('');
            await axios.post('http://localhost:3001/sell', {
                stockQty: quantity,
                stockId: stock._id
            }, {
                withCredentials: true
            }).then((res) => {
                setStock(null);
            }).catch((err) => {
                if (err.response.status === 401) {
                    navigate('/login');
                }
                if (err.response.status === 500) {
                    setError('Retry');
                }
            })
            await fetchHoldings();
        }
    }
    useEffect(() => {
        if (isLoggedIn) {
            fetchHoldings();
        }
    }, [isLoggedIn])


    return (
        <stockContext.Provider value={{ allHoldings, setHoldings, error, setError, quantity, setQuantity, sellHandler }}>{children}</stockContext.Provider>
    )
}

export function useStock() {
    return useContext(stockContext);
}

