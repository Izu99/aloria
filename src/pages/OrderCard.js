import React from 'react';
import '../style/OrderCard.css';

const OrderCard = ({ order }) => {
    return (
        <div className="row">
            <div className="col-12 col-lg-4 col-md-12 col-sm-6">
                <div className="card order-card">

                    <div className="card-body order-details">
                        <h5 className="card-title mb-4">{order.productName}</h5>
                        <div className="row">
                            <div className="col-2">
                                <img src={order.img} className="" alt="Customer" />
                            </div>
                            <div className="col-10">
                                <p className="card-text">{order.customer}</p>
                            </div>
                        </div>
                        <p className="card-text"><strong> Category:</strong> {order.category}</p>
                        <p className="card-text"><strong>Address:</strong> {order.address}</p>
                        <p className="card-text"><strong>Quantity:</strong> {order.quantity}</p>
                        <p className="card-text"><strong>Order Date:</strong> {order.orderDate}</p>
                        <p className="card-text"><strong>Price:</strong> {order.price}</p>

                    </div>
                    <div className={`order-status ${order.status.toLowerCase()}`}>
                        <span>{order.status}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
