import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import AddProductForm from "./pages/Addproduct";
import EditProductForm from "./pages/Editproduct";
import MessagingApp from "./pages/Messagingapp";

function App() {
	return (
		<div className='App'>
			<Router>
				{" "}
				{/* Use BrowserRouter and rename it to Router for convenience */}
				<Routes>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/homepage' element={<Homepage />} />
					<Route path='/addproduct' element={<AddProductForm />} />
					<Route path='/editproduct' element={<EditProductForm />} />
          <Route path='/chat' element={<MessagingApp />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
