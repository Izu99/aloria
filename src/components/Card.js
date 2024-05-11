import React from "react";
import "../style/Card.css";
import img from "../images/item1.png";
import { NavLink } from "react-router-dom";

const Card = ({ products, index }) => {
	return (
		<div className='card p-0 mt-5'>
			<img src={img} alt='Product' className='card-img-top' />
			<div className='card-body'>
				<div className='col- m-0 p-0'>
					<h5 className='card-title title my-2'>Lorem, ipsum dolor.</h5>
				</div>
				<div className='content-level d-flex'>
					<div className='category'>Oily</div>
					<div className='m-0 py-0 px-2'>
						<p className='card-text price'>$20.00</p>
					</div>
				</div>
				<div className='description m-0 p-0'>
					<p>
						Lorem ipsum dolor sit amet 12 conseclit. Ullam dolor atque maxime? Deserunt, at quis.
					</p>
				</div>
				<div className={`quantity ${index === 1 ? "second-card" : ""}`}>
					<p className='p-1 m-0'>
						Quantity: <span> 10</span>
					</p>
				</div>

				{/* <div className={`quantity ${product.quantity < 10 ? 'low-quantity' : ''}`}>
        <p>
            Quantity: <span> {product.quantity}</span>
        </p>
    </div> */}
				<div className='buttons d-flex my-2'>
					<button className='btn d-flex'>
						<i className='fas fa-edit'></i> <NavLink to='/editproduct'> <p className='m-0 p-0'>Edit</p></NavLink>
					</button>
					<button className='btn d-flex'>
						<i className='fas fa-trash text-danger'></i>{" "}
						<NavLink to=''><p className='m-0 p-0 text-danger'>Delete</p></NavLink>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
