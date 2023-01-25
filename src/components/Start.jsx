import React from "react";
import { useState } from "react";

const Start = (props) => {
	const { setStart, setOptions } = props;

	// Show Available Madlibz
	const [show, setShow] = useState(false);

	// Function to Show Available Madlibz
	const handleStart = () => {
		setShow(true);
	};

	// Function to Start Game
	const handleClick = (e) => {
		setStart(true);
		handleOptions(e);
	};

	// Function to Handle Options
	const handleOptions = (e) => {
		const selected = e.target.innerText;
		setOptions(selected)
	};

	return (
		<div>
			{!show ? (
				<div>
					<h1>Welcome to Madlibz City</h1>
					<button onClick={handleStart}>Start Game</button>
				</div>
			) : (
				<div>
					<button onClick={handleClick}>Funny</button>
					<button onClick={handleClick}>Sad</button>
				</div>
			)}
		</div>
	);
};

export default Start;
