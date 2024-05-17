import React, { useState } from 'react';
import '../style/Order.css';
import Select from 'react-select';
import chroma from 'chroma-js';
import Swal from 'sweetalert2';
import Sidebar from '../components/Sidebar';

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
            status: 'Pending',
            img: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            productName: 'Product B',
            customer: 'Jane Smith',
            category: 'Category B',
            address: '456 Elm St, Town',
            quantity: 5,
            price: '$30.00',
            status: 'Pending',
            img: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            productName: 'Product C',
            customer: 'Michael Johnson',
            category: 'Category A',
            address: '789 Oak St, Village',
            quantity: 20,
            price: '$100.00',
            status: 'Pending',
            img: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            productName: 'Product D',
            customer: 'Emily Williams',
            category: 'Category C',
            address: '101 Pine St, Hamlet',
            quantity: 8,
            price: '$45.00',
            status: 'Pending',
            img: 'https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            productName: 'Product E',
            customer: 'Daniel Brown',
            category: 'Category A',
            address: '222 Cedar St, Village',
            quantity: 15,
            price: '$75.00',
            status: 'Pending',
            img: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            productName: 'Product F',
            customer: 'Olivia Davis',
            category: 'Category B',
            address: '333 Maple St, Town',
            quantity: 12,
            price: '$60.00',
            status: 'Pending',
            img: 'https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            productName: 'Product G',
            customer: 'Ethan Wilson',
            category: 'Category C',
            address: '444 Walnut St, Hamlet',
            quantity: 6,
            price: '$35.00',
            status: 'Pending',
            img: 'https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            productName: 'Product H',
            customer: 'Ava Garcia',
            category: 'Category A',
            address: '555 Birch St, Village',
            quantity: 18,
            price: '$90.00',
            status: 'Pending',
            img: 'https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            productName: 'Product I',
            customer: 'William Rodriguez',
            category: 'Category B',
            address: '666 Oak St, Town',
            quantity: 9,
            price: '$55.00',
            status: 'Pending',
            img: 'https://images.pexels.com/photos/1435612/pexels-photo-1435612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            productName: 'Product J',
            customer: 'Sophia Martinez',
            category: 'Category C',
            address: '777 Pine St, Hamlet',
            quantity: 11,
            price: '$65.00',
            status: 'Pending',
            img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
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
    // Styles for the dropdown
    const colourStyles = {
        control: (styles) => ({ ...styles, border: 'none', boxShadow: 'none', backgroundColor: 'transparent' }),
        singleValue: (provided, state) => {
            const color = chroma(state.data.color);
            return { ...provided, color: color.css() };
        },
        option: (provided, state) => {
            const color = chroma(state.data.color);
            return {
                ...provided,
                color: state.isSelected ? (chroma.contrast(color, '#ee12ed75') > 2 ? 'white' : 'black') : color.css(),
                backgroundColor: state.isSelected ? '#eeeeed75' : provided.backgroundColor,
            };
        }
    };

    return (
        <div className="container-fluid order">
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
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
                                                className="rounded-circle"

                                            />
                                            <p className='px-2 pt-1 m-0'>{order.customer}</p>
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
                                            isSearchable={true}
                                            defaultValue={statusOptions.find(option => option.value === order.status)}
                                            onChange={(option) => changeStatus(index, option.value)}
                                            styles={colourStyles}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Order;