import React, { useState } from "react";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [error, setError] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			!form.fullName ||
			!form.email ||
			!form.password ||
			!form.confirmPassword
		) {
			setError("All fields are required.");
			return;
		}

		if (form.password !== form.confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		setError("");
		console.log("Creating Account:", form);
		// Logic to register the user goes here

		navigate("/Home");
	};

	return (
		<div className="signup-page">
			<div className="signup-box">
				<h2 className="center-text">Create Account</h2>
				<p className="subtitle center-text">Join thousands using our AI health assistant</p>

				{error && <p className="error">{error}</p>}

				<form onSubmit={handleSubmit}>
					<label>Full Name</label>
					<input
						type="text"
						name="fullName"
						placeholder="Enter your full name"
						value={form.fullName}
						onChange={handleChange}
					/>

					<label>Email Address</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						value={form.email}
						onChange={handleChange}
					/>

					<label>Password</label>
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						value={form.password}
						onChange={handleChange}
					/>

					<label>Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirm your password"
						value={form.confirmPassword}
						onChange={handleChange}
					/>

					<button type="submit">Create Account</button>
				</form>

				<p className="signin-link">
					Already have an account?{" "}
					<span onClick={() => navigate("/login")}>Sign in</span>
				</p>

				<p className="terms">
					By creating an account, you agree to our{" "}
					<a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
				</p>
			</div>
		</div>
	);
}

export default SignUp;
