
import Button from "@mui/material/Button";
import { useStock } from "./Context/StockContext";

function Sell({ stock, setStock }) {
    const { setError, error, sellHandler, setQuantity } = useStock();
    function qunatityHandler(e) {
        if (e.target.value > stock.qty) {
            setError('Quantity should be in range');
        }
        if (e.target.value <= stock.qty) {
            setError('');
        }
        setQuantity(e.target.value);
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
                    <Button variant="contained" color="success" onClick={() => { sellHandler(stock, setStock) }}>Sell</Button>
                    <Button variant="contained" color="error" onClick={() => { setStock(null) }}>Cancel</Button>
                </div>
            </form>
        </div>
    );
}
export default Sell;