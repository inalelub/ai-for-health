
import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import "../styles/DiagnosticTest.css";
const axios = require('axios');

function DiagnosticTest() {
	const [tests, setTests] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://localhost:73235/api/diagnosic-tests/all")
			.then((res) => res.json())
			.then((data) => {
				setTests(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

    function handleCreate(name, result, date) {

		axios.post("https://localhost:73235/api/diagnosic-tests/create", {
			name: name,
			result: result,
			date: date
		}).then(function (response) {
			console.log(response)
		}).catch(function (error) {
			console.log(error)
		});


    }

    function handleUpdate(input, name, result, date) {
		axios.put("https://localhost:73235/api/diagnosic-tests/update/" + input, {
			name: name,
			result: result,
			date: date
		}).then(function (response) {
			console.log(response)
		}).catch(function (error) {
			console.log(error)
		});
    }

    function handleDelete(input) {
		axios.delete("https://localhost:73235/api/diagnosic-tests/delete/" + input)
		.then(function (response) {
			console.log(response)
		}).catch(function (error) {
			console.log(error)
		});
    }

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

                        id="my-table"
					>
						<thead>
							<tr>
								<th>Name</th>
								<th>Result</th>
								<th>Date</th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{tests.map((n, idx) => (
								<tr key={idx}>
									<td>{n.Name}</td>
									<td>{n.Result}</td>
									<td>{n.Date}</td>
									<td><button onClick={handleCreate(n.Name, n.Result, n.Date)}>Create</button></td>
									<td><button onClick={handleUpdate(idx, n.Name, n.Result, n.Date)}>Update</button></td>
									<td><button onClick={handleDelete(idx)}>Delete</button></td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</>
	);
}

export default DiagnosticTest;
