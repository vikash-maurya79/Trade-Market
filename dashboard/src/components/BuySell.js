import { useState } from "react";
import axios from "axios";

function BuySell({ setBuySell, id, name }) {
    let [Amount, setAmount] = useState();
    let [Quantity, setQuantity] = useState();
    let [Error, setError] = useState('');

    async function buyRequest(e) {
        setBuySell(null);
        if (Amount > 0 && Quantity > 0) {
            await axios.post("http://localhost:3001/buy",
                {
                    amount: Amount,
                    quantity: Quantity,
                    name: name,
                    id: id,
                    mode: 'Buy'
                },
                {
                    withCredentials: true
                });
            setAmount(0);
            setQuantity(0);
            console.log("Post request sent successfully");
        }
        else {
            setError('Somthing is missing !');
        }
    }

    function amountHandler(e) {
        setAmount(e.target.value);
        setError('');
    }
    function quantityHandler(e) {
        setQuantity(e.target.value);
        setError('');
    }
    return (
        <div className="container">
            <form onSubmit={(e) => { e.preventDefault() }}>
                <div className="row input-div">
                    <input type="Number" placeholder="Amount.." onChange={(e) => { amountHandler(e) }} value={Amount}></input>
                    <input type="Number" placeholder="Quantity.." onChange={(e) => { quantityHandler(e) }} value={Quantity}></input>
                </div>
                <div className="row text-center">
                    <p className="error-message">{Error}</p>
                </div>
                <div className="row buttons-div">
                    <button className="buy-button" onClick={(e) => { buyRequest(e) }}>Buy</button>
                    <button className='cancel-button' onClick={() => { setBuySell(null) }}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
export default BuySell;