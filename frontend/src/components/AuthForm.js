// src/components/LandingPage.js
import React from "react";
import "../styles/AuthForm.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
	const navigate = useNavigate();

	const handleSignIn = () => {
		navigate("/login");
	};

	const handleSignUp = () => {
		navigate("/signup");
	};

	return (
		<div className="landing-container">
			<header className="header">
				<h1>Symptom Checker Bot</h1>
				<div className="nav-buttons">
					<button className="btn" onClick={handleSignIn}>
						Sign In
					</button>
					<button className="btn primary" onClick={handleSignUp}>
						Get Started
					</button>
				</div>
			</header>

			<section className="hero">
				<h2>Your AI-Powered Health Assistant</h2>
				<p>
					Get instant, intelligent health guidance 24/7. Our advanced AI helps
					you understand your symptoms and provides evidence-based
					recommendations for your well-being.
				</p>
				<div className="hero-actions">
					<button className="btn primary">Start Symptom Check</button>
					<button className="btn">Try Demo</button>
				</div>
				<div className="stats">
					<div>
						<strong>24/7</strong>
						<span>Available</span>
					</div>
					<div>
						<strong>10k+</strong>
						<span>Users Helped</span>
					</div>
					<div>
						<strong>95%</strong>
						<span>Accuracy</span>
					</div>
				</div>
			</section>

			<section className="why-choose">
				<h3>Why Choose Our Symptom Checker</h3>
				<p>
					Experience the future of healthcare with our intelligent symptom
					checker. Get reliable health guidance powered by advanced AI
					technology.
				</p>
				<div className="features-section">
					<h2>Why Choose Our Symptom Checker</h2>
					<div className="features-grid">
						<div className="feature-card">
							<h3>AI-Powered Analysis</h3>
							<p>
								Advanced algorithms analyze your symptoms and provide
								intelligent health insights based on medical knowledge.
							</p>
						</div>
						<div className="feature-card">
							<h3>24/7 Availability</h3>
							<p>
								Get instant health guidance anytime, anywhere. No appointments
								needed - just describe your symptoms.
							</p>
						</div>
						<div className="feature-card">
							<h3>Privacy Protected</h3>
							<p>
								Your health information is completely private and secure. We
								never store personal medical data.
							</p>
						</div>
						<div className="feature-card">
							<h3>Easy to Use</h3>
							<p>
								Simple chat interface makes it easy to describe symptoms and get
								personalized health recommendations.
							</p>
						</div>
						<div className="feature-card">
							<h3>Evidence-Based</h3>
							<p>
								All recommendations are based on current medical guidelines and
								evidence-based healthcare practices.
							</p>
						</div>
						<div className="feature-card">
							<h3>Emergency Detection</h3>
							<p>
								Identifies serious symptoms that require immediate medical
								attention and guides you appropriately.
							</p>
						</div>
					</div>
				</div>
			</section>

			<div>
				<section className="disclaimer">
					<h4>Important Disclaimer</h4>
					<p>
						This symptom checker is for informational purposes only and is not a
						substitute for professional medical advice. In an emergency, call
						your local services immediately.
					</p>
				</section>
			</div>

			<footer className="footer">
				<div className="footer-links">
					<div>
						<h5>Quick Links</h5>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Features</li>
							<li>Contact</li>
						</ul>
					</div>
					<div>
						<h5>Health Resources</h5>
						<ul>
							<li>Common Symptoms</li>
							<li>Health Tips</li>
							<li>Emergency Guide</li>
							<li>When to See a Doctor</li>
						</ul>
					</div>
					<div>
						<h5>Legal</h5>
						<ul>
							<li>Privacy Policy</li>
							<li>Terms of Service</li>
							<li>Medical Disclaimer</li>
							<li>Cookie Policy</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
