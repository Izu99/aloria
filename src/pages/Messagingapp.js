import React, { useEffect, useState } from "react";
import "../style/Messagingapp.css";
import Sidebar from "../components/Sidebar";

const MessengerApp = () => {
	const [discussions, setDiscussions] = useState([
		{
			name: "Jack",
			lastCustomerMessage: "", // Initialize lastCustomerMessage as an empty string
			timer: "12 sec",
			online: true,
			active: true,
			profileImage: "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			name: "Mike",
			lastCustomerMessage: "", // Initialize lastCustomerMessage as an empty string
			timer: "12 sec",
			online: true,
			active: true,
			profileImage: "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			name: "Fernando",
			lastCustomerMessage: "", // Initialize lastCustomerMessage as an empty string
			timer: "12 sec",
			online: true,
			active: true,
			profileImage: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			name: "Sarah",
			lastCustomerMessage: "", // Initialize lastCustomerMessage as an empty string
			timer: "12 sec",
			online: true,
			active: true,
			profileImage: "https://images.pexels.com/photos/7402883/pexels-photo-7402883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			name: "Emily",
			lastCustomerMessage: "", // Initialize lastCustomerMessage as an empty string
			timer: "12 sec",
			online: true,
			active: true,
			profileImage: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			name: "Olivia",
			lastCustomerMessage: "", // Initialize lastCustomerMessage as an empty string
			timer: "12 sec",
			online: true,
			active: true,
			profileImage: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		}
		// Add more discussions here...
	]);

	const [activeDiscussionIndex, setActiveDiscussionIndex] = useState(0);

	const handleDiscussionClick = (index) => {
		setActiveDiscussionIndex(index);
	};

	const updateChatContent = (discussionName) => {
		// Sample chat content for different discussions
		const chats = {
			
				[discussions[0].name]: [
					{ sender: "Customer", message: "Hey, I have a question about a product." },
					{ sender: "Admin", message: "Sure, feel free to ask!" },
					{ sender: "Customer", message: "Can you provide more details about the product specifications?" },
					{ sender: "Admin", message: "Of course, let me check and get back to you." },
					// Add more chat content here...
				],
				[discussions[1].name]: [
					{ sender: "Customer", message: "I'm interested in purchasing this item. Can you help me with the sizing?" },
					{ sender: "Admin", message: "Absolutely, let me assist you with that." },
					{ sender: "Customer", message: "Thank you! Also, do you offer any discounts for bulk orders?" },
					{ sender: "Admin", message: "Yes, we have special discounts available for bulk purchases. I can provide you with more information." },
					// Add more chat content here...
				],
				[discussions[2].name]: [
					{ sender: "Customer", message: "I received my order, but it seems to be damaged during shipping." },
					{ sender: "Admin", message: "We apologize for the inconvenience. Could you please provide some photos of the damage for us to assess?" },
					{ sender: "Customer", message: "Sure, I'll send them to you right away." },
					{ sender: "Admin", message: "Thank you for your cooperation. We'll resolve this issue as soon as possible." },
					// Add more chat content here...
				],
				[discussions[3].name]: [
					// Messages for the fourth discussion...
				],
				[discussions[4].name]: [
					// Messages for the fifth discussion...
				],
				[discussions[5].name]: [
					// Messages for the sixth discussion...
				]
			
			
			// Add more discussions and their chat content here...
		};

		return chats[discussionName] || [];
	};

	// Initialize discussion last customer messages on component mount
	useEffect(() => {
		const updatedDiscussions = discussions.map((discussion) => {
			const chatContent = updateChatContent(discussion.name);
			const lastCustomerMessage =
				chatContent.filter((chat) => chat.sender === "Customer").pop()?.message || "";
			return {
				...discussion,
				lastCustomerMessage: lastCustomerMessage,
			};
		});
		setDiscussions(updatedDiscussions);
	}, []);

	const sampleChatContent = updateChatContent(discussions[activeDiscussionIndex].name);

	return (
		<body>
			<div className='messagingapp container-fluid d-flex'>
				<div className='col-2 p-0 m-0'>
					<Sidebar />
				</div>
				<div className='col-10'>
					<div className='row'>
						<div className='col-5 p-3'>
							<section className='discussions'>
								{/* <div className='discussion search'>...</div> */}
								{discussions.map((discussion, index) => (
									<div
										key={index}
										className={`discussion ${
											index === activeDiscussionIndex ? "message-active" : ""
										}`}
										onClick={() => handleDiscussionClick(index)}>
										<div className='row'>
											<div className='col-2'>
												<div className='photo'>
													<img src={discussion.profileImage} alt={discussion.name} />
												</div>
											</div>
											<div className='col-10'>
												<p className='name'>{discussion.name}</p>
												<div className='row'>
													<div className='col-10'>
														<div className='desc-contact'>
															<div className='info'>
																<p className='message'>
																	{discussion.lastCustomerMessage.length > 45
																		? discussion.lastCustomerMessage.slice(0, 45) + "..."
																		: discussion.lastCustomerMessage}
																</p>
															</div>
														</div>
													</div>
													<div className='col-2'>
														<div className='time'>{discussion.timer}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</section>
						</div>
						<div className='col-7 pt-2'>
							<section className='chat'>
								<div className='row'>
									<div className='col-1'>
										<img src={discussions[activeDiscussionIndex].profileImage} alt='' />
									</div>
									<div className='col-11'>
										<h2>{discussions[activeDiscussionIndex].name}</h2>
									</div>
								</div>
								{sampleChatContent.map((chat, index) => (
									<div
										key={index}
										className={`message ${chat.sender === "Admin" ? "sent" : "received"}`}>
										
										<div className='bubble'>
											<p>{chat.message}</p>
										</div>
									</div>
								))}
							</section>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};

export default MessengerApp;
