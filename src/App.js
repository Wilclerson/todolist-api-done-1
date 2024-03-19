import React, { useEffect, useState } from "react";
import Item from "./item.jsx";

const Home = () => {
	const [textArray, setTextArray] = useState([
		{
			label: "example item",
			done: false
		}
	]);
	const [textBox, setTextBox] = useState("");

	function getList() {
		fetch('https://playground.4geeks.com/apis/fake/todos/user/wilclerson', {
		  method: 'GET',
		  headers: {
			'Content-Type': 'application/json'
		  }
		})
		  .then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		  })
		  .then(response => console.log('Success:', response))
		  .catch(error => console.error(error));
	}

	
	function updateList(data) {
		fetch('https://playground.4geeks.com/apis/fake/todos/user/wilclerson', {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		  .then(res => {
			  if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => console.log('Success:', response))
		.catch(error => console.error(error));
	}
	
	let listItem = {
		label: textBox,
		done: false
	}
	
	function handleOnEnter(event) {
		if (event.key === "Enter") {
			setTextArray(prevTextArray => [...prevTextArray, listItem]);
			setTextBox("");	
		}
	}
	
	function handleOnChange(event) {
		setTextBox(event.target.value);
	}
	
	function handleDelete(index) {
		setTextArray(prevTextArray => prevTextArray.filter((_, i) => i !== index));
	}
	
	useEffect(() => {
		console.log(textArray);
		updateList(textArray);
	}, [textArray])
	
	return (
    <div className="container">
		<div className="myList">
			<h1 className="heading">Sony's API React To Do List</h1>
			<ul className="list-group group">
				<input type="text" value={textBox} onKeyDown={handleOnEnter} onChange={handleOnChange} placeholder="Enter your next to do item here?"></input>
				{textArray.map((item, index) => (
					<Item key={index} text={item.label} onDelete={(() => handleDelete(index))}></Item>
					))}
			</ul>
		</div>
    </div>
	);
};

export default Home;