import React, { useRef, useState } from "react";
import "../style/Addproduct.css";
import placeholderImage from "../images/sample-image.png";
import Sidebar from "../components/Sidebar";

const AddProductForm = () => {
	const [image, setImage] = useState(placeholderImage);
	const fileInput = useRef(null);

	const handleImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setImage(reader.result);
			};

			reader.readAsDataURL(event.target.files[0]);
		}
	};

	return (
		<div className='messagingapp container-fluid d-flex p-0 m-0'>
				<div className='col-2 col-md-1 col-sm-1 col-lg-2'>
					<Sidebar />
				</div>
				<div className='col-10 col-md-11 col-sm-11 col-lg-10'>
					<h2>Add Product</h2>
				<div className='row'>
					<div className='col-12 bg-dar'>
						<form className='add-product-form mt-5'>
							
							<div className='row m-0 p-0 '>
								<div className='col-9'>
									<div className='form-group my-2'>
										<input type='text' className='form-control' placeholder="Product Name"/>
									</div>
									<div className='form-group my-2'>
										<input type='number' className='form-control' placeholder="Quantity"/>
									</div>
									<div className='form-group my-2'>
										<textarea className='form-control' placeholder="Description"></textarea>
									</div>
									<div className='form-group my-2'>
										<select className='form-control'>
											<option>Category 1</option>
											<option>Category 2</option>
											<option>Category 3</option>
										</select>
									</div>
									<div className='form-group my-2'>
										<select className='form-control'>
											<option>Brand 1</option>
											<option>Brand 2</option>
											<option>Brand 3</option>
										</select>
									</div>
									<div className='form-group'>
										<input
											type='file'
											ref={fileInput}
											style={{ display: "none" }}
											onChange={handleImageChange}
										/>
									</div>
									<button
								type='submit'
								className='btn'
								>
								Add Item
							</button>
								</div>
								<div className='col-3'>
									<img
										src={image}
										alt='Preview'
										className='preview-image img-fluid'
										onClick={() => fileInput.current.click()}
										style={{ cursor: "pointer" }}
									/>
								</div>
							</div>
						
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddProductForm;
