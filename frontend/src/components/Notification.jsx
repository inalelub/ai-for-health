import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import "../styles/Notification.css";

function Notification() {
	const [notifications, setNotifications] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://localhost:73235/api/notifications")
			.then((res) => res.json())
			.then((data) => {
				setNotifications(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	return (
		<>
			<Navbar />

			<div className="fix-surrounding">
				{loading ? (
					<p>Loading...</p>
				) : (
					<table
						style={{
							border: "1px solid black",
							borderCollapse: "collapse",
							letterSpacing: "1px",
						}}
					>
						<thead>
							<tr>
								<th>Title</th>
								<th>Timestamp</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{notifications.map((n, idx) => (
								<tr key={idx}>
									<td>{n.title}</td>
									<td>{n.timestamp}</td>
									<td>{n.status}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</>
	);
}

export default Notification;
