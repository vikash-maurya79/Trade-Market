import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { StockChart } from "./StockChart";

function StockPage() {
    let { id } = useParams();
    let [stock, setStock] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        async function runner() {
            try {
                let res = await axios.get(`http://localhost:3001/stock/${id}`
                    , { withCredentials: true }
                );

                setStock(res.data.data);

            } catch (error) {

                if (error.response.status === 404 || error.response.status === 500) {
                    setError(error.response.data.message);
                }
            }

        }
        runner();
    }, [id])

    if (!stock) {
        return (
            <div className="container text-center" style={{ height: '100%', }}>
                <h5 style={{ marginTop: '250px' }}>  <CircularProgress enableTrackSlot size="3rem" /> </h5>
            </div>

        )
    }

    let yesterdayPrice;
    const value = Math.abs(parseFloat(stock.percent));

    if (stock.percent[0] === '-') {
        let decreasedPrice = (stock.price * value) / 100;
        yesterdayPrice = stock.price + decreasedPrice;
    }
    else {
        let increasedPrice = (stock.price * value) / 100;
        yesterdayPrice = stock.price - increasedPrice;
    }

    let datarr = [{

        price: yesterdayPrice

    }, {
        price: stock.price
    }]


    const labels = ['Price yesterday', 'Price today'];

    const data = {
        labels,
        datasets: [
            {
                label: stock.name,
                data: datarr.map((d) => d.price),
                backgroundColor: 'rgba(23, 86, 162, 0.5)',
            },

        ],
    };

    return (
        <>
            {error ? <h5>{error}</h5> : <></>


            }
            <>
                <div className="graph-container">
                    <StockChart data={data} />
                </div>
            </>


        </>
    );
}

export default StockPage;