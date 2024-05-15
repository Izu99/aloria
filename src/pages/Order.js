import React, { useState } from 'react';
import '../style/Order.css';
import Select from 'react-select';

const Order = () => {
    // Sample data for the table
    const [orders, setOrders] = useState([
        {
            productName: 'Product A',
            customer: 'John Doe Abraham',
            category: 'Category A',
            address: '123 Main St, City',
            quantity: 10,
            price: '$50.00',
            status: 'Completed',
            img: 'https://via.placeholder.com/50'
        },
        {
            productName: 'Product B',
            customer: 'Jane Smith',
            category: 'Category B',
            address: '456 Elm St, Town',
            quantity: 5,
            price: '$30.00',
            status: 'Pending',
            img: 'https://via.placeholder.com/50'
        },
        {
            productName: 'Product C',
            customer: 'Mike Johnson',
            category: 'Category C',
            address: '789 Oak St, Village',
            quantity: 8,
            price: '$70.00',
            status: 'Rejected',
            img: 'https://via.placeholder.com/50'
        },
        {
            productName: 'Product D',
            customer: 'Emily Brown',
            category: 'Category D',
            address: '101 Pine St, Hamlet',
            quantity: 15,
            price: '$120.00',
            status: 'Delivering',
            img: 'https://via.placeholder.com/50'
        },
        {
            productName: 'Product E',
            customer: 'Alex Wilson',
            category: 'Category E',
            address: '222 Cedar St, Countryside',
            quantity: 12,
            price: '$90.00',
            status: 'Completed',
            img: 'https://via.placeholder.com/50'
        }
    ]);

    // Function to apply different colors based on status
    const getStatusColors = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return { bg: 'bg-success', text: 'text-success', color: '#198754' }; // green
            case 'pending':
                return { bg: 'bg-warning', text: 'text-warning', color: '#ffc107' }; // yellow
            case 'rejected':
                return { bg: 'bg-danger', text: 'text-danger', color: '#dc3545' }; // red
            case 'delivering':
                return { bg: 'bg-primary', text: 'text-primary', color: '#0d6efd' }; // blue
            default:
                return { bg: '', text: '', color: 'black' };
        }
    };

    // Define the options for the dropdown
    const statusOptions = [
        { value: 'Pending', label: 'Pending', ...getStatusColors('Pending') },
        { value: 'Delivering', label: 'Delivering', ...getStatusColors('Delivering') },
        { value: 'Completed', label: 'Completed', ...getStatusColors('Completed') },
        { value: 'Rejected', label: 'Rejected', ...getStatusColors('Rejected') }
    ];


    // Function to change the status of an order
    const changeStatus = (index, newStatus) => {
        const confirmation = window.confirm(`Are you sure you want to change the status to ${newStatus}?`);
        if (confirmation) {
            const newOrders = [...orders];
            newOrders[index].status = newStatus;
            setOrders(newOrders);
        }
    };

    return (
        <div className="container order">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Customer</th>
                        <th>Category</th>
                        <th>Address</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.productName}</td>
                            <td className=''>
                                <div className='d-flex' style={{ height: '100%' }}>
                                    <img
                                        src={order.img}
                                        alt="Customer"
                                        className="mr-2 rounded-circle"
                                       
                                    />
                                    <p className='ps-2'>{order.customer}</p>
                                </div>
                            </td>


                            <td>{order.category}</td>
                            <td>{order.address}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td className="position-relative d-flex align-items-center">
                                <span className={`dot ${getStatusColors(order.status).bg}`}></span>
                                <Select
                                    options={statusOptions}
                                    isSearchable={false}
                                    onChange={(option) => changeStatus(index, option.value)}
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            border: 'none',
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent'
                                        }),
                                        singleValue: (provided, state) => {
                                            const color = state.data.color;
                                            return { ...provided, color };
                                        },
                                        option: (provided, state) => {
                                            const color = state.data.color;
                                            return { ...provided, color };
                                        }
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Order;