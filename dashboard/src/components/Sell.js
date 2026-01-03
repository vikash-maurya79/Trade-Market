import { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Sell({ stock, setStock }) {
    const navigate = useNavigate();

    let [error, setError] = useState();
    let [quantity, setQuantity] = useState();

    function qunatityHandler(e) {
        if (e.target.value > stock.qty) {
            setError('Quantity should be in range');
        }
        if (e.target.value <= stock.qty) {
            setError('');
        }
        else {
            setQuantity(e.target.value);
        }
    }
    async function sellHandler() {
        if (quantity > Number(stock.qty)) {
            setError('Order canceled !');
            console.log('in case of greater route hitten');
        }
        else {

            setError('');
            await axios.post('http://localhost:3001/sell', {
                stockQty: stock.qty,
                stockId: stock._id
            }, {
                withCredentials: true
            }).then((res) => {
                setStock(null);
            }).catch((err) => {
                if (err.response.status === 401) {
                    navigate('/login');
                }
            })
            console.log('selling route hitten');
        }
    }

    return (
        <div className="container">
            <form onSubmit={(e) => { e.preventDefault() }}>
                <div className="row input-div">

                    <input type="number" placeholder="Quantity.." max={stock.qty} onChange={(e) => { qunatityHandler(e) }}></input>
                </div>
                <div className="row text-center">
                    <p className="error-message">{error}</p>
                </div>
                <div className="row buttons-div">
                    <Button variant="contained" color="success" onClick={sellHandler}>Sell</Button>
                    <Button variant="contained" color="error" onClick={() => { setStock(null) }}>Cancel</Button>
                </div>
            </form>
        </div>
    );
}
export default Sell;