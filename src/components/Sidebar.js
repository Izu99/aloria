import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../images/profile-image.jpg";
import "../style/Sidebar.css";

const Sidebar = () => {
    const [isProductsOpen, setProductsOpen] = useState(false);
    const [isOrdersOpen, setOrdersOpen] = useState(false);

    // Toggle dropdown state
    const toggleDropdown = (dropdown) => {
        if (dropdown === 'products') {
            setProductsOpen(!isProductsOpen);
        } else if (dropdown === 'orders') {
            setOrdersOpen(!isOrdersOpen);
        }
    };

	return (
		<div className='sidebar'>
			<div className='profile d-flex mt-1'>
				<h5 className='m-3'>Hello, Ayesh</h5>
				<img src={img} alt='' />
			</div>
			<nav>
				<ul className='list-unstyled ps-0'>
					<li className='py-2'>
						<NavLink to='/item-management' className='btn btn-toggle' activeClassName='active'>
							<i class='fa-solid fa-chart-line'></i> Dashboard
						</NavLink>
					</li> 
					 <li className='py-2'>
                    <button className='btn btn-toggle' onClick={() => toggleDropdown('products')}>
                        <i className='fa-solid fa-box-archive'></i> Products <i className={`fa fa-caret-down ${isProductsOpen ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                    </button>
                    <div className={`dropdown-container ${isProductsOpen ? 'd-block' : 'd-none'}`}>
						<NavLink to='/addproduct' className='dropdown-item'>AddProduct</NavLink>
                        <NavLink to='/categories' className='dropdown-item'>Categories</NavLink>
                        <NavLink to='/brands' className='dropdown-item'>Brands</NavLink>
                    </div>
                </li>
                <li className='py-2'>
                    <button className='btn btn-toggle' onClick={() => toggleDropdown('orders')}>
                        <i className='fa-solid fa-cart-shopping'></i> Orders <i className={`fa fa-caret-down ${isOrdersOpen ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                    </button>
                    <div className={`dropdown-container ${isOrdersOpen ? 'd-block' : 'd-none'}`}>
                        <NavLink to='/order' className='dropdown-item'>Completed</NavLink>
                        <NavLink to='/orders/pending' className='dropdown-item'>Pending</NavLink>
                        <NavLink to='/orders/rejected' className='dropdown-item'>Rejected</NavLink>
                    </div>
                </li>
                <li className='py-2'>
						<NavLink to='/delivery-management' className='btn btn-toggle ' activeClassName='active'>
							<i class='fa-solid fa-users'></i> Customers
						</NavLink>
					</li>
					<li className='py-2'>
						<NavLink to='/delivery-management' className='btn btn-toggle ' activeClassName='active'>
							<i class='fa-solid fa-money-check'></i> Transactions
						</NavLink>
					</li>
					<li className='py-2'>
						<NavLink to='/chat' className='btn btn-toggle ' activeClassName='active'>
							<i class='fa-solid fa-money-check'></i> Chat
						</NavLink>
					</li>
				</ul>
				<NavLink to='/login' className='btn btn-toggle ' activeClassName='active'>
					<i class='fa-solid fa-right-from-bracket'></i> <p className="logout"> Logout</p>
				</NavLink>
			</nav>
			<div className='flex-grow-1 p-3' style={{ overflowY: "auto" }}>
				{/* The main content will be rendered here based on the route */}
			</div>
		</div>
	);
};

export default Sidebar;
