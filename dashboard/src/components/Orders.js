function OrdersPage() {
    return (
        <div className="equity-container">                 {/*do not change the class name of this div */}
            <div className="order-container">
                <p>You have not placed any order today</p>
                

                <button className="btn btn-primary">Get started</button>

            </div>
        </div>
    );
}

export default OrdersPage;