import React from "react";
import { useState } from "react";

const Start = () => {
	// Show Available Madlibz
	const [show, setShow] = useState(false);
	
	// Function to Start Game
	const handleStart = () => {
		setShow(true);
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
					<button>Funny Madlib</button>
					<button>Sad Madlib</button>
				</div>
			)}
		</div>
	);
};

export default Start;
