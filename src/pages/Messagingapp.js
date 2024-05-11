import React, { useEffect, useState } from "react";
import "../style/Messagingapp.css";
import Sidebar from "../components/Sidebar";

const MessengerApp = () => {
	const [discussions, setDiscussions] = useState([
		{
			name: "jak",
			lastCustomerMessage: "", // Initialize lastCustomerMessage as an empty string
			timer: "12 sec",
			online: true,
			active: true,
			profileImage: "https://picsum.photos/50",
		},
		{
			name: "mike",
			lastCustomerMessage: "", // Initialize lastCustomerMessage as an empty string
			timer: "12 sec",
			online: true,
			active: true,
			profileImage: "https://picsum.photos/51",
		},
        {
			name: "fernando",
			lastCustomerMessage: "", // Initialize lastCustomerMessage as an empty string
			timer: "12 sec",
			online: true,
			active: true,
			profileImage: "https://picsum.photos/10",
		},
		// Add more discussions here...
	]);

	const [activeDiscussionIndex, setActiveDiscussionIndex] = useState(0);

	const handleDiscussionClick = (index) => {
		setActiveDiscussionIndex(index);
	};

	const updateChatContent = (discussionName) => {
		// Sample chat content for different discussions
		const chats = {
			jak: [
				{ sender: "Customer", message: "Hey, I have a question about a product." },
				{ sender: "Admin", message: "Sure, feel free to ask!" },
				// Add more chat content here...
			],
			mike: [
				{ sender: "Customer", message: "hgycghghgcquestion about a product." },
				{ sender: "Admin", message: "Sure, feel free to ask!" },
				{ sender: "Customer", message: "hihistion about a product." },
				// Add more chat content here...
			],
            fernando: [
				{ sender: "Customer", message: "hgycghghgcquestion about a product." },
				{ sender: "Admin", message: "Sure, feel free to ask!" },
				{ sender: "Customer", message: "hioduct." },
				// Add more chat content here...
			],
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
        <div className='col-10 bg-dark'><h2>Add Product</h2>
            <div className='row bg-light'>
                <div className="col-5">

					<section className='discussions'>
						{/* <div className='discussion search'>...</div> */}
						{discussions.map((discussion, index) => (
							<div
								key={index}
								className={`discussion ${index === activeDiscussionIndex ? "message-active" : ""}`}
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
                    <div className="col-7">
					<section className='chat'>
						{sampleChatContent.map((chat, index) => (
							<div
								key={index}
								className={`message ${chat.sender === "Admin" ? "sent" : "received"}`}>
								<div className='photo'>
									{chat.sender === "Customer" && (
										<img src={discussions[activeDiscussionIndex].profileImage} alt={chat.sender} />
									)}
								</div>
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
