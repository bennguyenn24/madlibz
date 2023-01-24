import React from "react";
import { useState } from "react";

const FunForm = () => {
	const [index, setIndex] = useState(0);
	// # Input Handler
	// Array to store the values
	const typeArr = [
		"noun", 
		"adjective", 
		"noun (plural)", 
		"famous person", 
		"place", 
		"verb (ending in ing)",
		"adjective",
		"your favorite song",
		"verb (ending in ed)",
		"adverb",
		"verb (ending in ing)",
		"name of supermodel",
		"adjective",
	]
	
	const handleClick = () => {

	}

 	return (
		<div>
			<h1>Weird Day Ad-Lib</h1>
			<form>
				<p>Enter {typeArr[index]}</p>
				<input type="text" placeholder={typeArr[index]} />
			</form>
			<button>Add Word</button>
		</div>
	);
};

export default FunForm;
