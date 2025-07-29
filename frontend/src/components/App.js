import React from "react";
import ChatBot from "./chat";
import LandingPage from "./AuthForm";
import LoginForm from "./login";
import SignUp from "./sigup";
import Home from "./Home";
import Notification from "./Notification";
import DiagnosticTest from "./DiagnosticTest";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/home" element={<Home />} />
			<Route path="/chat" element={<ChatBot />} />
			<Route path="/login" element={<LoginForm />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/notification" element={<Notification />} />
			<Route path="/diagnostic-test" element={<DiagnosticTest />} />
		</Routes>
	);
}

export default App;
