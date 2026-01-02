import { useState } from "react";
import EquityList from "./Equity";
import CurrencyList from "./Currency";
import CommodityList from "./Commodity";

function Brokerage() {
    let [equity, setEquity] = useState(true);
    let [currency, setCurrency] = useState(false);
    let [commodity, setCommodity] = useState(false);

    function equityController() {
        setEquity(true);
        setCommodity(false);
        setCurrency(false);
    }
    function currencyController() {
        setCurrency(true);
        setEquity(false);
        setCommodity(false);
    }
    function commodityController() {
        setCommodity(true);
        setCurrency(false);
        setEquity(false);
    }

    return (
        <div className="container">
            <div className="row m-5 border-bottom">
                <div className="col">
                    <div className="row">
                        <div className={equity ? "col bottom-color text-center" :"col text-center"}>
                            <button className="btn eq-button" onClick={equityController}>Equity</button>
                        </div>
                        <div className={currency ? "col bottom-color text-center":"col text-center"}>
                            <button className="btn eq-button" onClick={currencyController}>Currency</button>
                        </div>
                        <div className={commodity ? "col bottom-color text-center":"col text-center"}>
                            <button className="btn eq-button" onClick={commodityController}>Commodity</button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            {equity ? <EquityList /> :''}
            {currency ? <CurrencyList /> :''}
            {commodity ? <CommodityList /> :''}
        </div>
    );
}

export default Brokerage;