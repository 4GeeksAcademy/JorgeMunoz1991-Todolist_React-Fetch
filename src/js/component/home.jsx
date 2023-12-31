import React, { useEffect, useState } from "react";



//create your first component
const Home = () => {

	const [users, setUsers] = useState();
	const host = "https://jsonplaceholder.typicode.com/"

	const fetchUsers = async () => {
		const url = host + "todos"
		const request = {
			method: "GET"
		}
		const response = await fetch(url, request)
		if (response.ok) {
			const data = await response.json();
			setUsers(data);
		}
		else {"Error"}
	}

	useEffect(() => {
		fetchUsers();
	}, [])


	return (
		<div className="text-center">
			<ul>
				{users? users.map((users) => <li>{users.userId} - {users.id} - {users.title} {users.completed? <i className="fa-solid fa-check text-success"></i> : <i className="fa-solid fa-xmark text-danger"></i>}</li>)
				: "Leyendo datos"}
			</ul>
		</div>
	);
};

export default Home;
